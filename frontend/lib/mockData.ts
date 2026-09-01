import { Service, BlogPost, CompanyStat } from '@/types';

export const COMPANY_INFO = {
  name: "Apex Global Industries",
  tagline: "Engineering Excellence & Sustainable Industrial Manufacturing",
  description: "A leading international corporate manufacturer specializing in high-precision textile engineering, sustainable production, custom OEM/ODM solutions, and green supply chain management.",
  email: "rayhanuddin226@gmail.com",
  phone: "+880 1782-824649",
  address: "750 Innovation Parkway, Suite 400, Industrial District, Tech City, USA",
  workingHours: "Mon - Fri: 8:00 AM - 6:00 PM EST",
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com"
  }
};

export const MOCK_STATS: CompanyStat[] = [
  { label: "Annual Capacity", value: "50M+", description: "Units produced annually across 4 global plants" },
  { label: "Global Clients", value: "120+", description: "Trusted by Fortune 500 brands worldwide" },
  { label: "Eco-Energy Solar", value: "85%", description: "Renewable energy powering main production facilities" },
  { label: "Years Experience", value: "25+", description: "Quarter century of industrial manufacturing leadership" }
];

export const MOCK_SERVICES: Service[] = [
  {
    id: 1,
    title: "High-Precision Industrial Manufacturing",
    slug: "industrial-manufacturing",
    excerpt: "State-of-the-art automated manufacturing infrastructure designed for high-capacity, zero-defect output.",
    content: `
      <h2>World-Class Precision Manufacturing</h2>
      <p>Apex Global operates four automated production facilities equipped with automated CNC machinery, robotic assembly arms, and computerized quality control scanners. We specialize in producing heavy-duty industrial components, technical textiles, and precision-engineered assemblies.</p>
      
      <h3>Key Capabilities</h3>
      <ul>
        <li>Automated high-speed production lines with 24/7 operational capability.</li>
        <li>Sub-millimeter tolerance control with AI vision quality inspection.</li>
        <li>Custom tooling and rapid die adjustment for varied production runs.</li>
        <li>Complete traceability with real-time IoT manufacturing analytics.</li>
      </ul>

      <h3>Compliance & Standards</h3>
      <p>All facilities are certified under ISO 9001:2015 Quality Management Systems and ISO 14001 Environmental Management Systems, ensuring every batch meets rigorous international standards.</p>
    `,
    iconName: "Factory",
    featured_image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    meta_title: "Precision Industrial Manufacturing Services | Apex Global",
    meta_description: "Explore Apex Global's high-precision automated manufacturing capabilities. ISO 9001 certified zero-defect industrial production.",
    features: [
      "24/7 Automated Production Lines",
      "Sub-Millimeter Quality Inspection",
      "ISO 9001 & ISO 14001 Certified",
      "Real-Time IoT Batch Tracking"
    ],
    status: "published"
  },
  {
    id: 2,
    title: "OEM / ODM Custom Product Design & R&D",
    slug: "custom-product-design",
    excerpt: "End-to-end product development from initial CAD design and rapid prototyping to mass production deployment.",
    content: `
      <h2>Custom Product Development & Engineering</h2>
      <p>Our dedicated R&D center partners with global brands to transform product concepts into market-ready industrial solutions. We handle 3D modeling, stress testing, material selection, and prototype verification before launching full-scale manufacturing.</p>

      <h3>R&D Workflow</h3>
      <ul>
        <li><strong>Concept & CAD Modeling:</strong> Advanced 3D mechanical and structural design.</li>
        <li><strong>Prototyping:</strong> 3D printing and short-run sample production within 5 business days.</li>
        <li><strong>Material Innovation:</strong> Custom polymer, alloy, and composite material formulations.</li>
        <li><strong>Pre-Production Testing:</strong> Stress, thermal, and durability strain testing.</li>
      </ul>
    `,
    iconName: "DraftingCompass",
    featured_image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
    meta_title: "Custom OEM / ODM Engineering & Product R&D | Apex Global",
    meta_description: "Turn concepts into reality with Apex Global OEM/ODM design, 3D prototyping, and material R&D engineering services.",
    features: [
      "Rapid Prototyping within 5 Days",
      "Advanced CAD & Finite Element Analysis",
      "Custom Material Formulation",
      "Strict Intellectual Property Protection"
    ],
    status: "published"
  },
  {
    id: 3,
    title: "Sustainable & Green Supply Chain Management",
    slug: "sustainable-supply-chain",
    excerpt: "Environmentally responsible supply chain solutions utilizing recycled materials, solar power, and zero-landfill protocols.",
    content: `
      <h2>Pioneering Green Industrial Manufacturing</h2>
      <p>Sustainability is integrated into every stage of our operations. From ethically sourced raw materials to solar-powered manufacturing plants and zero-waste recycling, we help corporate clients meet ambitious ESG metrics.</p>

      <h3>Green Initiatives</h3>
      <ul>
        <li>85% renewable energy powering primary assembly lines.</li>
        <li>Closed-loop water recycling system recovering 92% of process water.</li>
        <li>Zero-waste landfill certification across all North American and European hubs.</li>
        <li>Eco-friendly biodegradable and recycled packaging solutions.</li>
      </ul>
    `,
    iconName: "Leaf",
    featured_image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
    meta_title: "Sustainable Supply Chain & Green Manufacturing | Apex Global",
    meta_description: "Discover our zero-landfill policies, solar-powered facilities, and sustainable green supply chain solutions for corporate partners.",
    features: [
      "85% Solar Energy Power Plant",
      "92% Closed-Loop Water Recycling",
      "Zero-Landfill Certification",
      "GOTS & OEKO-TEX Eco-Certifications"
    ],
    status: "published"
  },
  {
    id: 4,
    title: "Global Logistics & Inventory Fulfillment",
    slug: "global-logistics",
    excerpt: "Comprehensive global distribution network with automated warehousing, real-time tracking, and just-in-time delivery.",
    content: `
      <h2>Seamless International Distribution</h2>
      <p>We provide integrated inventory management and international shipping services across North America, Europe, and Asia-Pacific. Our just-in-time (JIT) delivery model optimizes supply chains and reduces warehouse holding costs.</p>

      <h3>Logistics Features</h3>
      <ul>
        <li>Automated climate-controlled warehousing with RFID inventory management.</li>
        <li>Direct integration with ERP networks for real-time shipment tracking.</li>
        <li>Custom clearance, tariff compliance, and international freight handling.</li>
      </ul>
    `,
    iconName: "Truck",
    featured_image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    meta_title: "Global Industrial Logistics & Distribution | Apex Global",
    meta_description: "Streamline international shipments with Apex Global's JIT logistics, automated warehousing, and supply chain tracking.",
    features: [
      "Just-in-Time (JIT) Delivery Model",
      "RFID Automated Warehousing",
      "Customs & Tariff Compliance",
      "Worldwide Air, Sea, & Freight Handling"
    ],
    status: "published"
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Smart Manufacturing: AI Vision & IoT in 2026",
    slug: "future-of-smart-manufacturing",
    excerpt: "How artificial intelligence and real-time sensor networks are eliminating defect rates and revolutionizing industrial production lines.",
    content: `
      <p>Industrial manufacturing is experiencing a massive paradigm shift. The integration of high-resolution AI vision systems and IoT sensor arrays allows modern plants to detect sub-millimeter material flaws in real time, preventing costly production halts.</p>
      
      <h2>Real-Time Quality Assurance</h2>
      <p>Traditional quality assurance relied on spot-checking completed batches. Today, computer vision models analyze every item passing through high-speed conveyor belts at 60 frames per second. Any deviation in color, dimension, or structural density is flagged instantly.</p>
      
      <h2>Predictive Machine Maintenance</h2>
      <p>IoT vibration and thermal sensors mounted on heavy machinery continuously stream telemetry to predictive maintenance models. By detecting micro-vibrations before mechanical failure occurs, unplanned factory downtime has decreased by over 40% across our primary plants.</p>
    `,
    category: "Smart Industry",
    featured_image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    author: "Dr. Marcus Vance, Head of R&D",
    published_at: "September 1, 2026",
    readTime: "5 min read",
    meta_title: "AI Vision & IoT in Smart Manufacturing 2026 | Apex Global",
    meta_description: "Explore how AI computer vision and predictive IoT maintenance are shaping 2026 smart manufacturing standards.",
    status: "published"
  },
  {
    id: 2,
    title: "Achieving Net-Zero Carbon in Industrial Supply Chains",
    slug: "achieving-net-zero-industrial-supply-chains",
    excerpt: "Practical steps corporate manufacturers are taking to transition to solar microgrids, closed-loop water systems, and circular raw materials.",
    content: `
      <p>Corporate environmental responsibility is no longer optional; it is a critical competitive advantage. Transitioning heavy industrial manufacturing to net-zero requires strategic capital investment in renewable microgrids and circular waste reclamation.</p>
      
      <h2>Solar Microgrids in Heavy Industry</h2>
      <p>At Apex Global, installing 12 Megawatts of rooftop solar arrays at our primary manufacturing facility allowed us to power 85% of day-to-day operations with clean, zero-emission electricity. Excess energy is stored in industrial battery banks for peak demand shaving.</p>
      
      <h2>Closed-Loop Water Management</h2>
      <p>Industrial washing and cooling processes consume high volumes of water. By installing multi-stage reverse osmosis filtration and biological treatment systems, 92% of operational water is purified and reused indefinitely within the plant.</p>
    `,
    category: "Sustainability",
    featured_image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
    author: "Elena Rostova, Chief Sustainability Officer",
    published_at: "August 24, 2026",
    readTime: "6 min read",
    meta_title: "Net-Zero Carbon Supply Chain Strategy | Apex Global",
    meta_description: "Learn how solar microgrids and closed-loop water treatment help industrial enterprises achieve net-zero carbon goals.",
    status: "published"
  },
  {
    id: 3,
    title: "Overcoming Global Logistics Disruptions with JIT Strategy",
    slug: "overcoming-logistics-disruptions-jit-strategy",
    excerpt: "Key insights into resilient inventory routing, regional hub deployment, and predictive supply chain management for international enterprises.",
    content: `
      <p>Recent global trade volatility highlighted the vulnerability of fragile supply chains. To maintain operational continuity, forward-thinking manufacturers are adopting multi-regional distribution hubs and dynamic buffer stock algorithms.</p>
      
      <h2>Distributed Regional Warehousing</h2>
      <p>Relying on a single centralized warehouse exposes companies to shipping bottlenecks. By establishing localized fulfillment nodes across North America, Europe, and Asia, lead times are cut from weeks to days.</p>
    `,
    category: "Logistics",
    featured_image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    author: "Robert Sterling, VP of Supply Chain",
    published_at: "August 10, 2026",
    readTime: "4 min read",
    meta_title: "Overcoming Global Supply Chain Disruptions | Apex Global",
    meta_description: "Discover strategies for resilient JIT logistics and multi-regional industrial inventory management.",
    status: "published"
  }
];
