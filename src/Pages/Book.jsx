import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";


const hairstylesBook = [
  {
    name: "Crochet",
    image: hairBlesserOfficial,
    variations: ["Hair Not Included", "Hair Included", "Illusion Method"],
    prices: {
      "Hair Not Included": null,
      "Hair Included": null,
      "Illusion Method": null,
    },
    durations: {
      "Hair Not Included": null,
      "Hair Included": null,
      "Illusion Method": null,
    },
    disclaimer:
      "Pease have hair washed - blow dried. Soft locs-$200 if you would like me to include hair. Individuals are only for loc styles !! prices listed for individuals are for hair Not included.",
  },
  {
    name: "Invisible Locs",
    image: hairBlesserOfficial,
    variations: [
      "BOHO Bob Invisible Locs",
      "Small Mid Length BOHO",
      "Small Bob (No BOBHO)",
      "Small Mid Length (No BOHO)",
    ],
    prices: {
      "BOHO Bob Invisible Locs": null,
      "Small Mid Length BOHO": null,
      "Small Bob (No BOBHO)": null,
      "Small Mid Length (No BOHO)": null,
    },
    durations: {
      "BOHO Bob Invisible Locs": null,
      "Small Mid Length BOHO": null,
      "Small Bob (No BOBHO)": null,
      "Small Mid Length (No BOHO)": null,
    },
    disclaimer:
      "There is a $30 deposit for all BOHO styles as of June 1st, 2025 due to an increase in price for 100% human hait. (Zelle, Cash App, Apple Pay) Hair included plese have hair washed - blow dried.",
  },
  {
    name: "Kids Braided Styles",
    image: hairBlesserOfficial,
    variations: [
      "Small Knotless",
      "Medium Knotless",
      "Fulani Braids (curls at the Ends)",
      "Fulani Braids W/beads",
      "Medium Boho Knotless",
      "Smedium BOHO",
      "Small BOHO Knotless",
      "Large Knotless",
      "Braided style Reach out for $",
      "Soft Locs Medium size",
      "Soft Locs Small size",
      "Butterfly Loc Smedium",
      "Quick Weave W/crochet No Glue",
      "Butterfly Loc Medium",
      "Micro Twist/ Synthetic hair Added",
      "Natural Twist",
    ],
    prices: {
      "Small Knotless": null,
      "Medium Knotless": null,
      "Fulani Braids (curls at the Ends)": null,
      "Fulani Braids W/beads": null,
      "Medium Boho Knotless": null,
      "Smedium BOHO": null,
      "Small BOHO Knotless": null,
      "Large Knotless": null,
      "Braided style Reach out for $": null,
      "Soft Locs Medium size": null,
      "Soft Locs Small size": null,
      "Butterfly Loc Smedium": null,
      "Quick Weave W/crochet No Glue": null,
      "Butterfly Loc Medium": null,
      "Micro Twist/ Synthetic hair Added": null,
      "Natural Twist": null,
    },
    durations: {
      "Small Knotless": null,
      "Medium Knotless": null,
      "Fulani Braids (curls at the Ends)": null,
      "Fulani Braids W/beads": null,
      "Medium Boho Knotless": null,
      "Smedium BOHO": null,
      "Small BOHO Knotless": null,
      "Large Knotless": null,
      "Braided style Reach out for $": null,
      "Soft Locs Medium size": null,
      "Soft Locs Small size": null,
      "Butterfly Loc Smedium": null,
      "Quick Weave W/crochet No Glue": null,
      "Butterfly Loc Medium": null,
      "Micro Twist/ Synthetic hair Added": null,
      "Natural Twist": null,
    },
    disclaimer:
      "Plese have hair washed - blow dried. Hair/accessories included. All styles are mid-arm pit length, if you would like a waist lenth please reach out for final price. Please reach out to let me know what accessories if any you need. Deposit is required for human hair micro twist",
  },
  {
    name: "All Loc Services",
    image: hairBlesserOfficial,
    variations: [
      "Loc Attachments/human Locs FullHead",
      "Loc Attachments/human Locs HalfHead",
      "Retwist Half Head",
      "Starter Locs",
      "Loc Removing (20-60locs)",
      "Loc Removing (60-120locs)",
      "Micro Locs",
    ],
    prices: {
      "Loc Attachments/human Locs FullHead": null,
      "Loc Attachments/human Locs HalfHead": null,
      "Retwist Half Head": null,
      "Starter Locs": null,
      "Loc Removing (20-60locs)": null,
      "Loc Removing (60-120locs)": null,
      "Micro Locs": null,
    },
    durations: {
      "Loc Attachments/human Locs FullHead": null,
      "Loc Attachments/human Locs HalfHead": null,
      "Retwist Half Head": null,
      "Starter Locs": null,
      "Loc Removing (20-60locs)": null,
      "Loc Removing (60-120locs)": null,
      "Micro Locs": null,
    },
    disclaimer:
      "Attachments - $40 non refundable deposit required. If you need me to provide the hair. If you have the hair, provide at least 80 locs. Retwist - come washed. Loc removing is a 3-4 day service. At least half will be due after the first appointment.",
  },
  {
    name: "Wicks",
    image: hairBlesserOfficial,
    variations: ["Starter Service", "Maintenance"],
    prices: {
      "Starter Service": null,
      "Maintenance": null,
    },
    durations: {
      "Starter Service": null,
      "Maintenance": null,
    },
    disclaimer:
      "Plese have hair washed - blow dried for starter service. For a maintenance service wash is included. Your hair has to be at least 3 inches for the starter service.",
  },
  {
    name: "Men Braids/Styles",
    image: hairBlesserOfficial,
    variations: [
      "Straight Back",
      "Finger Coils",
      "Box Braids",
      "Two Strand Twist",
    ],
    prices: {
      "Straight Back": null,
      "Finger Coils": null,
      "Box Braids": null,
      "Two Strand Twist": null,
    },
    durations: {
      "Straight Back": null,
      "Finger Coils": null,
      "Box Braids": null,
      "Two Strand Twist": null,
    },
    disclaimer: "Pease have hair washed - blow dried.",
  },
  {
    name: "Sew In",
    image: hairBlesserOfficial,
    variations: ["With Closure", "Leave Out"],
    prices: {
      "With Closure": null,
      "Leave Out": null,
    },
    durations: {
      "With Closure": null,
      "Leave Out": null,
    },
    disclaimer:
      "Pease have hair washed - blow dried. I do not include the bundles. if you need the bundles provided, the cost of the bundles are to be paid at time of purchase.",
  },
  {
    name: "Sleek Pony Tail",
    image: hairBlesserOfficial,
    variations: ["Need hair provided", "Hair not provided"],
    prices: {
      "Need hair provided": null,
      "Hair not provided": null,
    },
    durations: {
      "Need hair provided": null,
      "Hair not provided": null,
    },
    disclaimer:
      "Pease have hair washed - blow dried. Natural hair must be at least 6inches.",
  },
  {
    name: "Box Braids Services",
    image: hairBlesserOfficial,
    variations: [
      "Small Mid Length",
      "Small Waist Length",
      "Small Butt Length",
      "Small Thight Length",
      "X Small Mid Length",
      "X Small Waist Length",
      "Smedium Mid Length",
    ],
    prices: {
      "Small Mid Length": null,
      "Small Waist Length": null,
      "Small Butt Length": null,
      "Small Thight Length": null,
      "X Small Mid Length": null,
      "X Small Waist Length": null,
      "Smedium Mid Length": null,
    },
    durations: {
      "Small Mid Length": null,
      "Small Waist Length": null,
      "Small Butt Length": null,
      "Small Thight Length": null,
      "X Small Mid Length": null,
      "X Small Waist Length": null,
      "Smedium Mid Length": null,
    },
    disclaimer: "Pease have hair washed - blow dried.",
  },
  {
    name: "Knotless Braids Services",
    image: hairBlesserOfficial,
    variations: [
      "Large Knotless Waist Length",
      "Large Knotless Thigh Length",
      "Medium Mid Length",
      "Medum Waist Length",
      "Medium Butt Length",
      "Medium Thigh Length",
      "Medium Knee Length",
      "Smedium Mid Length",
      "Smedium Waist Length",
      "Smedium Butt Lenght",
      "Smedium Thigh Length",
      "Small Mid Length",
      "Small Waist Length",
      "Small Butt Length",
      "Small Thigh Length",
      "Small/Smedium Bob (no BOHO)",
      "Extra Small Mid Lenght",
      "Extra Small Waist Length",
      "Extram small Butt Length",
    ],
    prices: {
      "Large Knotless Waist Length": null,
      "Large Knotless Thigh Length": null,
      "Medium Mid Length": null,
      "Medum Waist Length": null,
      "Medium Butt Length": null,
      "Medium Thigh Length": null,
      "Medium Knee Length": null,
      "Smedium Mid Length": null,
      "Smedium Waist Length": null,
      "Smedium Butt Lenght": null,
      "Smedium Thigh Length": null,
      "Small Mid Length": null,
      "Small Waist Length": null,
      "Small Butt Length": null,
      "Small Thigh Length": null,
      "Small/Smedium Bob (no BOHO)": null,
      "Extra Small Mid Lenght": null,
      "Extra Small Waist Length": null,
      "Extram small Butt Length": null,
    },
    durations: {
      "Large Knotless Waist Length": null,
      "Large Knotless Thigh Length": null,
      "Medium Mid Length": null,
      "Medum Waist Length": null,
      "Medium Butt Length": null,
      "Medium Thigh Length": null,
      "Medium Knee Length": null,
      "Smedium Mid Length": null,
      "Smedium Waist Length": null,
      "Smedium Butt Lenght": null,
      "Smedium Thigh Length": null,
      "Small Mid Length": null,
      "Small Waist Length": null,
      "Small Butt Length": null,
      "Small Thigh Length": null,
      "Small/Smedium Bob (no BOHO)": null,
      "Extra Small Mid Lenght": null,
      "Extra Small Waist Length": null,
      "Extram small Butt Length": null,
    },
    disclaimer: "Hair included! Pease have hair washed - blow dried.",
  },
  {
    name: "BOHO KNOTLESS BRAID SERVICES",
    image: hairBlesserOfficial,
    variations: [
      "Bob Kntless Medium BOB",
      "BOHO Knotless Small BOB",
      "BOHO Knotless BOB for Long hair",
      "BOHO Small Mid Length",
      "BOHO Small Waist Length",
      "BOHO Small Butt Length",
      "BOHO Smedium Mid Length",
      "BOHO Smedium Waist Length",
      "BOHO Smedium Butt Length",
      "BOHO Smedium Thigh Length",
      "BOHO Medium Mid Length",
      "BOHO Medium Waist Length",
      "BOHO Medium Butt Length",
      "BOHO Medium Thigh Lenght",
      "BOHO Large Butt Length",
      "BOHO Large Thigh Length",
      "BOHO Large Waist Length",
    ],
    prices: {
      "Bob Kntless Medium BOB": null,
      "BOHO Knotless Small BOB": null,
      "BOHO Knotless BOB for Long hair": null,
      "BOHO Small Mid Length": null,
      "BOHO Small Waist Length": null,
      "BOHO Small Butt Length": null,
      "BOHO Smedium Mid Length": null,
      "BOHO Smedium Waist Length": null,
      "BOHO Smedium Butt Length": null,
      "BOHO Smedium Thigh Length": null,
      "BOHO Medium Mid Length": null,
      "BOHO Medium Waist Length": null,
      "BOHO Medium Butt Length": null,
      "BOHO Medium Thigh Lenght": null,
      "BOHO Large Butt Length": null,
      "BOHO Large Thigh Length": null,
      "BOHO Large Waist Length": null,
    },
    durations: {
      "Bob Kntless Medium BOB": null,
      "BOHO Knotless Small BOB": null,
      "BOHO Knotless BOB for Long hair": null,
      "BOHO Small Mid Length": null,
      "BOHO Small Waist Length": null,
      "BOHO Small Butt Length": null,
      "BOHO Smedium Mid Length": null,
      "BOHO Smedium Waist Length": null,
      "BOHO Smedium Butt Length": null,
      "BOHO Smedium Thigh Length": null,
      "BOHO Medium Mid Length": null,
      "BOHO Medium Waist Length": null,
      "BOHO Medium Butt Length": null,
      "BOHO Medium Thigh Lenght": null,
      "BOHO Large Butt Length": null,
      "BOHO Large Thigh Length": null,
      "BOHO Large Waist Length": null,
    },
    disclaimer:
      "Hair included, There is a $40 non refundable deposit that is due at least 48HRS before your appointment or appointment will be canceled. Cancellation fee will be charged. Pease have hair washed - blow dried. For 2 colors the curls only there will be an extra $60 charge. Any color(s) available for the braiding hair (no extra charge) Bob length is for natural hair that DOES NOT  pass the top of your shoulders. There WILL be an extra charge if your hair passes your shoulers. Definitely deep wave is used, plese Let Me Know if you would like something else.",
  },
  {
    name: "Island Twist Services",
    image: hairBlesserOfficial,
    variations: [
      "Large Waist Length",
      "Large Thigh Length",
      "Medium Mid Length",
      "Medium Waist Length",
      "Medium Butt Length",
      "Smedium Mid Length",
      "Smedium Waist Length",
      "Smedium Butt Length",
      "Small Mid Length",
      "Small Waist Length",
      "Small Butt Length",
    ],
    prices: {
      "Large Waist Length": null,
      "Large Thigh Length": null,
      "Medium Mid Length": null,
      "Medium Waist Length": null,
      "Medium Butt Length": null,
      "Smedium Mid Length": null,
      "Smedium Waist Length": null,
      "Smedium Butt Length": null,
      "Small Mid Length": null,
      "Small Waist Length": null,
      "Small Butt Length": null,
    },
    durations: {
      "Large Waist Length": null,
      "Large Thigh Length": null,
      "Medium Mid Length": null,
      "Medium Waist Length": null,
      "Medium Butt Length": null,
      "Smedium Mid Length": null,
      "Smedium Waist Length": null,
      "Smedium Butt Length": null,
      "Small Mid Length": null,
      "Small Waist Length": null,
      "Small Butt Length": null,
    },
    disclaimer: "Hair is included, Pease have hair washed - blow dried.",
  },
  {
    name: "BOHO Island Twist Services",
    image: hairBlesserOfficial,
    variations: [
      "BOHO Small BOB",
      "BOHO Smedium BOB",
      "BOHO Small Mid Length",
      "BOHO Small Waist Length",
      "BOHO Smedium Mid Length",
      "BOHO Smedium Waist Length",
      "BOHO Smedium Butt Length",
      "BOHO Smedium Mid Length",
      "BOHO Smedium Waist Length",
      "BOHO Medium Butt Length",
      "BOhO Medium Thigh Length",
    ],
    prices: {
      "BOHO Small BOB": null,
      "BOHO Smedium BOB": null,
      "BOHO Small Mid Length": null,
      "BOHO Small Waist Length": null,
      "BOHO Smedium Mid Length": null,
      "BOHO Smedium Waist Length": null,
      "BOHO Smedium Butt Length": null,
      "BOHO Smedium Mid Length": null,
      "BOHO Smedium Waist Length": null,
      "BOHO Medium Butt Length": null,
      "BOhO Medium Thigh Length": null,
    },
    durations: {
      "BOHO Small BOB": null,
      "BOHO Smedium BOB": null,
      "BOHO Small Mid Length": null,
      "BOHO Small Waist Length": null,
      "BOHO Smedium Mid Length": null,
      "BOHO Smedium Waist Length": null,
      "BOHO Smedium Butt Length": null,
      "BOHO Smedium Mid Length": null,
      "BOHO Smedium Waist Length": null,
      "BOHO Medium Butt Length": null,
      "BOhO Medium Thigh Length": null,
    },
    disclaimer:
      "There is a $30 deposit for all BOHO styles as of June 1st, 2025 due to an increase in price for 100% human hair. (Zelle, cash app, Apple Pay) Hair included. Pease have hair washed - blow dried. Bob length is for natural hair that DOES NOT pass the top of your shoulders. You will be charged an extra fee if so.",
  },
  {
    name: "French Curl Braids",
    image: hairBlesserOfficial,
    variations: [
      "Medium Mid Length",
      "Medium Waist Length",
      "Smedium Mid Length",
      "Smedium Waist Length",
    ],
    prices: {
      "Medium Mid Length": null,
      "Medium Waist Length": null,
      "Smedium Mid Length": null,
      "Smedium Waist Length": null,
    },
    durations: {
      "Medium Mid Length": null,
      "Medium Waist Length": null,
      "Smedium Mid Length": null,
      "Smedium Waist Length": null,
    },
    disclaimer: "Hair included. Pease have hair washed - blow dried.",
  },
  {
    name: "Luna Locs",
    image: hairBlesserOfficial,
    variations: [
      "Smedium Mid Length (hair included)",
      "Smedium Waist Length (Hair included)",
      "Smedium Thigh Length (Hair included)",
      "Medium Mid Length (Hair included)",
      "Medium Waist Length (Hair included)",
      "Medium Thigh Length (hair included)",
      "Smedium Size (Bring your own curls)",
      "Medium Size (Bring your own curls)",
    ],
    prices: {
      "Smedium Mid Length (hair included)": null,
      "Smedium Waist Length (Hair included)": null,
      "Smedium Thigh Length (Hair included)": null,
      "Medium Mid Length (Hair included)": null,
      "Medium Waist Length (Hair included)": null,
      "Medium Thigh Length (hair included)": null,
      "Smedium Size (Bring your own curls)": null,
      "Medium Size (Bring your own curls)": null,
    },
    durations: {
      "Smedium Mid Length (hair included)": null,
      "Smedium Waist Length (Hair included)": null,
      "Smedium Thigh Length (Hair included)": null,
      "Medium Mid Length (Hair included)": null,
      "Medium Waist Length (Hair included)": null,
      "Medium Thigh Length (hair included)": null,
      "Smedium Size (Bring your own curls)": null,
      "Medium Size (Bring your own curls)": null,
    },
    disclaimer:
      "$100 non refundable deposit if you need me to provide the human curls. These are soft locs with human curls. At least 5 bundles needed for a full look. This style needs to be booked at least a 5 day advance due to the process of attching locs. It takes me about 9Hrs before your appointment. Pease have hair washed - blow dried.",
  },
  {
    name: "Soft Locs Services",
    image: hairBlesserOfficial,
    variations: [
      "Soft loc Touch Up",
      "Soft loc Take Down",
      "Small Mid Back",
      "Small Waist Length",
      "Small Thigh Length",
      "Smedium Mid Back",
      "Smedium Waist Length",
      "Smedium Thigh Length",
    ],
    prices: {
      "Soft loc Touch Up": null,
      "Soft loc Take Down": null,
      "Small Mid Back": null,
      "Small Waist Length": null,
      "Small Thigh Length": null,
      "Smedium Mid Back": null,
      "Smedium Waist Length": null,
      "Smedium Thigh Length": null,
    },
    durations: {
      "Soft loc Touch Up": null,
      "Soft loc Take Down": null,
      "Small Mid Back": null,
      "Small Waist Length": null,
      "Small Thigh Length": null,
      "Smedium Mid Back": null,
      "Smedium Waist Length": null,
      "Smedium Thigh Length": null,
    },
    disclaimer:
      "Hair included. Pease have hair washed - blow dried for loc install services. For loc take down I only take them down no wash, if you would like a wash let me know in advance, please keep in mind I do work from home",
  },
  {
    name: "goddess Soft Locs/Synthetic Curls",
    image: hairBlesserOfficial,
    variations: [
      "Smedium Mid Length",
      "Smedium Waist Length",
      "Smedium Butt Length",
      "Smedium Thigh Length",
      "Smedium (Bring your own hair)",
      "Medium Mid Length",
      "Medium Mid Length",
      "Medium Waist Length",
      "Medium Butt Length",
      "Medium Thigh Length",
      "Medium (Bring your own hair)",
    ],
    prices: {
      "Smedium Mid Length": null,
      "Smedium Waist Length": null,
      "Smedium Butt Length": null,
      "Smedium Thigh Length": null,
      "Smedium (Bring your own hair)": null,
      "Medium Mid Length": null,
      "Medium Waist Length": null,
      "Medium Butt Length": null,
      "Medium Thigh Length": null,
      "Medium (Bring your own hair)": null,
    },
    durations: {
      "Smedium Mid Length": null,
      "Smedium Waist Length": null,
      "Smedium Butt Length": null,
      "Smedium Thigh Length": null,
      "Smedium (Bring your own hair)": null,
      "Medium Mid Length": null,
      "Medium Waist Length": null,
      "Medium Butt Length": null,
      "Medium Thigh Length": null,
      "Medium (Bring your own hair)": null,
    },
    disclaimer:
      "$40 deposit due at least 48HRS before appointment. Pease have hair washed - blow dried w/ no product .",
  },
  {
    name: "goddess Locs/Human Curls",
    image: hairBlesserOfficial,
    variations: [
      "Smedium Mid Length",
      "Smedium Waist Length",
      "Smedium Butt Length",
      "Smedium Mid Length",
      "Medium Waist Length",
      "Medium Butt Length",
      "Bring your own Locs",
    ],
    prices: {
      "Smedium Mid Length": null,
      "Smedium Waist Length": null,
      "Smedium Butt Length": null,
      "Medium Waist Length": null,
      "Medium Butt Length": null,
      "Bring your own Locs": null,
    },
    durations: {
      "Smedium Mid Length": null,
      "Smedium Waist Length": null,
      "Smedium Butt Length": null,
      "Medium Waist Length": null,
      "Medium Butt Length": null,
      "Bring your own Locs": null,
    },
    disclaimer:
      "This is with human curls attached to the locs. A $60 deposit is needed at least 48HRS before your appointment. Pease have hair washed - blow dried.",
  },
  {
    name: "Mini Twist",
    image: hairBlesserOfficial,
    variations: [
      "Mini Twist on Natural hair",
      "Mini Twist W/Added Synthetic hair",
      "Mini Twist W/Added Human hair",
      "Bring your own human hair",
    ],
    prices: {
      "Mini Twist on Natural hair": null,
      "Mini Twist W/Added Synthetic hair": null,
      "Mini Twist W/Added Human hair": null,
      "Bring your own human hair": null,
    },
    durations: {
      "Mini Twist on Natural hair": null,
      "Mini Twist W/Added Synthetic hair": null,
      "Mini Twist W/Added Human hair": null,
      "Bring your own human hair": null,
    },
    disclaimer:
      "Pease have hair washed - blow dried. The hair that is added is Spring Twist Hair or Human Hair. Mini twist W/Human hair is up to 8in anything longer is an extra cost. if you would like them bidder than micro/mini price is decreased $120 non refundable deposit W/Human hair.",
  },
  {
    name: "Butterfly Loc",
    image: hairBlesserOfficial,
    variations: [
      "Smedium Waist",
      "Smedium Mid Length",
      "Medium Waist Length",
      "Medium Mid Length",
    ],
    prices: {
      "Smedium Waist": null,
      "Smedium Mid Length": null,
      "Medium Waist Length": null,
      "Medium Mid Length": null,
    },
    durations: {
      "Smedium Waist": null,
      "Smedium Mid Length": null,
      "Medium Waist Length": null,
      "Medium Mid Length": null,
    },
    disclaimer: "Pease have hair washed - blow dried.",
  },
  {
    name: "Fulani Braid Services",
    image: hairBlesserOfficial,
    variations: [
      "BOHO Waist Length",
      "No BOHO Waist Length",
      "BOHO Mid Back Length",
      "No BOHO Mid Back Length",
      "Sew In (In the Back)",
      "Crochet In The Back",
    ],
    prices: {
      "BOHO Waist Length": null,
      "No BOHO Waist Length": null,
      "BOHO Mid Back Length": null,
      "No BOHO Mid Back Length": null,
      "Sew In (In the Back)": null,
      "Crochet In The Back": null,
    },
    durations: {
      "BOHO Waist Length": null,
      "No BOHO Waist Length": null,
      "BOHO Mid Back Length": null,
      "No BOHO Mid Back Length": null,
      "Sew In (In the Back)": null,
      "Crochet In The Back": null,
    },
    disclaimer: "Hair included. Pease have hair washed - blow dried.",
  },
  {
    name: "Women's Braided Styles",
    image: hairBlesserOfficial,
    variations: [""],
    prices: {
      "": null,
    },
    durations: {
      "": null,
    },
    disclaimer: "Hair included. Pease have hair washed - blow dried.",
  },
  {
    name: "Stitch Braid Services",
    image: hairBlesserOfficial,
    variations: [
      "5 Stich Braids",
      "6 Stich Braids",
      "7 Stich Braids",
      "8 Stitch Braids",
      "10 Or More Stich Braids",
    ],
    prices: {
      "5 Stich Braids": null,
      "6 Stich Braids": null,
      "7 Stich Braids": null,
      "8 Stitch Braids": null,
      "10 Or More Stich Braids": null,
    },
    durations: {
      "5 Stich Braids": null,
      "6 Stich Braids": null,
      "7 Stich Braids": null,
      "8 Stitch Braids": null,
      "10 Or More Stich Braids": null,
    },
    disclaimer:
      "I provide hair for $10 extra up to waist length, anything longer is an extra $20 charge. Pease have hair washed - blow dried.",
  },
  {
    name: "Simple Braid Downs",
    image: hairBlesserOfficial,
    variations: [""],
    prices: {
      "": null,
    },
    durations: {
      "": null,
    },
    disclaimer: "Pease have hair washed - blow dried.",
  },
  {
    name: "Braid Take Down",
    image: hairBlesserOfficial,
    variations: [""],
    prices: {
      "": null,
    },
    durations: {
      "": null,
    },
    disclaimer: "Hair included. Pease have hair washed - blow dried.",
  },
  {
    name: "Bora Braids",
    image: hairBlesserOfficial,
    variations: [
      "Medium Mid Back Length",
      "Medium Waist Length",
      "Smedium BOB",
      "Smedium Mid Back",
      "Smedium Waist Length",
      "Small BOB",
    ],
    prices: {
      "Medium Mid Back Length": null,
      "Medium Waist Length": null,
      "Smedium BOB": null,
      "Smedium Mid Back": null,
      "Smedium Waist Length": null,
      "Small BOB": null,
    },
    durations: {
      "Medium Mid Back Length": null,
      "Medium Waist Length": null,
      "Smedium BOB": null,
      "Smedium Mid Back": null,
      "Smedium Waist Length": null,
      "Small BOB": null,
    },
    disclaimer:
      "Hair included. Pease have hair washed - blow dried. These are similar to BOHO Knotless except you can not see the braids. Usually 7-10 piexed of curls added to each braid. Requires $100 non refundable deposit due at least 48HRS before. Please Reach Out.",
  },
  {
    name: "Touch Up (Half Head)",
    image: hairBlesserOfficial,
    variations: [""],
    prices: {
      "": null,
    },
    durations: {
      "": null,
    },
    disclaimer: "Hair included. Pease have hair washed - blow dried.",
  },
  {
    name: "Pre Parting",
    image: hairBlesserOfficial,
    variations: ["Medium", "Smedium", "Small", "X-small"],
    prices: {
      "Medium": null,
      "Smedium": null,
      "Small": null,
      "X-small": null,
    },
    durations: {
      "Medium": null,
      "Smedium": null,
      "Small": null,
      "X-small": null,
    },
    disclaimer: "Hair included. Pease have hair washed - blow dried.",
  },
  {
    name: "Part & Start",
    image: hairBlesserOfficial,
    variations: [
      "Medium Waist Length",
      "Smedium Waist Length",
      "Small Waist Length",
      "Xsmall Waist Length",
    ],
    prices: {
      "Medium Waist Length": null,
      "Smedium Waist Length": null,
      "Small Waist Length": null,
      "Xsmall Waist Length": null,
    },
    durations: {
      "Medium Waist Length": null,
      "Smedium Waist Length": null,
      "Small Waist Length": null,
      "Xsmall Waist Length": null,
    },
    disclaimer:
      "Hair included. Pease have hair washed - blow dried. Up to waist length. Anything longer is extra. Clips not included. Clips + $10. If you are wanting anything longer than waist length please send me a text or email to let me know.",
  },
  {
    name: "Quick Weave (Not With Frontal)",
    image: hairBlesserOfficial,
    variations: [""],
    prices: {
      "": null,
    },
    durations: {
      "": null,
    },
    disclaimer: "Hair included. Pease have hair washed - blow dried.",
  },
  {
    name: "Passion Twist",
    image: hairBlesserOfficial,
    variations: [""],
    prices: {
      "": null,
    },
    durations: {
      "": null,
    },
    disclaimer: "Hair included. Pease have hair washed - blow dried.",
  },
];
const Book = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState("");
  const [bookingDate, setBookingDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    fetch("/api/bookings")
      .then((res) => res.json())
      .then((data) =>
        setBookedDates(data.map((d) => new Date(d.datetime)))
      )
      .catch(console.error);
  }, []);

  const handleCardClick = (style) => {
    setSelectedStyle(style);
    setSelectedVariation(style.variations[0]);
    setBookingDate(null);
  };

  const handleSubmit = () => {
    if (!bookingDate || !selectedStyle) return;
    const payload = {
      style: selectedStyle.name,
      variation: selectedVariation,
      datetime: bookingDate.toISOString(),
    };
    fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((saved) => {
        setBookedDates([...bookedDates, new Date(saved.datetime)]);
        setSelectedStyle(null);
      })
      .catch(console.error);
  };

  return (
    <div
      className="home container-fluid position-relative text-white"
      style={{ minHeight: "100vh" }}
    >

      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${hairBlesserOfficial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px)",
          zIndex: 1,
        }}
      />

      <div className="position-relative z-2 container py-5">
        <h1 className="book-title text-center mb-4">Book a Style</h1>
        <div className="row g-4 justify-content-center">
          {hairstylesBook.map((style, idx) => (
            <div
              key={idx}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              onClick={() => handleCardClick(style)}
              style={{ cursor: "pointer" }}
            >
              <div className="card bg-dark text-white border-0 shadow rounded-4 h-100">
                <img
                  src={style.image}
                  className="card-img-top rounded-top-4"
                  alt={style.name}
                />
                <div className="card-body text-center">
                  <h5>{style.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedStyle && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={() => setSelectedStyle(null)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark text-white rounded-4">
              <div className="modal-header border-0">
                <h5>{selectedStyle.name}</h5>
                <button
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedStyle(null)}
                />
              </div>
              <div className="modal-body">
                <p className="text-warning">
                  <strong>Note:</strong> {selectedStyle.disclaimer}
                </p>

                <div className="mb-3">
                  <label>Variation</label>
                  <select
                    className="form-select"
                    value={selectedVariation}
                    onChange={(e) =>
                      setSelectedVariation(e.target.value)
                    }
                  >
                    {selectedStyle.variations.map((v, i) => (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <p>
                  <strong>Price:</strong>{" "}
                  {selectedStyle.prices[selectedVariation] ?? "TBD"}
                  <br />
                  <strong>Duration:</strong>{" "}
                  {selectedStyle.durations[selectedVariation] ?? "TBD"} hrs
                </p>

                <div className="mb-3">
                  <label>Choose date & time</label>
                  <DatePicker
                    selected={bookingDate}
                    onChange={(date) => setBookingDate(date)}
                    showTimeSelect
                    timeIntervals={30}
                    minDate={new Date()}
                    excludeDates={bookedDates}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="modal-footer border-0 justify-content-center">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedStyle(null)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-hotpink"
                  onClick={handleSubmit}
                  disabled={!bookingDate}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;