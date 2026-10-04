export interface LocationInfo {
  name: string;
  slug: string;
  county: string;
  zipCodes: string[];
  environment: string;
  homeTypes: string;
  climateFactors: string;
  landmarks: string[];
  commonHVACChallenges: string[];
}

export interface ServiceInfo {
  name: string;
  slug: string;
  actionWord: string;
  category: "cooling" | "heating" | "general" | "comfort";
  tagline: string;
  primaryFocus: string;
  processSteps: { title: string; desc: string }[];
  problemTemplates: { title: string; desc: string }[];
}

export const LOCATIONS: Record<string, LocationInfo> = {
  "silver-springs-shores": {
    name: "Silver Springs Shores",
    slug: "silver-springs-shores",
    county: "Marion County",
    zipCodes: ["34472", "34480"],
    environment: "Suburban community surrounded by springs, lakes, and state forest land with elevated ambient humidity year-round.",
    homeTypes: "Single-family ranches, slab-on-grade homes, modular residences, and established residential subdivisions.",
    climateFactors: "High relative humidity, dense tree canopy pollen, algae growth in condensate lines, and intense summer moisture.",
    landmarks: "Silver Springs State Park, Marshall Swamp Trail, Emerald Road Corridor",
    commonHVACChallenges: [
      "Algae clogging drain lines due to high ambient humidity",
      "Evaporator coil corrosion from persistent moisture",
      "Heavy pollen buildup on outdoor condenser coils",
      "Uneven cooling in expanded single-story ranch homes"
    ]
  },
  "belleview": {
    name: "Belleview",
    slug: "belleview",
    county: "Marion County",
    zipCodes: ["34420", "34421"],
    environment: "Bustling city south of Ocala with a blend of historic downtown pockets, suburban neighborhoods, and active commercial corridors.",
    homeTypes: "Mid-century single-family homes, classic brick ranches, new residential developments, and mobile home communities.",
    climateFactors: "Extended summer cooling seasons, frequent afternoon electrical storm activity, and sudden winter cold fronts.",
    landmarks: "Lake Lillian, Baseline Road Trailhead, Belleview City Park",
    commonHVACChallenges: [
      "Power surge damage to capacitors and control boards from thunderstorm spikes",
      "Refrigerant leaks in aging copper linesets",
      "Heavy cooling load strain during 95°F+ summer peaks",
      "Airflow restrictions caused by outdated ductwork transitions"
    ]
  },
  "summerfield": {
    name: "Summerfield",
    slug: "summerfield",
    county: "Marion County",
    zipCodes: ["34491", "34492"],
    environment: "Picturesque area bridging Ocala and Sumter County, featuring rolling hills, horse pastures, golf communities, and agricultural acreage.",
    homeTypes: "Custom golf-front homes, active-adult neighborhood residences, country ranches, and manufactured estates.",
    climateFactors: "Dust and particulate matter from surrounding farms, intense sun exposure on unshaded lots, and seasonal temp swings.",
    landmarks: "Stonecrest Golf Club, Del Webb Spruce Creek, US-441 corridor",
    commonHVACChallenges: [
      "Agricultural dust clogging high-efficiency outdoor coils",
      "Heat pump reversing valve failures during winter defrost cycles",
      "Temperature imbalances in open-concept floor plans",
      "Higher utility bills from continuous AC operation on large homes"
    ]
  },
  "the-villages": {
    name: "The Villages",
    slug: "the-villages",
    county: "Marion & Sumter Counties",
    zipCodes: ["32162", "32163", "34491"],
    environment: "Nationally recognized premier 55+ master-planned community with manicured landscapes, strict HOA standards, and high HVAC usage demands.",
    homeTypes: "Patio villas, courtyard villas, designer single-family homes, and premier golf-course estates.",
    climateFactors: "Strict acoustic noise ordinances, high expectation for indoor climate precision, and continuous year-round heat pump usage.",
    landmarks: "Spanish Springs Town Square, Mulberry Grove, Chatham Center",
    commonHVACChallenges: [
      "Noise complaints from vibrating outdoor condenser fans near lanais",
      "Thermostat scheduling and smart control integration issues",
      "Heat pump auxiliary heat strip activation problems during cold snaps",
      "Need for ultra-clean indoor air filtration for respiratory comfort"
    ]
  },
  "marion-oaks": {
    name: "Marion Oaks",
    slug: "marion-oaks",
    county: "Marion County",
    zipCodes: ["34473"],
    environment: "Expansive planned residential community in southwest Marion County experiencing rapid new home construction alongside established 1980s homes.",
    homeTypes: "Modern split-plan single-family homes, newly built energy-efficient residences, and established ranch homes.",
    climateFactors: "Unshaded sandy soil thermal radiation, high summer peak heat index, and fine airborne dust.",
    landmarks: "Marion Oaks Community Center, Sunrise Park, Marion Oaks Blvd",
    commonHVACChallenges: [
      "Incorrectly sized HVAC equipment in fast-growing sub-developments",
      "Duct leakage in unconditioned attic spaces causing energy loss",
      "Dirty blower wheels causing restricted airflow and hot spots",
      "Capacitor and contactor burnout during prolonged heatwaves"
    ]
  },
  "dunnellon": {
    name: "Dunnellon",
    slug: "dunnellon",
    county: "Marion County",
    zipCodes: ["34431", "34432"],
    environment: "Historic river city famous for the crystal-clear Rainbow River, dense tree canopy, high water table, and humid riverfront breezes.",
    homeTypes: "Historic Florida cracker homes, riverfront cottages, timbered ranches, and country estates.",
    climateFactors: "Heavy humidity from river systems, shade tree moss dropping into condensers, and frequent lightning storms.",
    landmarks: "Rainbow Springs State Park, Historic Historic District, Blue Run Park",
    commonHVACChallenges: [
      "High indoor relative humidity causing clammy indoor air and mold growth",
      "Aging electrical connections in vintage home installations",
      "Corrosion on coil copper and aluminum fins from river moisture",
      "Gas furnace pilot and burner maintenance in older heating systems"
    ]
  },
  "anthony": {
    name: "Anthony",
    slug: "anthony",
    county: "Marion County",
    zipCodes: ["34617"],
    environment: "Quaint rural community north of Ocala dominated by horse farms, rolling pastures, quiet country roads, and open space.",
    homeTypes: "Horse farm ranches, large custom homes, historic farmhouses, and acreage properties.",
    climateFactors: "Heavy agricultural dust, animal dander, voltage fluctuations on rural utility lines, and cold winter overnight lows.",
    landmarks: "Anthony Elementary area, NE 97th St Rd corridor, Farmland tracts",
    commonHVACChallenges: [
      "Heavy dust buildup in air filters and return ducts requiring frequent service",
      "Low voltage drops causing compressor hard starts",
      "Rodent and pest damage to outdoor unit wiring and insulation",
      "Furnace and heat pump ignition failures during sharp winter freezes"
    ]
  },
  "reddick": {
    name: "Reddick",
    slug: "reddick",
    county: "Marion County",
    zipCodes: ["32686"],
    environment: "Historic agricultural and equine hub in northern Marion County featuring open farmlands, historic estates, and oak tree canopies.",
    homeTypes: "Traditional farmsteads, brick ranch homes, historic properties, and rural single-family residences.",
    climateFactors: "Significant seasonal temperature swings, rural electrical grid sensitivity, and open wind exposure.",
    landmarks: "Reddick Historic District, NW Gaines Highway, Orange Lake vicinity",
    commonHVACChallenges: [
      "LP and natural gas furnace safety and valve troubleshooting",
      "Outdoor fan motor failure from agricultural dirt accumulation",
      "Sub-optimal ductwork layouts in older homestead expansions",
      "Slow heating response during severe freeze warnings"
    ]
  },
  "citra": {
    name: "Citra",
    slug: "citra",
    county: "Marion County",
    zipCodes: ["32113"],
    environment: "Famous citrus-producing region in northeast Marion County near Orange Lake, characterized by lake humidity and agricultural fields.",
    homeTypes: "Lakeside cottages, country homesteads, manufactured homes, and single-family ranches.",
    climateFactors: "Lake-effect moisture, heavy spring citrus and oak pollen, and winter frost conditions.",
    landmarks: "Orange Lake, Pineapple Orange origin marker, US-301 corridor",
    commonHVACChallenges: [
      "Pollen blanket clogging outdoor coils during spring bloom",
      "Auxiliary electric heat coil failure when temperatures drop below freezing",
      "Rusting of outdoor unit cabinets from lake humidity",
      "Biological growth inside air handlers due to constant moisture"
    ]
  },
  "ocala-estates": {
    name: "Ocala Estates",
    slug: "ocala-estates",
    county: "Marion County",
    zipCodes: ["34475", "34482"],
    environment: "Established residential enclave in northwest Ocala known for large residential lots, shade trees, and proximity to horse venues.",
    homeTypes: "Established single-family homes, ranch estates, brick residences, and updated modern properties.",
    climateFactors: "Heavy shade canopy slowing exterior drying, leaf litter clogging units, and long cooling seasons.",
    landmarks: "World Equestrian Center vicinity, NW 27th Ave corridor, Ocala Estates Park",
    commonHVACChallenges: [
      "Debris buildup in outdoor unit tops under mature oak canopy",
      "Aging duct system air leakage in unconditioned crawlspaces or attics",
      "Thermostat miscommunication with multi-stage cooling equipment",
      "Uneven airflow to addition rooms or bonus space over garages"
    ]
  }
};

