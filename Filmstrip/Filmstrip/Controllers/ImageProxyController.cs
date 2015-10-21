using System;
using System.Collections.Generic;
using System.Configuration;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Caching;
using System.Web.Mvc;

namespace Filmstrip.Controllers
{
    public class ImageResult : ActionResult
    {
        public ImageResult() { }

        public Image Image { get; set; }
        public ImageFormat ImageFormat { get; set; }

        public override void ExecuteResult(ControllerContext context)
        {
            // verify properties 
            if (Image == null)
            {
                throw new ArgumentNullException("Image");
            }
            if (ImageFormat == null)
            {
                throw new ArgumentNullException("ImageFormat");
            }

            // output 
            context.HttpContext.Response.Clear();

            if (ImageFormat.Equals(ImageFormat.Bmp)) context.HttpContext.Response.ContentType = "image/bmp";
            if (ImageFormat.Equals(ImageFormat.Gif)) context.HttpContext.Response.ContentType = "image/gif";
            if (ImageFormat.Equals(ImageFormat.Icon)) context.HttpContext.Response.ContentType = "image/vnd.microsoft.icon";
            if (ImageFormat.Equals(ImageFormat.Jpeg)) context.HttpContext.Response.ContentType = "image/jpeg";
            if (ImageFormat.Equals(ImageFormat.Png)) context.HttpContext.Response.ContentType = "image/png";
            if (ImageFormat.Equals(ImageFormat.Tiff)) context.HttpContext.Response.ContentType = "image/tiff";
            if (ImageFormat.Equals(ImageFormat.Wmf)) context.HttpContext.Response.ContentType = "image/wmf";

            Image.Save(context.HttpContext.Response.OutputStream, ImageFormat);
        }
    }

    public class ImageProxyController : Controller
    {
        private Dictionary<string, ImageFormat> mimeTypes = new Dictionary<string, ImageFormat>
        {
            {"image/gif", ImageFormat.Gif},
            {
                "image/jpeg", ImageFormat.Jpeg
            },
            {
                "image/png", ImageFormat.Png
            },
        };

        // GET: ImageProxy
        public ActionResult Index(string url)
        {
            var imageResult = (ImageResult) HttpContext.Cache.Get(url);
            if (imageResult == null)
            {
                ImageFormat format;

                Image image;
                using (var client = new WebClient())
                {
                    try
                    {
                        var data = client.DownloadData(url);
                        var contentType = client.ResponseHeaders["Content-Type"];
                        format = mimeTypes[contentType];
                        var ms = new MemoryStream();
                        ms.Write(data, 0, data.Length);
                        image = System.Drawing.Image.FromStream(ms);

                    }
                    catch (WebException exception)
                    {
                        return new HttpNotFoundResult();
                    }
                }
                imageResult = new ImageResult {Image = image, ImageFormat = format};

                HttpContext.Cache.Add(url, imageResult, null, DateTime.Now.AddHours(1), Cache.NoSlidingExpiration, CacheItemPriority.Default, null);
            }
            return imageResult;
        }
    }
}