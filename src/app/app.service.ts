import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public htmlString: string = '';

  constructor() { }

  public generateComponents(comps: any): any {
    for (let i: number = 0; i < comps.length; i++) {
      // Generated Nested Components (For Containers)
      if (comps[i].data && comps[i].data.items && comps[i].uiComponent === 'container-holder' || comps[i]
        .uiComponent === 'container') {
        this.htmlString += '<' + comps[i].uiComponent + ' id=' + comps[i].id + ' class=' + comps[i].css + '>';
        // console.log('comps[i] Internal', i, comps[i].uiComponent);
        comps[i].data.items = this.generateComponents(comps[i].data.items);
      }
      if (comps[i].uiComponent === 'container-holder' || comps[i].uiComponent === 'container') {
        this.htmlString += '</' + comps[i].uiComponent + '>';
      } else {
        this.htmlString += '<' + comps[i].uiComponent + ' id=' + comps[i].id + ' data=\'' + JSON.stringify(comps[i].data) + '\'>' + '</' + comps[i].uiComponent + '>';
      }
      // console.log('comps[i]: ', i, comps[i]);
    }
    // console.log('htmlString', this.htmlString);
    return comps;
  }

  public getHTMLWithElements() {
    let componentArray = response.model['model-data']['module-enhancements'];
    this.htmlString += '<' + componentArray[0].uiComponent + ' id=' + componentArray[0].id + ' class=' + componentArray[0].css + '>';
    this.generateComponents(componentArray[0].data.items);
    this.htmlString += '</' + componentArray[0].uiComponent + '>';
    console.log('htmlString', this.htmlString);
    return this.htmlString;
  }
}

const response: any =