export const SERVICES: Record<string, ServiceInfo> = {
  "ac-repair": {
    name: "AC Repair",
    slug: "ac-repair",
    actionWord: "repair",
    category: "cooling",
    tagline: "Fast air conditioner repair and AC troubleshooting when your system is AC not cooling or blowing warm air.",
    primaryFocus: "Air conditioner repair, AC troubleshooting, emergency AC repair, fixing AC not cooling issues, and restoring frozen coils.",
    processSteps: [
      { title: "AC Troubleshooting Inspection", desc: "We perform complete AC troubleshooting, testing electrical controls, measuring refrigerant pressures, and locating why your AC is not cooling." },
      { title: "Transparent Air Conditioner Repair Options", desc: "Our technician explains what broke, why your air conditioner is blowing warm air, and the exact upfront repair price before work begins." },
      { title: "Precision Component Repair", desc: "We perform fast air conditioner repair, replacing failed capacitors, fan motors, contactors, or sealing refrigerant leaks using OEM parts." },
      { title: "Cooling Performance Verification", desc: "We verify supply air temperature drop, airflow velocity, and thermostat calibration to ensure steady cooling." }
    ],
    problemTemplates: [
      { title: "AC Blowing Warm Air From Vents", desc: "When your AC runs continuously but warm or tepid air comes out, it signals a failed capacitor, low refrigerant, or compressor overload." },
      { title: "AC Not Cooling & Frozen Evaporator Coil", desc: "Ice buildup on indoor copper lines or air handler coils restricts airflow and prevents your air conditioner from cooling effectively." },
      { title: "Short Cycling & Breaker Tripping", desc: "An AC unit that trips breakers or short-cycles on and off every few minutes is experiencing electrical overheating or component failure." },
      { title: "Water Leaking Around Indoor Unit", desc: "Clogged condensate drain lines or cracked drain pans lead to standing water damage around your indoor air handler." }
    ]
  },
  "ac-installation": {
    name: "AC Installation",
    slug: "ac-installation",
    actionWord: "install",
    category: "cooling",
    tagline: "New AC installation and AC replacement custom-sized for high-efficiency central air performance.",
    primaryFocus: "Designing central air installation projects, seamless AC replacement, and installing high-efficiency SEER2 cooling systems.",
    processSteps: [
      { title: "Manual J Load Calculation", desc: "We evaluate home square footage, insulation level, and duct layout to size your new AC installation accurately." },
      { title: "System Selection for AC Replacement", desc: "We help you select high-efficiency split systems, central air installation options, or variable-speed heat pumps matching your budget." },
      { title: "Professional Central Air Installation", desc: "Our licensed technicians set condenser pads, perform nitrogen purge welding on linesets, and complete seamless new AC installation." },
      { title: "Performance Commissioning", desc: "We test static pressure, superheat, subcooling, and airflow CFM to ensure your AC replacement operates at factory efficiency." }
    ],
    problemTemplates: [
      { title: "Aging System Over 10-12 Years", desc: "Older Florida AC units suffer from severe efficiency loss, rusted coils, and expensive refrigerant leak repair costs." },
      { title: "Soaring Summer Electric Bills", desc: "Inefficient cooling systems run non-stop without reaching setpoint, making a new AC installation the smarter financial choice." },
      { title: "Uneven Room Temperatures", desc: "Improperly sized or worn-out units struggle to push cool air evenly, signalling it is time for an AC replacement." },
      { title: "Frequent Costly Breakdown History", desc: "When repair quotes start approaching half the cost of a new central air installation, replacement restores complete peace of mind." }
    ]
  },
  "heating-repair": {
    name: "Heating Repair",
    slug: "heating-repair",
    actionWord: "repair",
    category: "heating",
    tagline: "Dependable heating repair for furnaces, heat pumps, and electric air handlers during Florida cold snaps.",
    primaryFocus: "Restoring warm air quickly when winter freezes strike, heating repair, furnace troubleshooting, and heat pump repair.",
    processSteps: [
      { title: "Heating Safety & Diagnostic Check", desc: "We inspect heat exchangers, heating strip sequencers, igniters, and safety limit switches for safe operation." },
      { title: "Clear Heating Repair Options", desc: "We explain the precise component failure and provide straightforward heating repair options to restore warmth." },
      { title: "Targeted Component Replacement", desc: "Faulty heat strips, relays, igniters, flame sensors, or thermostats are replaced with precision." },
      { title: "Thermal Performance Test", desc: "We test supply air temperature rise and verify safety limit controls operate properly." }
    ],
    problemTemplates: [
      { title: "System Blowing Cold Air in Heat Mode", desc: "Heat pumps locked in defrost mode or electric air handlers with burnt-out heating sequencers will blow chilly air." },
      { title: "Unusual Burning Smell or Noises", desc: "While initial seasonal dust burn-off is normal, persistent burning odor, rattling, or squealing requires professional heating repair." },
      { title: "Heater Will Not Turn On", desc: "Failed thermostats, blown fuses, open limit switches, or bad igniters prevent heating equipment from starting." },
      { title: "Constant Short Cycling", desc: "A heater that turns off after 1-2 minutes often suffers from overheating, clogged air filters, or flame sensor corrosion." }
    ]
  },
  "furnace-repair": {
    name: "Furnace Repair",
    slug: "furnace-repair",
    actionWord: "repair",
    category: "heating",
    tagline: "Expert gas and electric furnace repair to guarantee safe, reliable winter heating.",
    primaryFocus: "Fixing gas valves, igniters, flame sensors, blower motors, and furnace repair safety controls.",
    processSteps: [
      { title: "Furnace Safety & Combustion Check", desc: "We test gas pressure, inspect heat exchangers for cracks, and check flue ventilation for safe exhaust clearance." },
      { title: "Ignition & Electrical Testing", desc: "We diagnose hot surface igniters, flame rods, control boards, and pressure switches for furnace repair." },
      { title: "Targeted Component Repair", desc: "Defective gas valves, draft inducer motors, or ignition modules are replaced with heavy-duty parts." },
      { title: "Safety Limit Verification", desc: "We verify high limit switches, roll-out switches, and carbon monoxide safety before completing furnace repair." }
    ],
    problemTemplates: [
      { title: "Furnace Clicks But Won't Light", desc: "Dirty flame sensors, faulty hot surface igniters, or clogged gas burners prevent fuel ignition." },
      { title: "Inducer Fan Noise or Blower Failure", desc: "Squealing bearings or failed motor capacitors prevent proper exhaust drafting or warm air circulation." },
      { title: "Yellow Burner Flame", desc: "A yellow or flickering burner flame instead of a crisp blue flame indicates incomplete combustion requiring furnace repair." },
      { title: "Furnace Lockout Code", desc: "Modern furnaces trip safety lockout modes when pressure switches or temperature limit switches fail to close." }
    ]
  },
  "furnace-installation": {
    name: "Furnace Installation",
    slug: "furnace-installation",
    actionWord: "install",
    category: "heating",
    tagline: "Precision gas and electric furnace replacement built for long-lasting winter comfort and peak energy efficiency.",
    primaryFocus: "Sizing and installing modern high-AFUE furnaces and electric air handlers with optimal venting and safety controls.",
    processSteps: [
      { title: "Heating Capacity Assessment", desc: "We perform precise BTUH heating load calculations based on home square footage and insulation quality." },
      { title: "Venting & Fuel Line Inspection", desc: "We inspect gas piping, electrical service, and flue pipe routing to ensure complete code compliance." },
      { title: "Seamless Equipment Installation", desc: "Our technicians set the unit, seal duct plenums, wire control circuits, and hook up gas or electric service." },
      { title: "Full Safety Commissioning", desc: "We measure gas manifold pressure, verify draft pressure, check temperature rise, and test CO levels." }
    ],
    problemTemplates: [
      { title: "Cracked Heat Exchanger Hazard", desc: "A cracked furnace heat exchanger presents a critical carbon monoxide risk and requires immediate replacement." },
      { title: "Outdated Low-AFUE Unit", desc: "Replacing a 20+ year old 60% AFUE furnace with a modern 90%+ unit slashes winter heating fuel consumption." },
      { title: "Frequent Winter Breakdown History", desc: "Inconsistent winter heat and repeated service calls mean unit replacement will restore peace of mind." },
      { title: "Home Renovation Heating Expansion", desc: "Adding square footage requires updating furnace capacity to maintain even whole-home warmth." }
    ]
  },
  "hvac-repair": {
    name: "HVAC Repair",
    slug: "hvac-repair",
    actionWord: "repair",
    category: "general",
    tagline: "Complete heating and air conditioning repair for all major brands, models, and system types.",
    primaryFocus: "Comprehensive troubleshooting across all electrical, mechanical, airflow, and refrigerant systems for total year-round comfort.",
    processSteps: [
      { title: "Total System Diagnostics", desc: "We check indoor and outdoor electrical components, fan motors, coils, duct static pressure, and thermostat signals." },
      { title: "Clear Technical Diagnosis", desc: "We break down system issues in plain language and provide upfront pricing on all repair options." },
      { title: "Professional Repair Execution", desc: "Our truck-stocked inventory enables fast single-visit repairs for most common HVAC component failures." },
      { title: "System Calibration", desc: "We test cycle length, air balance, and thermostat response to ensure smooth, efficient operation." }
    ],
    problemTemplates: [
      { title: "Thermostat Unresponsive to Setpoint", desc: "When room temperature does not match setpoint, control wiring, relays, or internal sensors may be failing." },
      { title: "Loud Buzzing, Grinding, or Rattling", desc: "Unusual HVAC sounds point to loose fan blades, failing motor bearings, worn contactor coils, or compressor chattering." },
      { title: "Weak Airflow From Supply Registers", desc: "Restricted return vents, collapsing ductwork, dirty blower wheels, or clogged filters strangle system airflow." },
      { title: "Hot and Cold Spots Across Rooms", desc: "Imbalanced static pressure, leaking duct joints, or miscalibrated dampers disrupt even temperature distribution." }
    ]
  },
  "heat-pump-service": {
    name: "Heat Pump Service",
    slug: "heat-pump-service",
    actionWord: "service",
    category: "cooling",
    tagline: "Expert heat pump repair, heat pump troubleshooting, maintenance, and replacement for year-round comfort.",
    primaryFocus: "Heat pump troubleshooting, reversing valve replacement, defrost board logic, and auxiliary heat strip repair.",
    processSteps: [
      { title: "Heat Pump Troubleshooting & Dual-Mode Testing", desc: "We perform heat pump troubleshooting, testing reversing valve operation, defrost control board logic, and auxiliary heat strip engagement." },
      { title: "Refrigerant & Coil Analysis", desc: "We check subcooling/superheat in both heating and cooling modes and clean variable-speed coils." },
      { title: "Component Calibration", desc: "We calibrate outdoor ambient sensors, expansion valves, and blower speed settings." },
      { title: "System Performance Verification", desc: "We measure heating and cooling air drop/rise to confirm peak COP (Coefficient of Performance)." }
    ],
    problemTemplates: [
      { title: "Heat Pump Stuck in Cooling or Heating Mode", desc: "A faulty reversing valve or solenoid coil prevents the heat pump from switching between seasons, requiring heat pump troubleshooting." },
      { title: "Outdoor Unit Icing Up in Winter", desc: "Defrost control board failure or low refrigerant causes ice build-up on the outdoor coil during cold mornings." },
      { title: "High Auxiliary Heat Electric Usage", desc: "When heat pumps rely too heavily on heat strips instead of compressor heat, power bills jump dramatically." },
      { title: "Short Cycling in Mild Weather", desc: "Improper sensor calibration or variable-speed drive faults cause rapid cycling during spring and fall." }
    ]
  },
  "hvac-maintenance": {
    name: "HVAC Maintenance",
    slug: "hvac-maintenance",
    actionWord: "tune up",
    category: "general",
    tagline: "Seasonal AC maintenance, AC tune-ups, and HVAC preventive maintenance for lower energy bills and fewer repairs.",
    primaryFocus: "Seasonal AC maintenance, thorough AC tune-up services, HVAC preventive maintenance, coil cleaning, and drain flushing.",
    processSteps: [
      { title: "AC Tune-Up & Multi-Point Inspection", desc: "We perform a complete AC tune-up, testing capacitors, contactors, fan motors, wiring connections, coils, drain lines, and air filters." },
      { title: "Deep Cleaning & Seasonal AC Maintenance", desc: "We flush condensate lines with algaecide treatment, wash outdoor coil fins, and clear electrical cabinets as part of seasonal AC maintenance." },
      { title: "Electrical & Mechanical Calibration", desc: "We measure motor amp draws, check capacitor microfarad ratings, and tighten electrical lugs during HVAC preventive maintenance." },
      { title: "Detailed System Health Report", desc: "We provide a clear summary of system health, identifying minor wear items before they turn into costly summer breakdowns." }
    ],
    problemTemplates: [
      { title: "Sudden Summer Breakdown Prevention", desc: "90% of emergency summer AC failures stem from neglected maintenance like dirty coils or weak capacitors." },
      { title: "Gradual Loss of Cooling Power", desc: "Dust-covered evaporator coils reduce heat transfer efficiency, forcing the unit to run 30% longer without regular AC tune-ups." },
      { title: "Clogged Drain Line Spills", desc: "Algae growth in Florida drain lines causes costly ceiling and floor water damage if not regularly flushed during HVAC preventive maintenance." },
      { title: "Premature Equipment Failure", desc: "Seasonal AC maintenance extends average HVAC lifespan from 8-10 years to 14+ years in Florida conditions." }
    ]
  },
  "thermostat-service": {
    name: "Thermostat Service",
    slug: "thermostat-service",
    actionWord: "service",
    category: "comfort",
    tagline: "Professional smart thermostat installation, replacement, and troubleshooting for precise climate control.",
    primaryFocus: "Installing and configuring Wi-Fi smart thermostats (Nest, Ecobee, Honeywell), setting C-wires, and matching system multi-stage controls.",
    processSteps: [
      { title: "Wiring & Compatibility Check", desc: "We check R, C, W, Y, G, and O/B terminal wiring to confirm 24V transformer and multi-stage support." },
      { title: "Precision Mounting & Wiring", desc: "We connect new thermostat baseplates, add wire relays or transformer adapters if needed, and level the display." },
      { title: "Smart System Programming", desc: "We program customized heating/cooling schedules, geofencing, humidity thresholds, and Wi-Fi mobile apps." },
      { title: "System Test Cycle", desc: "We test heating, stage 1 cooling, stage 2 cooling, fan control, and emergency heat modes." }
    ],
    problemTemplates: [
      { title: "Blank Thermostat Screen", desc: "A blank screen can result from blown 24V transformer fuses, tripped float switches, or loose baseplate contacts." },
      { title: "Temperature Off By 3-5 Degrees", desc: "Uncalibrated thermistors or draft holes behind the wallplate skew temperature readings and waste energy." },
      { title: "Heat Pump Running Heat Instead of Cool", desc: "Incorrect O/B reversing valve programming causes the system to heat when cooling is called for." },
      { title: "Frequent Wi-Fi Disconnections", desc: "Smart thermostats installed without a dedicated C-wire suffer power dropouts and connectivity loss." }
    ]
  },
  "indoor-air-quality": {
    name: "Indoor Air Quality",
    slug: "indoor-air-quality",
    actionWord: "improve",
    category: "comfort",
    tagline: "Whole-home indoor air quality solutions, filtration, and moisture control for a cleaner, healthier Florida home.",
    primaryFocus: "Installing UV air purifiers, high-MERV media filters, whole-home dehumidifiers, and clearing airborne contaminants.",
    processSteps: [
      { title: "Air Quality Assessment", desc: "We evaluate indoor humidity levels, dust accumulation, duct cleanliness, and air filter restriction." },
      { title: "Custom Solution Design", desc: "We recommend whole-house dehumidifiers, UV-C germicidal lights, or high-efficiency MERV 11-13 air cleaners." },
      { title: "Seamless Integration", desc: "Our technicians integrate equipment directly into your central air handler and duct system." },
      { title: "IAQ Testing & Verification", desc: "We test airflow pressure and verify moisture extraction performance to ensure cleaner air in every room." }
    ],
    problemTemplates: [
      { title: "Musty Mold Odors From Vents", desc: "Excessive indoor humidity fosters mildew growth on evaporator coils and inside duct insulation ('dirty sock syndrome')." },
      { title: "Persistent Allergy & Asthma Symptoms", desc: "Florida pollen, dust mites, and pet dander circulate constantly without high-performance air filtration." },
      { title: "High Indoor Humidity Above 60%", desc: "When the AC alone cannot pull out enough moisture during humid Florida days, indoor air feels sticky and uncomfortable." },
      { title: "Excessive Dust on Furniture", desc: "Rapid dust accumulation on surfaces indicates duct leaks pulling unconditioned attic air or poor filtration." }
    ]
  }
};

