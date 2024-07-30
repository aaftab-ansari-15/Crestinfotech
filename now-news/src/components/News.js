import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  articles = [
    {
      id: 1,
      source: { id: "google-news", name: "Google News" },
      author: "Page Six",
      title:
        "Selena Gomez reveals which cosmetic procedure she’s had done after fan speculation - Page Six",
      description: null,
      url: "https://news.google.com/rss/articles/CBMid2h0dHBzOi8vcGFnZXNpeC5jb20vMjAyNC8wNy8yOS9zdHlsZS9zZWxlbmEtZ29tZXotcmV2ZWFscy13aGljaC1jb3NtZXRpYy1wcm9jZWR1cmUtc2hlcy1oYWQtZG9uZS1hZnRlci1mYW4tc3BlY3VsYXRpb24v0gEA?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T09:35:00Z",
      content: null,
    },
    {
      id: 2,
      source: { id: "google-news", name: "Google News" },
      author: "CNBC",
      title: "Biden rolls out plan to overhaul the Supreme Court - CNBC",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiV2h0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjQvMDcvMjkvYmlkZW4tcm9sbHMtb3V0LXBsYW4tdG8tb3ZlcmhhdWwtdGhlLXN1cHJlbWUtY291cnQuaHRtbNIBW2h0dHBzOi8vd3d3LmNuYmMuY29tL2FtcC8yMDI0LzA3LzI5L2JpZGVuLXJvbGxzLW91dC1wbGFuLXRvLW92ZXJoYXVsLXRoZS1zdXByZW1lLWNvdXJ0Lmh0bWw?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T09:30:01Z",
      content: null,
    },
    {
      id: 3,
      source: { id: "google-news", name: "Google News" },
      author: "BBC.com",
      title: "Venezuelans in tense wait for election results - BBC.com",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jejdlazI3ajdqM2_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvY3o3ZWsyN2o3ajNvLmFtcA?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T09:20:23Z",
      content: null,
    },
    {
      id: 4,
      source: { id: null, name: "NPR" },
      author: "abc",
      title:
        "A protein called Reelin keeps popping up in brains that resist aging and Alzheimer’s - NPR",
      description:
        "Early in life, the protein Reelin helps assemble the brain. Later on, it appears to protect the organ from Alzheimer’s and other threats to memory and thinking.",
      url: "https://www.npr.org/sections/shots-health-news/2024/07/29/g-s1-13519/alzheimers-protein-reelin-brain-aging-amyloid-tau-memory",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T09:00:00Z",
      content:
        "A key protein that helps assemble the brain early in life also appears to protect the organ from Alzheimers and other diseases of aging.\r\nA trio of studies published in the past year all suggest that… [+5997 chars]",
    },
    {
      id: 5,
      source: { id: "google-news", name: "Google News" },
      author: "DW (English)",
      title: "France: Telecom fiber optic networks sabotaged - DW (English)",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiTmh0dHBzOi8vd3d3LmR3LmNvbS9lbi9mcmFuY2UtdGVsZWNvbS1maWJlci1vcHRpYy1uZXR3b3Jrcy1zYWJvdGFnZWQvYS02OTc5NTM1MdIBTmh0dHBzOi8vYW1wLmR3LmNvbS9lbi9mcmFuY2UtdGVsZWNvbS1maWJlci1vcHRpYy1uZXR3b3Jrcy1zYWJvdGFnZWQvYS02OTc5NTM1MQ?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T08:37:30Z",
      content: null,
    },
    {
      id: 6,
      source: { id: "google-news", name: "Google News" },
      author: "Newsweek",
      title:
        "Kamala Harris' Approval Rating Surges as Donald Trump's Falls - Newsweek",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiSmh0dHBzOi8vd3d3Lm5ld3N3ZWVrLmNvbS9rYW1hbGEtaGFycmlzLWFwcHJvdmFsLXJhdGluZy10cnVtcC1pcHNvcy0xOTMxMjg50gEA?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T08:28:36Z",
      content: null,
    },
    {
      id: 7,
      source: { id: "google-news", name: "Google News" },
      author: "The Washington Post",
      title:
        "Alzheimer’s blood test shows 90% accuracy, outperforming other exams - The Washington Post",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiR2h0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9oZWFsdGgvMjAyNC8wNy8yOS9hbHpoZWltZXJzLWJsb29kLXRlc3Qv0gEA?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T08:21:14Z",
      content: null,
    },
    {
      id: 8,
      source: { id: "google-news", name: "Google News" },
      author: "TMZ",
      title:
        "Justin Timberlake's Drinking Pal Drove Car After DWI Arrest, Cops Let it Happen - TMZ",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiWWh0dHBzOi8vd3d3LnRtei5jb20vMjAyNC8wNy8yOS9qdXN0aW4tdGltYmVybGFrZS1kcnVuay1mcmllbmQtZHJvdmUtY2FyLWFmdGVyLWR3aS1hcnJlc3Qv0gFZaHR0cHM6Ly9hbXAudG16LmNvbS8yMDI0LzA3LzI5L2p1c3Rpbi10aW1iZXJsYWtlLWRydW5rLWZyaWVuZC1kcm92ZS1jYXItYWZ0ZXItZHdpLWFycmVzdC8?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T08:00:26Z",
      content: null,
    },
    {
      id: 9,
      source: { id: "google-news", name: "Google News" },
      author: "SamMobile - Samsung news",
      title:
        "If you have these Galaxy Buds, the Galaxy Buds 3 Pro are easier to buy - SamMobile - Samsung news",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vd3d3LnNhbW1vYmlsZS5jb20vbmV3cy9pZi15b3UtaGF2ZS10aGVzZS1nYWxheHktYnVkcy10aGUtZ2FsYXh5LWJ1ZHMtMy1wcm8tYXJlLWVhc2llci10by1idXkv0gEA?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T08:00:00Z",
      content: null,
    },
    {
      id: 10,
      source: { id: "google-news", name: "Google News" },
      author: "SamMobile - Samsung news",
      title:
        "Apple Intelligence release delayed while Galaxy AI hits 200 million devices - SamMobile - Samsung news",
      description: null,
      url: "https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnNhbW1vYmlsZS5jb20vbmV3cy9hcHBsZS1pbnRlbGxpZ2VuY2UtcmVsZWFzZS1kZWxheWVkLXdoaWxlLWdhbGF4eS1haS1oaXRzLTIwMC1taWxsaW9uLWRldmljZXMv0gEA?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T07:11:00Z",
      content: null,
    },
    {
      id: 11,
      source: { id: null, name: "[Removed]" },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      id: 12,
      source: { id: "google-news", name: "Google News" },
      author: "WKRC TV Cincinnati",
      title:
        "72-year-old woman, 2 children dead after boat capsizes in lake - WKRC TV Cincinnati",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiowJodHRwczovL2xvY2FsMTIuY29tL25ld3MvbmF0aW9uLXdvcmxkL2dsZW4tY2FueW9uLW5hdGlvbmFsLXJlY3JlYXRpb24tYXJlYS1uYXZham8tMjUtZm9vdC1wcml2YXRlbHktb3duZWQtcG9udG9vbi12ZXNzZWwtY2luY2lubmF0aS10b3dlZC1jYXBzaXplLWNsYXNzaWMtYWlyLW1lZGljYWwtaGVsaWNvcHRlci1uYXRpb25hbC1wYXJrLWthbmUtbnBzLXJhbmdlcnMtb3ZlcnR1cm5lZC1mYXRhbC1mYXRhbGl0aWVzLXdhdGVyLXJlc2N1ZXMtdHJhZ2ljLXRyYWdlZHktZnVydGhlci1pbmZvcm1hdGlvbi1tb3JiaWTSAacCaHR0cHM6Ly9sb2NhbDEyLmNvbS9hbXAvbmV3cy9uYXRpb24td29ybGQvZ2xlbi1jYW55b24tbmF0aW9uYWwtcmVjcmVhdGlvbi1hcmVhLW5hdmFqby0yNS1mb290LXByaXZhdGVseS1vd25lZC1wb250b29uLXZlc3NlbC1jaW5jaW5uYXRpLXRvd2VkLWNhcHNpemUtY2xhc3NpYy1haXItbWVkaWNhbC1oZWxpY29wdGVyLW5hdGlvbmFsLXBhcmsta2FuZS1ucHMtcmFuZ2Vycy1vdmVydHVybmVkLWZhdGFsLWZhdGFsaXRpZXMtd2F0ZXItcmVzY3Vlcy10cmFnaWMtdHJhZ2VkeS1mdXJ0aGVyLWluZm9ybWF0aW9uLW1vcmJpZA?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T05:14:45Z",
      content: null,
    },
    {
      id: 13,
      source: { id: "google-news", name: "Google News" },
      author: "The Guardian",
      title:
        "Biden administration blames Hezbollah for ‘horrific’ Golan Heights rocket attack - The Guardian",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiaWh0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS93b3JsZC9hcnRpY2xlLzIwMjQvanVsLzI4L2JpZGVuLWFkbWluaXN0cmF0aW9uLWhlemJvbGxhaC1nb2xhbi1oZWlnaHRzLWF0dGFja9IBaWh0dHBzOi8vYW1wLnRoZWd1YXJkaWFuLmNvbS93b3JsZC9hcnRpY2xlLzIwMjQvanVsLzI4L2JpZGVuLWFkbWluaXN0cmF0aW9uLWhlemJvbGxhaC1nb2xhbi1oZWlnaHRzLWF0dGFjaw?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T05:00:17Z",
      content: null,
    },
    {
      id: 14,
      source: { id: "google-news", name: "Google News" },
      author: "Bloomberg Television",
      title:
        "Investors Brace for Fed, BOJ, BOE Decisions | Bloomberg: The China Show 7/29/2024 - Bloomberg Television",
      description: null,
      url: "https://news.google.com/rss/articles/CCAiC2p2S3JfMkk2ZlNZmAEB?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T04:33:58Z",
      content: null,
    },
    {
      id: 15,
      source: { id: "google-news", name: "Google News" },
      author: "CNBC",
      title:
        "McDonald's is about to report earnings. Here's what to expect - CNBC",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiQ2h0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjQvMDcvMjkvbWNkb25hbGRzLW1jZC1xMi0yMDI0LWVhcm5pbmdzLmh0bWzSAUdodHRwczovL3d3dy5jbmJjLmNvbS9hbXAvMjAyNC8wNy8yOS9tY2RvbmFsZHMtbWNkLXEyLTIwMjQtZWFybmluZ3MuaHRtbA?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T04:01:01Z",
      content: null,
    },
    {
      id: 16,
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Nick Timiraos",
      title: "A Fed Rate Cut Is Finally Within View - The Wall Street Journal",
      description:
        "Central-bank officials meet in the coming week looking ahead to a September rate cut to maximize chances of a soft landing",
      url: "https://www.wsj.com/economy/central-banking/fed-near-interest-rate-cut-d303dbd5",
      urlToImage: "https://images.wsj.net/im-984927/social",
      publishedAt: "2024-07-29T03:18:00Z",
      content:
        "Manage Cookies\r\nWe and our partners use cookies and similar technologies on our websites so that we can offer you the best possible experience. Cookies allow us to access and store data on a device a… [+454 chars]",
    },
    {
      id: 17,
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Asian stocks rebound with Fed, rate cuts in focus; China lags - Investing.com",
      description: null,
      url: "https://consent.google.com/m",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T02:47:23Z",
      content:
        "We use cookies and data to\r\n\u003Cul\u003E\u003Cli\u003EDeliver and maintain Google services\u003C/li\u003E\u003Cli\u003ETrack outages and protect against spam, fraud, and abuse\u003C/li\u003E\u003Cli\u003EMeasure audience engagement and site statistics to un… [+1139 chars]",
    },
    {
      id: 18,
      source: { id: "cnn", name: "CNN" },
      author: "Simone McCarthy, Philip Wang",
      title:
        "US to revamp military forces in Japan in ‘historic’ move as regional tensions mount - CNN",
      description:
        "Defense chiefs from the United States, South Korea and Japan vowed to strengthen cooperation to deter “nuclear and missile threats” from North Korea during a meeting in Tokyo Sunday, the first of its kind in 15 years as the countries move to tighten coordinat…",
      url: "https://www.cnn.com/2024/07/27/asia/us-austin-trilateral-japan-south-korea-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/2024-07-28t065254z-274253947-rc2649a4vxxx-rtrmadp-3-asia-blinken-japan.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-07-29T02:46:00Z",
      content:
        "The United States will overhaul its military forces in Japan as the two countries move to deepen defense cooperation, Washington and Tokyo said Sunday, in a sweeping step to modernize their alliance … [+6713 chars]",
    },
    {
      id: 19,
      source: { id: "axios", name: "Axios" },
      author: "Andrew Freedman",
      title:
        "Swelling Park Fire now California's 7th biggest wildfire on record - Axios",
      description:
        "The fire that's forced thousands to evacuate 12% contained this evening.",
      url: "https://www.axios.com/2024/07/28/california-park-fire-states-largest",
      urlToImage:
        "https://images.axios.com/4Yy1V4rgmKhc6TbGfljYFlouGao=/0x0:3339x1878/1366x768/2024/07/29/1722219958120.jpg",
      publishedAt: "2024-07-29T02:37:45Z",
      content:
        'figcaption&gt;span]:font-sans" data-chromatic="ignore"&gt;The Park Fire in northern California, propelled by extreme fire weather conditions, now stands as the state\'s seventh-largest on record after… [+4347 chars]',
    },
    {
      id: 20,
      source: { id: "google-news", name: "Google News" },
      author: "WKRC TV Cincinnati",
      title:
        "Two meteor showers will flash across the sky around the same time in late July - WKRC TV Cincinnati",
      description: null,
      url: "https://news.google.com/rss/articles/CBMisgFodHRwczovL3d3dy5sb2NhbDEyLmNvbS9uZXdzL25hdGlvbi13b3JsZC9zb3V0aGVybi1kZWx0YS1hcXVhcmlpZC1tZXRlb3Itc2hvd2VyLWFscGhhLWNhcHJpY29ybmlkcy1kZWx0YS1tZXRlb3JzLXNob3dlcnMtc2t5LXNhbWUtdGltZS1sYXRlLWp1bHktcGVhay1wZWFrcy1jaW5jaW5uYXRpLWNhcHJpY29ybmlk0gGyAWh0dHBzOi8vbG9jYWwxMi5jb20vYW1wL25ld3MvbmF0aW9uLXdvcmxkL3NvdXRoZXJuLWRlbHRhLWFxdWFyaWlkLW1ldGVvci1zaG93ZXItYWxwaGEtY2Fwcmljb3JuaWRzLWRlbHRhLW1ldGVvcnMtc2hvd2Vycy1za3ktc2FtZS10aW1lLWxhdGUtanVseS1wZWFrLXBlYWtzLWNpbmNpbm5hdGktY2Fwcmljb3JuaWQ?oc=5",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5118x2879+0+267/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F93%2F6b%2Fd3a8246645ac981568673fac0b33%2Fgettyimages-512298231.jpg",
      publishedAt: "2024-07-29T02:13:56Z",
      content: null,
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
    console.log("News constructor");
  }
  render() {
    return (
      <>
        <h2>Now News - Top Headlines</h2>
        <div className="row mx-3 my-3">
          {this.state.articles.map((element) => {
            console.log("News constructor ", element.id);
            return (
              <div className="col-md-4" key={element.id}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
