import { Product } from "@/types";

export const products: Product[] = [

  {
    id: "p01",
    name: "Meridian 14 Ultrabook",
    category: "Laptops",
    price: 899.0,
    stock: 14,
    rating: 4.6,
    image: "p01.jpg",
    tagline: "13th-gen Core i5, 14\" 2.2K, all-day battery",
    description:
      "The Meridian 14 is built for lecture halls and coffee-shop study sessions alike: a magnesium-alloy chassis under 1.3kg, a 2.2K IPS display that stays readable outdoors, and a battery that comfortably clears a full school day on one charge.",
    specs: [
      { label: "Processor", value: "Intel Core i5-1340P" },
      { label: "RAM / Storage", value: "16GB / 512GB NVMe SSD" },
      { label: "Display", value: "14\" 2.2K IPS, 60Hz" },
      { label: "Battery life", value: "Up to 15 hours" },
      { label: "Weight", value: "1.28 kg" },
    ],
  },
  {
    id: "p02",
    name: "Forge 15 Creator Laptop",
    category: "Laptops",
    price: 1349.0,
    stock: 8,
    rating: 4.7,
    image: "p02.jpg",
    tagline: "RTX 4060, 15.6\" 165Hz, built for editing",
    description:
      "Forge 15 pairs a discrete RTX 4060 with a color-accurate 165Hz panel (100% sRGB), so timelines scrub smoothly and renders finish fast. A vapor-chamber cooler keeps clocks steady through long export sessions.",
    specs: [
      { label: "Processor", value: "Intel Core i7-13700H" },
      { label: "Graphics", value: "NVIDIA RTX 4060 8GB" },
      { label: "RAM / Storage", value: "32GB / 1TB NVMe SSD" },
      { label: "Display", value: "15.6\" QHD 165Hz, 100% sRGB" },
      { label: "Weight", value: "2.1 kg" },
    ],
  },
  {
    id: "p03",
    name: "Voyager Go 13 Lightweight Laptop",
    category: "Laptops",
    price: 749.0,
    stock: 20,
    rating: 4.4,
    image: "p03.jpg",
    tagline: "0.99kg fanless laptop for travel and writing",
    description:
      "A fanless, silent 13-incher built around efficiency: a low-power ARM-class chip, a 1080p display, and a body light enough to forget is in your bag. Ideal as a second laptop for notes, writing, and browser-based coursework.",
    specs: [
      { label: "Processor", value: "Snapdragon-class ARM SoC" },
      { label: "RAM / Storage", value: "8GB / 256GB SSD" },
      { label: "Display", value: "13.3\" FHD IPS" },
      { label: "Battery life", value: "Up to 18 hours" },
      { label: "Weight", value: "0.99 kg" },
    ],
  },
  {
    id: "p04",
    name: "Titan 16 Gaming Laptop",
    category: "Laptops",
    price: 1599.0,
    stock: 6,
    rating: 4.5,
    image: "p04.jpg",
    tagline: "RTX 4070, 240Hz QHD, per-key RGB",
    description:
      "Titan 16 is built for competitive frame rates without leaving the desktop behind: an RTX 4070, a 240Hz QHD panel, and a beefed-up cooling system with dual fans and quad exhaust vents keep performance consistent under load.",
    specs: [
      { label: "Processor", value: "AMD Ryzen 9 7940HX" },
      { label: "Graphics", value: "NVIDIA RTX 4070 8GB" },
      { label: "RAM / Storage", value: "32GB / 1TB NVMe SSD" },
      { label: "Display", value: "16\" QHD 240Hz" },
      { label: "Weight", value: "2.5 kg" },
    ],
  },

  {
    id: "p05",
    name: "Cube Mini PC",
    category: "Desktops",
    price: 499.0,
    stock: 17,
    rating: 4.3,
    image: "p05.jpg",
    tagline: "Palm-sized desktop, silent, Wi-Fi 6E",
    description:
      "Cube fits behind a monitor on a VESA mount and draws under 30W, but still handles office work, coding, and 4K video playback without breaking a sweat. A quiet single-fan design keeps it near-silent on a desk.",
    specs: [
      { label: "Processor", value: "Intel Core i5-1335U" },
      { label: "RAM / Storage", value: "16GB / 512GB NVMe SSD" },
      { label: "Ports", value: "2x USB-C, 4x USB-A, HDMI, DP" },
      { label: "Networking", value: "Wi-Fi 6E, 2.5GbE" },
    ],
  },
  {
    id: "p06",
    name: "Foundry Tower Desktop",
    category: "Desktops",
    price: 1199.0,
    stock: 5,
    rating: 4.6,
    image: "p06.jpg",
    tagline: "RTX 4060 Ti tower, tool-less case, 3 free bays",
    description:
      "A pre-built ATX tower for people who'd rather write code or render video than build a PC from scratch, but still want room to grow: three open drive bays, two free RAM slots, and a tool-less side panel for easy upgrades.",
    specs: [
      { label: "Processor", value: "AMD Ryzen 7 7700" },
      { label: "Graphics", value: "NVIDIA RTX 4060 Ti 16GB" },
      { label: "RAM / Storage", value: "32GB / 1TB NVMe SSD" },
      { label: "Case", value: "ATX mid-tower, tool-less" },
    ],
  },

  {
    id: "p07",
    name: "ClearView 27\" QHD Monitor",
    category: "Monitors",
    price: 259.0,
    stock: 21,
    rating: 4.5,
    image: "p07.jpg",
    tagline: "27\" QHD IPS, 165Hz, USB-C 65W",
    description:
      "A 27\" QHD IPS panel at 165Hz with a single USB-C cable that carries video, data, and up to 65W of laptop charging — one cable to a docked desk. Height, tilt, and pivot adjustment come standard on the stand.",
    specs: [
      { label: "Panel", value: "27\" QHD IPS" },
      { label: "Refresh rate", value: "165Hz, 1ms GtG" },
      { label: "Ports", value: "USB-C (65W PD), HDMI, DP" },
      { label: "Adjustability", value: "Height, tilt, pivot, swivel" },
    ],
  },
  {
    id: "p08",
    name: "ClearView 34\" Ultrawide Monitor",
    category: "Monitors",
    price: 479.0,
    stock: 9,
    rating: 4.6,
    image: "p08.jpg",
    tagline: "34\" curved ultrawide, 21:9, 144Hz",
    description:
      "A 34\" curved 21:9 panel that replaces a two-monitor setup with one cable and no bezel gap down the middle. 144Hz keeps motion smooth for both spreadsheets and games, and a 1500R curve keeps the edges in your field of view.",
    specs: [
      { label: "Panel", value: "34\" curved VA, 21:9" },
      { label: "Resolution", value: "3440 x 1440 (WQHD)" },
      { label: "Refresh rate", value: "144Hz" },
      { label: "Ports", value: "USB-C, 2x HDMI, DP" },
    ],
  },
  {
    id: "p09",
    name: "PortaScreen 15.6\" Portable Monitor",
    category: "Monitors",
    price: 169.0,
    stock: 24,
    rating: 4.2,
    image: "p09.jpg",
    tagline: "USB-C portable second screen, folio stand",
    description:
      "A 15.6\" 1080p panel thin enough to slide into a laptop sleeve, powered entirely over a single USB-C cable from your laptop. The folding folio case doubles as a stand at two viewing angles.",
    specs: [
      { label: "Panel", value: "15.6\" FHD IPS" },
      { label: "Connectivity", value: "USB-C (single cable)" },
      { label: "Weight", value: "780 g" },
      { label: "Extras", value: "Folio stand case included" },
    ],
  },

  {
    id: "p10",
    name: "Keystroke 75% Mechanical Keyboard",
    category: "Peripherals",
    price: 79.99,
    stock: 22,
    rating: 4.7,
    image: "p10.jpg",
    tagline: "Hot-swappable switches, PBT keycaps",
    description:
      "A compact 75% layout keyboard with a gasket-mounted plate for a softer typing feel, hot-swappable switch sockets for easy customization, and thick PBT keycaps that resist shine over years of use. Connects over USB-C or 2.4GHz wireless.",
    specs: [
      { label: "Layout", value: "75%, 84 keys" },
      { label: "Switches", value: "Hot-swappable, 3/5-pin" },
      { label: "Connectivity", value: "USB-C, 2.4GHz" },
      { label: "Keycaps", value: "PBT dye-sublimated" },
    ],
  },
  {
    id: "p11",
    name: "Glide Ergonomic Mouse",
    category: "Peripherals",
    price: 34.99,
    stock: 31,
    rating: 4.2,
    image: "p11.jpg",
    tagline: "Vertical grip, silent clicks",
    description:
      "A vertical ergonomic mouse designed to keep your wrist in a neutral handshake position through long work sessions. Silent switches cut click noise by roughly 90%, and a 4000 DPI optical sensor tracks smoothly on most surfaces without a mat.",
    specs: [
      { label: "Sensor", value: "Optical, up to 4000 DPI" },
      { label: "Grip style", value: "Vertical, 57°" },
      { label: "Connectivity", value: "2.4GHz USB receiver" },
      { label: "Battery life", value: "~70 days" },
    ],
  },
  {
    id: "p12",
    name: "FocusFrame 1440p Webcam",
    category: "Peripherals",
    price: 54.0,
    stock: 17,
    rating: 4.3,
    image: "p12.jpg",
    tagline: "Autofocus webcam with privacy shutter",
    description:
      "A 1440p webcam with fast autofocus and HDR exposure balancing for backlit rooms, plus a sliding privacy shutter for peace of mind between calls. A wide-angle lens with adjustable field of view frames one person or a small group without extra hardware.",
    specs: [
      { label: "Resolution", value: "1440p @ 30fps" },
      { label: "Field of view", value: "78°–95° adjustable" },
      { label: "Focus", value: "Autofocus, HDR" },
      { label: "Mount", value: "Clip-on / tripod thread" },
    ],
  },

  {
    id: "p13",
    name: "DockMaster 12-in-1 USB-C Hub",
    category: "Accessories",
    price: 69.0,
    stock: 28,
    rating: 4.4,
    image: "p13.jpg",
    tagline: "Dual 4K HDMI, 100W passthrough, SD/microSD",
    description:
      "One dock, one cable: dual 4K HDMI outputs for a two-monitor setup, a 100W USB-C passthrough so your laptop keeps charging, plus SD/microSD slots and gigabit Ethernet for a fully wired desk.",
    specs: [
      { label: "Video out", value: "2x HDMI (4K@30Hz / 4K@60Hz)" },
      { label: "Power delivery", value: "100W passthrough" },
      { label: "Ports", value: "3x USB-A, Ethernet, SD/microSD" },
      { label: "Cable length", value: "20 cm integrated" },
    ],
  },
  {
    id: "p14",
    name: "VoltPack 20,000mAh Power Bank",
    category: "Accessories",
    price: 42.0,
    stock: 35,
    rating: 4.5,
    image: "p14.jpg",
    tagline: "65W USB-C PD, charges a laptop",
    description:
      "A 20,000mAh power bank with 65W USB-C Power Delivery, enough headroom to fast-charge a laptop alongside a phone at the same time. A small LED readout shows remaining capacity as a percentage instead of a vague four-dot gauge.",
    specs: [
      { label: "Capacity", value: "20,000mAh / 74Wh" },
      { label: "Output", value: "65W USB-C PD, 18W USB-A" },
      { label: "Display", value: "LED percentage readout" },
      { label: "Ports", value: "2x USB-C, 1x USB-A" },
    ],
  },
  {
    id: "p15",
    name: "Carry 15.6\" Laptop Backpack",
    category: "Accessories",
    price: 59.0,
    stock: 30,
    rating: 4.6,
    image: "p15.jpg",
    tagline: "Padded 15.6\" sleeve, water-resistant shell",
    description:
      "A daily-carry backpack with a padded, fleece-lined laptop sleeve up to 15.6\", a water-resistant ripstop shell, and a rear anti-theft pocket sized for a phone and cards. A luggage strap slides over a rolling bag handle for travel days.",
    specs: [
      { label: "Laptop sleeve", value: "Up to 15.6\", fleece-lined" },
      { label: "Material", value: "Water-resistant ripstop" },
      { label: "Capacity", value: "24L" },
      { label: "Extras", value: "Luggage strap, anti-theft pocket" },
    ],
  },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