{
  "metadata": {
    "en": {

      "aem-created-date": "2018-09-18T14:20:52.271-07:00",
      "aem-modified-date": "2018-11-27T15:24:39.010-08:00",
      "angular-route": "",
      "product-offering-id": "",
      "product-family-id": "",
      "epc-lst-update-ts": "",
      "display-product-offering": true,
      "page-id": "SC1135",
      "page-name": "Home Page",
      "page-url": "/home",
      "primary-category": "Plans",
      "sub-category": "Browse",
      "page-type": "Browse Plans",
      "variant": "BYOD",
      "flow-name": "Browse Plans",
      "seo-meta-tag": "",
      "canonical-url": "/home",
      "backend-route": "/cf#/content/t-mobile/en/prepaid/homePage.html",
      "meta-keywords": "prepaid phones, prepaid cell phones, prepaid phone plans, prepaid plans, no contract phones, no contract phone plans",
      "meta-description": "Check out or selection of prepaid phones and plans, including no credit check phones. Find a prepaid phone that is right for you, on the T-Mobile 4G LTE network!",
      "h1": "Prepaid Phones & Plans",
      "main-image-alt-tag": "Prepaid Phones & Plans",
      "no-index": "false",
      "no-follow": "false",
      "new-title-tag": "Prepaid Phones | Prepaid Cell Phone Plans | T-Mobile",
      "authentication": "false",
      "background-image": "",
      "background-image-position": ""
    },
    "es": {

      "aem-created-date": "2018-09-18T14:20:52.271-07:00",
      "aem-modified-date": "2018-11-27T15:24:39.010-08:00",
      "angular-route": "",
      "product-offering-id": "",
      "product-family-id": "",
      "epc-lst-update-ts": "",
      "display-product-offering": true,
      "page-id": "",
      "page-name": "Home Page",
      "page-url": "",
      "primary-category": "",
      "sub-category": "",
      "page-type": "",
      "variant": "",
      "flow-name": "",
      "seo-meta-tag": "",
      "canonical-url": "",
      "backend-route": "",
      "meta-keywords": "",
      "meta-description": "T-Mobile ofrece los mejores celulares prepagados y planes de Internet sin contrato de servicio anual. -íDisfruta de llamadas, textos y datos ilimitados ahora!",
      "h1": "",
      "main-image-alt-tag": "",
      "no-index": "false",
      "no-follow": "false",
      "new-title-tag": "Celulares de prepago y planes de Internet sin contrato anual | T-Mobile",
      "authentication": "false",
      "background-image": "",
      "background-image-position": ""
    }
  },
  "model": {
    "model-uri": "http://null:0/content/t-mobile/en/postpaid/home.content.json",
    "model-template": "/apps/rebellion/templates/marketing",
    "model-data": {
      "module-enhancements":
        [
          {
            "uiComponent": "container-holder",
            "id": "BYOD",
            "css": "row",
            "data": {
              "items": [
                {
                  "uiComponent": "container",
                  "data": {
                    "css": "col-12 col-md-12 col-lg-12",
                    "items":
                      [
                        {
                          "uiComponent": "container-holder",
                          "id": "Marketing Banner",
                          "css": "row",
                          "data": {
                            "items": [
                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-6 col-lg-6",
                                  "items":
                                    [
                                      {

                                        "uiComponent": "adaptive-image",
                                        "data": {
                                          "desktopImageUrl": "https://s3.amazonaws.com/images.rebellion.npe/images/60713-fg-samsung-galaxy-s9-blklogo-400x300.png",
                                          "desktopLinkUrl": "/product-details/samsung-galaxy-s9/Lilac%20Purple.html",
                                          "desktopAltText": "Samsung Galaxy S9",
                                          "tabletImageUrl": "",
                                          "tabletLinkUrl": "/product-details/samsung-galaxy-s9/Lilac%20Purple.html",
                                          "tabletAltText": "Samsung Galaxy S9",
                                          "mobileImageUrl": "",
                                          "mobileLinkUrl": "/product-details/samsung-galaxy-s9/Lilac%20Purple.html",
                                          "mobileAltText": "Samsung Galaxy S9",
                                          "target": "false",
                                          "impression": "false",
                                          "css": "m-t-xl"
                                        }
                                      }
                                    ]
                                }
                              },
                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-6 col-lg-6",
                                  "items":
                                    [
                                      {
                                        "uiComponent": "html-template",
                                        "id": "body-text",
                                        "data": {
                                          "css": "p-t-md"
                                          ,
                                          "html": "<p><b>NOW ON PREPAID<\/b><\/p>\n",
                                          "showInTablet": "",
                                          "showInMobile": "",
                                          "showInDesktop": ""
                                        }
                                      },
                                      {
                                        "uiComponent": "html-template",
                                        "id": "header-text",
                                        "data": {

                                          "css": "p-t-md"
                                          ,
                                          "html": "<h3><span class=\"text-magenta\"><b>The new Samsung Galaxy S9<\/b><\/span><\/h3>\n",
                                          "showInTablet": "",
                                          "showInMobile": "",
                                          "showInDesktop": ""
                                        }
                                      }
                                      ,




                                      {
                                        "uiComponent": "html-template",
                                        "id": "body-text",
                                        "data": {
                                          "css": "p-t-md"
                                          ,
                                          "html": "<p><plead>The fastest Samsung ever demands the fastest network ever. All with no credit check required.<\/plead><\/p>\n",
                                          "showInTablet": "",
                                          "showInMobile": "",
                                          "showInDesktop": ""
                                        }
                                      }




                                      ,










                                      {
                                        "uiComponent": "container-holder",
                                        "css": "row",
                                        "data": {
                                          "items": [
                                            {
                                              "uiComponent": "container",
                                              "data": {
                                                "css": "col-12 col-md-6 col-lg-6",
                                                "items": [

                                                  {
                                                    "uiComponent": "cta-link",
                                                    "data": {


                                                      "css": "text-none p-t-md",
                                                      "text": "Shop now",
                                                      "link": "/product-details/samsung-galaxy-s9/Lilac%20Purple",
                                                      "anchorId": "",
                                                      "target": "false",
                                                      "impression": "true"
                                                    }
                                                  }

                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      }

                                      ,










                                      {
                                        "uiComponent": "container-holder",
                                        "css": "row",
                                        "data": {
                                          "items": [
                                            {
                                              "uiComponent": "container",
                                              "data": {
                                                "css": "col-12 col-md-6 col-lg-6",
                                                "items": [

                                                  {
                                                    "uiComponent": "cta-link",
                                                    "data": {


                                                      "css": "text-none",
                                                      "text": "Browse all phones",
                                                      "link": "/browse-phones",
                                                      "anchorId": "",
                                                      "target": "false",
                                                      "impression": "true"
                                                    }
                                                  }

                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      }

                                      ,









                                      {
                                        "uiComponent": "legal-text",
                                        "data": {

                                          "css": "p-t-xl"
                                          ,
                                          "displayType": "full",
                                          "showInTablet": "true",
                                          "showInMobile": "true",
                                          "showInDesktop": "true",
                                          "legalCopy": {
                                            "en": "<p><pxsmall>Based on device download capabilities (LT Cat 18); actual speeds may vary.<\/pxsmall><\/p>\n"
                                          }
                                        }

                                      }



                                    ]

                                }
                              }





                            ]
                          }
                        },




                        {
                          "uiComponent": "horizontal-rule",
                          "data": {

                            "css": "m-t-xl divider"

                          }
                        }

                        ,





                        {
                          "uiComponent": "html-template",
                          "id": "header-text",
                          "data": {

                            "css": "m-t-xl"
                            ,
                            "html": "<p><b>Bring Your Own Device<\/b><\/p>\n",
                            "showInTablet": "true",
                            "showInMobile": "true",
                            "showInDesktop": "true"
                          }
                        }
                        ,
                        {
                          "uiComponent": "container-holder",
                          "id": "BYOD",
                          "css": "row",
                          "data": {
                            "items": [



                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-4 col-lg-4",
                                  "items":
                                    [

















                                      {

                                        "uiComponent": "adaptive-image",
                                        "data": {
                                          "desktopImageUrl": "https://s3.amazonaws.com/images.rebellion.npe/images/4389-byod-zte-g6-s7-blacklogo-400x300.png",
                                          "desktopLinkUrl": "",
                                          "desktopAltText": "",
                                          "tabletImageUrl": "",
                                          "tabletLinkUrl": "",
                                          "tabletAltText": "",
                                          "mobileImageUrl": "",
                                          "mobileLinkUrl": "",
                                          "mobileAltText": "",
                                          "target": "true",
                                          "impression": "true",

                                          "css": ""

                                        }
                                      }



                                    ]

                                }
                              }



                              ,



                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-8 col-lg-8",
                                  "items":
                                    [







                                      {
                                        "uiComponent": "html-template",
                                        "id": "header-text",
                                        "data": {

                                          "css": ""
                                          ,
                                          "html": "<h4><span class=\"text-magenta\">Bring your own device and get LTE coverage with ZERO commitment.<\/span><\/h4>",
                                          "showInTablet": "true",
                                          "showInMobile": "true",
                                          "showInDesktop": "true"
                                        }
                                      }
                                      ,




                                      {
                                        "uiComponent": "html-template",
                                        "id": "body-text",
                                        "data": {
                                          "css": "p-t-md"
                                          ,
                                          "html": "<p>Start the switch by checking your device\u2019s compatibility.<\/p>\n",
                                          "showInTablet": "true",
                                          "showInMobile": "true",
                                          "showInDesktop": "true"
                                        }
                                      }




                                      ,










                                      {
                                        "uiComponent": "container-holder",
                                        "css": "row",
                                        "data": {
                                          "items": [
                                            {
                                              "uiComponent": "container",
                                              "data": {
                                                "css": "col-12 col-md-8 col-lg-8",
                                                "items": [

                                                  {
                                                    "uiComponent": "cta-link",
                                                    "data": {


                                                      "css": "text-none",
                                                      "text": "Get started",
                                                      "link": "/bring-your-own-device",
                                                      "anchorId": "",
                                                      "target": "false",
                                                      "impression": "true"
                                                    }
                                                  }

                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      }

                                      ,









                                      {
                                        "uiComponent": "legal-text",
                                        "data": {

                                          "css": "p-t-xl"
                                          ,
                                          "displayType": "full",
                                          "showInTablet": "true",
                                          "showInMobile": "true",
                                          "showInDesktop": "true",
                                          "legalCopy": {
                                            "en": "<p class=\"legal\">Compatible, unlocked device and qual\u2019g plan req\u2019d. Coverage not available in some areas.<\/p>\n"
                                          }
                                        }

                                      }



                                    ]

                                }
                              }





                            ]
                          }
                        },




                        {
                          "uiComponent": "horizontal-rule",
                          "data": {

                            "css": "m-t-xl divider"

                          }
                        }

                        ,





                        {
                          "uiComponent": "container-holder",
                          "css": "row",
                          "data": {
                            "items": [
                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-12 col-lg-12",
                                  "items": [

                                    {
                                      "uiComponent": "html-template",
                                      "id": "header-text",
                                      "data": {

                                        "css": "m-t-xl"
                                        ,
                                        "html": "<h3 style=\"text-align: center;\">Flexible plans for everyone<\/h3>\n",
                                        "showInTablet": "true",
                                        "showInMobile": "true",
                                        "showInDesktop": "true"
                                      }
                                    }

                                  ]
                                }
                              }
                            ]
                          }
                        }
                        ,










                        {
                          "uiComponent": "container-holder",
                          "css": "row",
                          "data": {
                            "items": [
                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-12 col-lg-12",
                                  "items": [

                                    {
                                      "uiComponent": "cta-link",
                                      "data": {


                                        "css": "text-center",
                                        "text": "See all available plans",
                                        "link": "/browse-plans-phone",
                                        "anchorId": "",
                                        "target": "false",
                                        "impression": "true"
                                      }
                                    }

                                  ]
                                }
                              }
                            ]
                          }
                        }

                        ,
                        {
                          "uiComponent": "container-holder",
                          "id": "Plans",
                          "css": "row",
                          "data": {
                            "items": [



                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-3 col-lg-3",
                                  "items":
                                    [

















                                      {

                                        "uiComponent": "adaptive-image",
                                        "data": {
                                          "desktopImageUrl": "https://s3.amazonaws.com/images.rebellion.npe/General/Prepaid/home-page/3831-hp-rebellion-monthly-plan.png",
                                          "desktopLinkUrl": "/prepaid/plans/individual",
                                          "desktopAltText": "",
                                          "tabletImageUrl": "",
                                          "tabletLinkUrl": "",
                                          "tabletAltText": "",
                                          "mobileImageUrl": "",
                                          "mobileLinkUrl": "",
                                          "mobileAltText": "",
                                          "target": "_self",
                                          "impression": "false",

                                          "css": ""

                                        }
                                      }


                                      ,










                                      {
                                        "uiComponent": "cta-link",
                                        "data": {


                                          "css": "text-center",
                                          "text": "Unlimited Monthly",
                                          "link": "/browse-plans-phone",
                                          "anchorId": "",
                                          "target": "false",
                                          "impression": "false"
                                        }
                                      }


                                    ]

                                }
                              }



                              ,



                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-3 col-lg-3",
                                  "items":
                                    [

















                                      {

                                        "uiComponent": "adaptive-image",
                                        "data": {
                                          "desktopImageUrl": "https://s3.amazonaws.com/images.rebellion.npe/General/Prepaid/home-page/3831-hp-rebellion-family-plan.png",
                                          "desktopLinkUrl": "tel:8774648646",
                                          "desktopAltText": "",
                                          "tabletImageUrl": "",
                                          "tabletLinkUrl": "",
                                          "tabletAltText": "",
                                          "mobileImageUrl": "",
                                          "mobileLinkUrl": "",
                                          "mobileAltText": "",
                                          "target": "_self",
                                          "impression": "false",

                                          "css": ""

                                        }
                                      }


                                      ,










                                      {
                                        "uiComponent": "cta-link",
                                        "data": {


                                          "css": "text-center p-t-0",
                                          "text": "Learn more",
                                          "link": "https://www.t-mobile.com/no-credit-check",
                                          "anchorId": "",
                                          "target": "false",
                                          "impression": "false"
                                        }
                                      }


                                    ]

                                }
                              }



                              ,



                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-3 col-lg-3",
                                  "items":
                                    [

















                                      {

                                        "uiComponent": "adaptive-image",
                                        "data": {
                                          "desktopImageUrl": "https://s3.amazonaws.com/images.rebellion.npe/General/Prepaid/home-page/3831-hp-rebellion-pay-go-plan.png",
                                          "desktopLinkUrl": "https://prepaid-phones.t-mobile.com/pay-as-you-go",
                                          "desktopAltText": "",
                                          "tabletImageUrl": "",
                                          "tabletLinkUrl": "",
                                          "tabletAltText": "",
                                          "mobileImageUrl": "",
                                          "mobileLinkUrl": "",
                                          "mobileAltText": "",
                                          "target": "_blank",
                                          "impression": "false",

                                          "css": ""

                                        }
                                      }


                                      ,










                                      {
                                        "uiComponent": "cta-link",
                                        "data": {


                                          "css": "text-center m-t-0",
                                          "text": "Pay as you go",
                                          "link": "/plan-detail/pay-as-you-go",
                                          "anchorId": "",
                                          "target": "true",
                                          "impression": "false"
                                        }
                                      }


                                    ]

                                }
                              }



                              ,



                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-3 col-lg-3",
                                  "items":
                                    [

















                                      {

                                        "uiComponent": "adaptive-image",
                                        "data": {
                                          "desktopImageUrl": "https://s3.amazonaws.com/images.rebellion.npe/General/Prepaid/home-page/3831-hp-rebellion-tablet-plan.png",
                                          "desktopLinkUrl": "/prepaid/plans/mobile-internet",
                                          "desktopAltText": "",
                                          "tabletImageUrl": "",
                                          "tabletLinkUrl": "",
                                          "tabletAltText": "",
                                          "mobileImageUrl": "",
                                          "mobileLinkUrl": "",
                                          "mobileAltText": "",
                                          "target": "_self",
                                          "impression": "false",

                                          "css": ""

                                        }
                                      }


                                      ,










                                      {
                                        "uiComponent": "cta-link",
                                        "data": {


                                          "css": "text-center",
                                          "text": "Tablet & Hotspot",
                                          "link": "/browse-plans-tablet",
                                          "anchorId": "",
                                          "target": "false",
                                          "impression": "false"
                                        }
                                      }


                                    ]

                                }
                              }





                            ]
                          }
                        },









                        {
                          "uiComponent": "legal-text",
                          "data": {

                            "css": "p-t-xl"
                            ,
                            "displayType": "full",
                            "showInTablet": "true",
                            "showInMobile": "true",
                            "showInDesktop": "true",
                            "legalCopy": {
                              "en": "<p style=\"text-align: center;\"><pxsmall>On all T-Mobile plans, during congestion, the small fraction of customers using &gt;50GB/mo. may notice reduced speeds until next service period due to data prioritization.&nbsp;Plus taxes &amp; fees. Unlimited data while on our network.<\/pxsmall><\/p>\n"
                            }
                          }

                        }


                        ,




                        {
                          "uiComponent": "horizontal-rule",
                          "data": {

                            "css": "m-t-xl divider"

                          }
                        }

                        ,





                        {
                          "uiComponent": "container-holder",
                          "css": "row",
                          "data": {
                            "items": [
                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-12 col-lg-12",
                                  "items": [

                                    {
                                      "uiComponent": "html-template",
                                      "id": "header-text",
                                      "data": {

                                        "css": "m-t-xl"
                                        ,
                                        "html": "<p><b>Featured Phones<\/b><\/p>\n",
                                        "showInTablet": "true",
                                        "showInMobile": "true",
                                        "showInDesktop": "true"
                                      }
                                    }

                                  ]
                                }
                              }
                            ]
                          }
                        }
                        ,
                        {
                          "uiComponent": "container-holder",
                          "id": "Featured Phones",
                          "css": "row",
                          "data": {
                            "items": [



                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-4 col-lg-4",
                                  "items":
                                    [

















                                      {

                                        "uiComponent": "adaptive-image",
                                        "data": {
                                          "desktopImageUrl": "https://s3.amazonaws.com/images.rebellion.npe/images/250x270_1 (1).png",
                                          "desktopLinkUrl": "/product-details/samsung-galaxy-j3-prime",
                                          "desktopAltText": "Samsung Galaxy J3 Prime",
                                          "tabletImageUrl": "",
                                          "tabletLinkUrl": "/product-details/samsung-galaxy-j3-prime",
                                          "tabletAltText": "Samsung Galaxy J3 Prime",
                                          "mobileImageUrl": "",
                                          "mobileLinkUrl": "/product-details/samsung-galaxy-j3-prime",
                                          "mobileAltText": "Samsung Galaxy J3 Prime",
                                          "target": "true",
                                          "impression": "true",

                                          "css": "m-t-0"

                                        }
                                      }


                                      ,










                                      {
                                        "uiComponent": "cta-link",
                                        "data": {


                                          "css": "text-center m-t-sm",
                                          "text": "Samsung Galaxy J3 Prime",
                                          "link": "/product-details/samsung-galaxy-j3-prime",
                                          "anchorId": "",
                                          "target": "false",
                                          "impression": "false"
                                        }
                                      }


                                    ]

                                }
                              }



                              ,



                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-4 col-lg-4",
                                  "items":
                                    [

















                                      {

                                        "uiComponent": "adaptive-image",
                                        "data": {
                                          "desktopImageUrl": "https://s3.amazonaws.com/images.rebellion.npe/images/250x270_1.png",
                                          "desktopLinkUrl": "/product-details/lg-g6",
                                          "desktopAltText": "LG G6",
                                          "tabletImageUrl": "",
                                          "tabletLinkUrl": "/product-details/lg-g6",
                                          "tabletAltText": "LG G6",
                                          "mobileImageUrl": "",
                                          "mobileLinkUrl": "/product-details/lg-g6",
                                          "mobileAltText": "LG G6",
                                          "target": "false",
                                          "impression": "false",

                                          "css": ""

                                        }
                                      }


                                      ,










                                      {
                                        "uiComponent": "cta-link",
                                        "data": {


                                          "css": "text-center m-t-sm",
                                          "text": "LG G6",
                                          "link": "/product-details/lg-g6",
                                          "anchorId": "",
                                          "target": "false",
                                          "impression": "false"
                                        }
                                      }


                                    ]

                                }
                              }



                              ,



                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-4 col-lg-4",
                                  "items":
                                    [

















                                      {

                                        "uiComponent": "adaptive-image",
                                        "data": {
                                          "desktopImageUrl": "https://s3.amazonaws.com/images.rebellion.npe/images/250x270_1(2).png",
                                          "desktopLinkUrl": "/product-details/coolpad-defiant",
                                          "desktopAltText": "Coolpad Defiant",
                                          "tabletImageUrl": "",
                                          "tabletLinkUrl": "/product-details/coolpad-defiant",
                                          "tabletAltText": "Coolpad Defiant",
                                          "mobileImageUrl": "",
                                          "mobileLinkUrl": "/product-details/coolpad-defiant",
                                          "mobileAltText": "Coolpad Defiant",
                                          "target": "false",
                                          "impression": "false",

                                          "css": ""

                                        }
                                      }


                                      ,










                                      {
                                        "uiComponent": "cta-link",
                                        "data": {


                                          "css": "text-center m-t-sm",
                                          "text": "Coolpad Defiant",
                                          "link": "/product-details/coolpad-defiant",
                                          "anchorId": "",
                                          "target": "false",
                                          "impression": "false"
                                        }
                                      }


                                    ]

                                }
                              }





                            ]
                          }
                        },








                        {
                          "uiComponent": "cta-buttons",
                          "data": {
                            "css": "button-spacing",
                            "text": "See all devices",
                            "link": "/browse-phones",
                            "target": "false",
                            "anchorId": "",
                            "buttonStyle": "primary",
                            "impression": "false"
                          }
                        }
                        ,




                        {
                          "uiComponent": "horizontal-rule",
                          "data": {

                            "css": "m-t-xl divider"

                          }
                        }

                        ,
                        {
                          "uiComponent": "container-holder",
                          "id": "Marketing Tiles",
                          "css": "row",
                          "data": {
                            "items": [



                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-4 col-lg-4",
                                  "items":
                                    [

















                                      {

                                        "uiComponent": "adaptive-image",
                                        "data": {
                                          "desktopImageUrl": "https://s3.amazonaws.com/images.rebellion.npe/General/Prepaid/home-page/3882_rebellion-tile_tourist-plan_400x300.png",
                                          "desktopLinkUrl": "",
                                          "desktopAltText": "Stay connected on your U.S. adventure.",
                                          "tabletImageUrl": "",
                                          "tabletLinkUrl": "",
                                          "tabletAltText": "Stay connected on your U.S. adventure.",
                                          "mobileImageUrl": "",
                                          "mobileLinkUrl": "",
                                          "mobileAltText": "Stay connected on your U.S. adventure.",
                                          "target": "false",
                                          "impression": "false",

                                          "css": "m-t-xl"

                                        }
                                      }


                                      ,




                                      {
                                        "uiComponent": "html-template",
                                        "id": "body-text",
                                        "data": {
                                          "css": "p-t-md"
                                          ,
                                          "html": "<p class=\"lead\" style=\"text-align: center;\">Stay connected on your U.S. adventure.<\/p>",
                                          "showInTablet": "true",
                                          "showInMobile": "true",
                                          "showInDesktop": "true"
                                        }
                                      }




                                      ,










                                      {
                                        "uiComponent": "cta-link",
                                        "data": {


                                          "css": "text-center",
                                          "text": "Check it out",
                                          "link": "/plan-detail/tourist-plan",
                                          "anchorId": "",
                                          "target": "true",
                                          "impression": "false"
                                        }
                                      }


                                    ]

                                }
                              }



                              ,



                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-4 col-lg-4",
                                  "items":
                                    [

















                                      {

                                        "uiComponent": "adaptive-image",
                                        "data": {
                                          "desktopImageUrl": "https://s3.amazonaws.com/images.rebellion.npe/General/Prepaid/home-page/3882_rebellion-tile_coverage-map_400x300.png",
                                          "desktopLinkUrl": "",
                                          "desktopAltText": "",
                                          "tabletImageUrl": "",
                                          "tabletLinkUrl": "",
                                          "tabletAltText": "",
                                          "mobileImageUrl": "",
                                          "mobileLinkUrl": "",
                                          "mobileAltText": "",
                                          "target": "false",
                                          "impression": "false",

                                          "css": "m-t-xl"

                                        }
                                      }


                                      ,




                                      {
                                        "uiComponent": "html-template",
                                        "id": "body-text",
                                        "data": {
                                          "css": "p-t-md"
                                          ,
                                          "showInTablet": "true",
                                          "showInMobile": "true",
                                          "showInDesktop": "true"
                                        }
                                      }




                                      ,










                                      {
                                        "uiComponent": "cta-link",
                                        "data": {


                                          "css": "text-center",
                                          "text": "Check Coverage",
                                          "link": "/coverage-map",
                                          "anchorId": "",
                                          "target": "false",
                                          "impression": "true"
                                        }
                                      }


                                    ]

                                }
                              }



                              ,



                              {
                                "uiComponent": "container",
                                "data": {
                                  "css": "col-12 col-md-4 col-lg-4",
                                  "items":
                                    [

















                                      {

                                        "uiComponent": "adaptive-image",
                                        "data": {
                                          "desktopImageUrl": "https://s3.amazonaws.com/images.rebellion.npe/images/4389-byod-zte-g6-s7-whitelogo-400x300.png",
                                          "desktopLinkUrl": "",
                                          "desktopAltText": "",
                                          "tabletImageUrl": "",
                                          "tabletLinkUrl": "",
                                          "tabletAltText": "",
                                          "mobileImageUrl": "",
                                          "mobileLinkUrl": "",
                                          "mobileAltText": "",
                                          "target": "false",
                                          "impression": "false",

                                          "css": "m-t-xl"

                                        }
                                      }


                                      ,




                                      {
                                        "uiComponent": "html-template",
                                        "id": "body-text",
                                        "data": {
                                          "css": "p-t-md"
                                          ,
                                          "html": "<p class=\"lead\" style=\"text-align: center;\">Shop our best deals!<\/p>",
                                          "showInTablet": "true",
                                          "showInMobile": "true",
                                          "showInDesktop": "true"
                                        }
                                      }




                                      ,










                                      {
                                        "uiComponent": "cta-link",
                                        "data": {


                                          "css": "text-center",
                                          "text": "Shop now",
                                          "link": "/browse-phones",
                                          "anchorId": "",
                                          "target": "false",
                                          "impression": "true"
                                        }
                                      }


                                    ]

                                }
                              }





                            ]
                          }
                        },




                        {
                          "uiComponent": "horizontal-rule",
                          "data": {

                            "css": "m-t-xl divider"

                          }
                        }

                        ,
                        {
                          "uiComponent": "container-holder",
                          "id": "columncontrol_1130618711",
                          "css": "row",
                          "data": {
                            "items": [

                            ]
                          }
                        },
                        {
                          "uiComponent": "legal-text",
                          "id": "legal-text",
                          "data": {
                            "css": "legal m-t-xl m-b-xxl",
                            "items": [
                              {
                                "legalCopy": "<p>Limited time offers; subject to change. Taxes and fees additional. Qualifying plan and capable device required. Not all features available on all devices. Unlimited talk and text features for direct communications between 2 people, others (e.g. conference &amp; chat lines, etc.) may cost extra. <b>Bring Your Own Device: </b>Unlocked, compatible service, SIM card, and qualifying plan purchase required. Check your warranty and contract with your carrier to see what conditions apply to unlocking your device. <b>Coverage</b> not available in some areas. <b>Network Management</b>: Service may be <b>slowed, suspended, terminated, or restricted </b>for misuse, abnormal use, interference with our network or ability to provide quality service to other users, or significant roaming. On all T-Mobile plans, during congestion, the small fraction of customers using &gt;50GB/mo. may notice reduced speeds until next service period due to data prioritization.&nbsp; On-device usage is prioritized over tethering usage, which may result in higher speeds for data used on device. See <a href=\"http://T-Mobile.com/OpenInternet\" target=\"_blank\">T-Mobile.com/OpenInternet</a> for details. T-Mobile and the magenta color are registered trademarks of Deutsche Telekom AG. ©2018 T-Mobile USA, Inc.</p>"
                              }
                            ]
                          }
                        }
                      ]
                  }
                }
              ]
            }
          }
        ]
    }
  }
};
