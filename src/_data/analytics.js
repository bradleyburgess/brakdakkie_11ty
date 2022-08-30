require('dotenv').config();

if (!process.env.ANALYTICS_IMGSRC || !process.env.ANALYTICS_SCRIPTSRC)
  throw new Error('Analytics variables not set');

module.exports = () => ({
  imgSrc: process.env.ANALYTICS_IMGSRC,
  scriptSrc: process.env.ANALYTICS_SCRIPTSRC,
});