export function getContent(areaSlug: string, serviceSlug: string) {
  const loc = LOCATIONS[areaSlug] || LOCATIONS["belleview"];
  const srv = SERVICES[serviceSlug] || SERVICES["ac-repair"];

  const title = `${srv.name} in ${loc.name}, FL | AHS Heating & Air`;
  const metaDescription = `Need expert ${srv.name.toLowerCase()} in ${loc.name}, FL? AHS Heating & Air provides fast ${srv.name.toLowerCase()}, diagnostic troubleshooting, and local HVAC solutions near ${loc.landmarks.split(',')[0]}. Call (352) 847-1377.`;

  // Deeply localized intro paragraph 1 referencing landmarks and exact home construction
  const introParagraph1 = `When you need reliable ${srv.name.toLowerCase()} in ${loc.name}, Florida, having a trustworthy local HVAC contractor makes all the difference. ${loc.environment} Homeowners residing near ${loc.landmarks} often experience unique heating and cooling demands due to local microclimates. Whether your home is a ${loc.homeTypes.toLowerCase()}, maintaining precise indoor temperature and humidity control is critical throughout the year in ${loc.county}.`;

  // Deeply localized intro paragraph 2 addressing specific service focus and technical expertise
  const introParagraph2 = `AHS Heating & Air brings over 28 years of hands-on Florida HVAC expertise directly to your doorstep in ${loc.name} (serving zip codes ${loc.zipCodes.join(", ")}). Our licensed technicians specialize in ${srv.primaryFocus.toLowerCase()} We do not rely on high-pressure sales tactics or generic template diagnoses; instead, we perform thorough system testing, explain our findings in clear language, and deliver clean, long-lasting ${srv.actionWord} solutions that keep your home comfortable in every season.`;

  const localInfoTitle = `${srv.name} Tailored for ${loc.name} Microclimates & Architecture`;
  const localInfoText = `Properties across ${loc.name} encounter distinct environmental pressures that impact HVAC longevity, including ${loc.climateFactors.toLowerCase()} Our team designs our ${srv.name.toLowerCase()} procedures to specifically overcome these regional challenges.`;

  const challengesList = loc.commonHVACChallenges.map(challenge => ({
    title: challenge,
    desc: `Our specialized ${srv.name.toLowerCase()} protocol in ${loc.name} directly addresses ${challenge.toLowerCase()}, protecting your compressor, heat exchanger, and indoor air quality against local environmental wear.`
  }));

  const faqs = [
    {
      q: `How quickly can AHS Heating & Air arrive for ${srv.name.toLowerCase()} in ${loc.name}?`,
      a: `We provide rapid local dispatch to all neighborhoods in ${loc.name}, including properties near ${loc.landmarks}. Because our service vans are stationed throughout Marion County with full diagnostic tools and truck-stocked OEM parts, we strive to resolve urgent ${srv.name.toLowerCase()} requests on the same day.`
    },
    {
      q: `Why do homes in ${loc.name} frequently experience ${srv.name.toLowerCase()} issues?`,
      a: `Homes in ${loc.name} face persistent environmental challenges such as ${loc.climateFactors.toLowerCase()} These conditions accelerate wear on electrical components, freeze coils, clog condensate lines, and strain heat pump reversing valves. Regular professional ${srv.name.toLowerCase()} prevents minor issues from causing major system breakdowns.`
    },
    {
      q: `Are your technicians licensed and familiar with ${loc.name} building codes and home styles?`,
      a: `Yes! AHS Heating & Air is a state-licensed, bonded, and insured Florida HVAC contractor (CAC1817865) with over 28 years of experience. We are intimately familiar with ${loc.name}'s specific home styles—from ${loc.homeTypes.toLowerCase()}—ensuring every installation, repair, and maintenance job adheres strictly to Marion County code standards.`
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${srv.name} in ${loc.name}, FL`,
    "serviceType": srv.name,
    "provider": {
      "@type": "HVACBusiness",
      "name": "AHS Heating & Air",
      "telephone": "+1-352-847-1377",
      "url": "https://ahsheatingair.com/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7 Hemlock Terrace Ln",
        "addressLocality": "Ocala",
        "addressRegion": "FL",
        "postalCode": "34472",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": loc.name,
      "addressRegion": "FL"
    },
    "description": metaDescription
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ahsheatingair.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${srv.name} in Ocala`,
        "item": `https://ahsheatingair.com/${srv.slug}-ocala`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${srv.name} in ${loc.name}`,
        "item": `https://ahsheatingair.com/${srv.slug}-${loc.slug}`
      }
    ]
  };

  return {
    title,
    metaDescription,
    location: loc,
    service: srv,
    introParagraph1,
    introParagraph2,
    localInfoTitle,
    localInfoText,
    challengesList,
    faqs,
    serviceSchema,
    faqSchema,
    breadcrumbSchema
  };
}

