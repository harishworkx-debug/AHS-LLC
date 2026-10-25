import { SITE_CONFIG } from "../siteConfig";

export interface LocationInfo {
  name: string;
  slug: string;
  county: string;
  zipCodes: string[];
  environment: string;
  homeTypes: string;
  climateFactors: string;
  landmarks: string;
  commonHVACChallenges: string[];
}

export interface ServiceInfo {
  name: string;
  slug: string;
  actionWord: string;
  category: "cooling" | "heating" | "general" | "comfort";
  tagline: string;
  primaryFocus: string;
  sidebarPromise: string;
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
    environment: "Established residential community in Northwest Ocala located along the NW 27th Avenue and US-27 corridors, minutes from the World Equestrian Center.",
    homeTypes: "Established single-family homes, classic brick ranches, and country residential properties.",
    climateFactors: "Extended Florida summer cooling loads, high ambient humidity, afternoon thunderstorm electrical surges, and seasonal oak tree pollen.",
    landmarks: "NW 27th Ave corridor, US-27, and the World Equestrian Center area",
    commonHVACChallenges: [
      "Heavy oak pollen and falling leaf debris settling inside outdoor condenser coils",
      "Capacitor and contactor failures caused by frequent thunderstorm voltage spikes",
      "Condensate drain line algae clogs from continuous Florida summer humidity",
      "Aging attic ductwork connections leaking cooled air into unconditioned spaces"
    ]
  }
};

export const SERVICES: Record<string, ServiceInfo> = {
  "ac-repair": {
    name: "AC Repair",
    slug: "ac-repair",
    actionWord: "repair",
    category: "cooling",
    tagline: "Fast, honest air conditioner repair and diagnostic troubleshooting when your AC blows warm air, freezes up, or refuses to start.",
    primaryFocus: "Accurate electrical diagnostics, capacitor and fan motor replacements, refrigerant leak detection, frozen coil troubleshooting, and restoring reliable cooling.",
    sidebarPromise: "Contact AHS Heating & Air for honest diagnostic troubleshooting, upfront pricing, and durable air conditioner repairs.",
    processSteps: [
      { title: "Complete Electrical & Mechanical Diagnostics", desc: "Our technician inspects contactors, tests dual-run capacitors, measures compressor amp draw, and tests safety float switches." },
      { title: "Refrigerant & Airflow Performance Evaluation", desc: "We evaluate static pressure, check superheat and subcooling levels, and identify refrigerant leaks or restricted air filters." },
      { title: "Clear Diagnosis & Upfront Repair Options", desc: "We explain exactly what component failed, why it occurred, and provide a clear, flat-rate repair quote before performing any work." },
      { title: "Precision Repair & System Verification", desc: "We install OEM-grade replacement parts, clear condensate drain lines, and measure supply-to-return temperature split to confirm steady cooling." }
    ],
    problemTemplates: [
      { title: "AC Blowing Warm or Tepid Air", desc: "When your outdoor unit runs but vents blow warm air, a failed capacitor, seized fan motor, or low refrigerant is usually the culprit." },
      { title: "Frozen Evaporator Coils & Iced Lines", desc: "Restricted airflow from clogged filters, a failing blower motor, or refrigerant leaks can cause coils to ice up and halt cooling." },
      { title: "Repeated Breaker Tripping or Short Cycling", desc: "An AC system that shuts off after running for only 2-3 minutes indicates electrical overheating, a failing compressor, or high head pressure." },
      { title: "Water Backing Up in Drain Pan", desc: "Florida's humid climate produces gallons of condensate daily; clogged lines cause water to trip safety float switches and shut the AC down." }
    ]
  },
  "ac-installation": {
    name: "AC Installation",
    slug: "ac-installation",
    actionWord: "install",
    category: "cooling",
    tagline: "High-efficiency AC installation and system replacement custom-sized for Central Florida homes and long-term energy savings.",
    primaryFocus: "Manual J cooling load sizing, SEER2 high-efficiency equipment selection, ductwork evaluation, and clean, code-compliant system replacement.",
    sidebarPromise: "Contact AHS Heating & Air for accurate cooling load calculations, top-brand high-efficiency systems, and clean professional AC installation.",
    processSteps: [
      { title: "Manual J Load Calculation & Sizing", desc: "We measure your home's square footage, window exposure, insulation levels, and duct configuration to determine the exact cooling capacity required." },
      { title: "Equipment & Efficiency Selection", desc: "We help you select high-efficiency split systems, variable-speed heat pumps, or packaged units matching Florida SEER2 standards and your budget." },
      { title: "Code-Compliant Professional Installation", desc: "Our licensed technicians set hurricane-rated condenser pads, braze copper linesets under nitrogen purge, and wire safety controls." },
      { title: "Airflow Balancing & Final Commissioning", desc: "We test duct static pressure, verify refrigerant charge via subcooling/superheat, and test thermostat programming for optimal dehumidification." }
    ],
    problemTemplates: [
      { title: "Equipment Over 10 to 12 Years Old", desc: "Florida AC systems operate thousands of hours annually; older systems experience severe efficiency loss and frequent costly breakdowns." },
      { title: "Rising Summer Electric Utility Bills", desc: "Older, degraded systems run continuously without reaching thermostat setpoints, wasting electricity compared to modern high-efficiency SEER2 units." },
      { title: "Major Compressor Failure or R-22 Freon Leaks", desc: "When facing major compressor burnout or leaks in phased-out R-22 systems, replacement provides dependable peace of mind." },
      { title: "Uneven Temperatures & Poor Humidity Control", desc: "Improperly sized original units leave rooms clammy and warm; properly sized equipment restores balanced whole-home comfort." }
    ]
  },
  "heating-repair": {
    name: "Heating Repair",
    slug: "heating-repair",
    actionWord: "repair",
    category: "heating",
    tagline: "Dependable heating repair for heat pumps, electric air handlers, and furnaces during sudden Central Florida winter cold snaps.",
    primaryFocus: "Rapid heating diagnostics, electric auxiliary heat strip repair, sequencer troubleshooting, thermostat heating logic, and safety limit controls.",
    sidebarPromise: "Contact AHS Heating & Air for prompt heating diagnostics, safety checks, and reliable winter warmth restoration.",
    processSteps: [
      { title: "Heating Safety & Control Inspection", desc: "We inspect electric heating sequencers, check resistance on heat strips, and test safety high-limit switches." },
      { title: "Clear Component Diagnosis", desc: "We test thermostats, relays, and emergency heat controls, explaining clearly why your system is blowing cold air." },
      { title: "Targeted Component Replacement", desc: "Faulty heat sequencers, thermal cutoffs, contactors, or reversing valve solenoids are repaired using quality parts." },
      { title: "Thermal Rise & Performance Test", desc: "We measure supply air temperature rise and verify that heating cycles engage and disengage safely." }
    ],
    problemTemplates: [
      { title: "System Blowing Cold Air in Heat Mode", desc: "Burnt-out heating strips, failed sequencers, or a heat pump reversing valve stuck in cooling mode will blow chilly air inside." },
      { title: "Unusual Burning Smell or Persistent Rattling", desc: "While minor seasonal dust burn-off is normal upon first startup, persistent burning odors or electrical arcing noises demand immediate service." },
      { title: "Heater Will Not Turn On or Trip Breaker", desc: "Faulty 24-volt transformers, corroded wiring, or shorted heating elements trip electrical breakers when heating is demanded." },
      { title: "Constant Auxiliary Heat Running", desc: "When a system runs on expensive auxiliary heat strips continuously instead of using the efficient heat pump compressor, power bills skyrocket." }
    ]
  },
  "furnace-repair": {
    name: "Furnace Repair",
    slug: "furnace-repair",
    actionWord: "repair",
    category: "heating",
    tagline: "Expert gas and electric furnace repair to guarantee safe, reliable winter heating.",
    primaryFocus: "Fixing gas valves, igniters, flame sensors, blower motors, and furnace repair safety controls.",
    sidebarPromise: "Contact AHS Heating & Air for certified gas and electric furnace troubleshooting, flame sensor repairs, and safe winter heating.",
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
    sidebarPromise: "Contact AHS Heating & Air for proper BTUH heating capacity sizing, flue venting safety compliance, and energy-efficient furnace replacement.",
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
    sidebarPromise: "Contact AHS Heating & Air for total heating and cooling diagnostics, upfront options, and dependable system repair.",
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
    tagline: "Specialized heat pump repair, reversing valve diagnostics, and seasonal heating/cooling maintenance across Central Florida.",
    primaryFocus: "Dual-mode operation testing, reversing valve solenoid replacement, defrost control board logic, refrigerant charge balancing, and auxiliary heat strip troubleshooting.",
    sidebarPromise: "Contact AHS Heating & Air for expert heat pump diagnostics, reversing valve service, and year-round energy efficiency.",
    processSteps: [
      { title: "Dual-Mode Heating & Cooling Evaluation", desc: "We test reversing valve switching between heating and cooling cycles, ensuring proper refrigerant flow and temperature split." },
      { title: "Defrost Control & Sensor Testing", desc: "We verify defrost cycle timing, test outdoor ambient temperature sensors, and check that ice melt functions activate correctly." },
      { title: "Refrigerant Charge & Coil Inspection", desc: "We measure subcooling and superheat in both operational modes to verify that variable-speed compressors operate at factory specifications." },
      { title: "Auxiliary Heat & Thermostat Calibration", desc: "We test emergency heat sequencers and calibrate digital thermostat stage settings to avoid unnecessary auxiliary power consumption." }
    ],
    problemTemplates: [
      { title: "System Stuck in Cooling or Heating Mode", desc: "A stuck reversing valve slider or burnt-out 24-volt solenoid coil prevents heat pumps from switching between summer cooling and winter warmth." },
      { title: "Outdoor Condenser Icing Over in Winter", desc: "Defective defrost control boards, failed ambient sensors, or low refrigerant allow thick frost and ice to blanket outdoor coils on cold mornings." },
      { title: "Excessive Electric Bills from Aux Heat", desc: "If the auxiliary heat strips engage continuously instead of relying on the efficient heat pump compressor, heating bills can double or triple." },
      { title: "Rapid Short-Cycling in Transitional Weather", desc: "Miscalibrated thermistors, expansion valve faults, or restricted return airflow cause units to start and stop frequently during mild seasons." }
    ]
  },
  "hvac-maintenance": {
    name: "HVAC Maintenance",
    slug: "hvac-maintenance",
    actionWord: "tune up",
    category: "general",
    tagline: "Comprehensive 24-point seasonal AC tune-ups and preventative care designed to stop breakdowns before they happen.",
    primaryFocus: "Pre-season system inspections, precision electrical testing, outdoor coil washing, algaecide condensate drain flushing, and airflow optimization.",
    sidebarPromise: "Contact AHS Heating & Air for comprehensive multi-point AC tune-ups, algaecide drain flushing, and seasonal preventative care.",
    processSteps: [
      { title: "24-Point Mechanical & Electrical Inspection", desc: "We test capacitor microfarad ratings against manufacturer tolerances, inspect contactor points for pitting, and check motor run amperages." },
      { title: "Outdoor Condenser Coil Cleaning", desc: "We rinse heavy Florida pollen, dirt, and sand out of condenser fins to restore maximum heat transfer and reduce compressor strain." },
      { title: "Algaecide Condensate Drain Flush", desc: "We clear primary drain lines, treat drain pans with EPA-approved algaecide tablets, and verify float switch safety shut-offs." },
      { title: "Comprehensive System Performance Audit", desc: "We measure supply/return air temperature split, inspect duct static pressure, and deliver a transparent health report on your equipment." }
    ],
    problemTemplates: [
      { title: "Preventing Unexpected Summer Breakdowns", desc: "Over 85% of mid-summer cooling failures stem from weak capacitors, dirty coils, or clogged drain lines that could have been caught during a tune-up." },
      { title: "Restoring Lost Efficiency & Airflow", desc: "Dirty evaporator and condenser coils force cooling systems to run 20–30% longer to achieve the same temperature, driving up electric bills." },
      { title: "Protecting Against Drain Pan Overflows", desc: "Florida's intense humidity produces gallons of water daily; unmaintained drain lines breed algae slime that causes ceiling and flooring water damage." },
      { title: "Extending Equipment Operating Lifespan", desc: "Regular seasonal maintenance prevents premature compressor burnout, helping Florida systems last 12–15 years rather than failing at 8–10 years." }
    ]
  },
  "thermostat-service": {
    name: "Thermostat Service",
    slug: "thermostat-service",
    actionWord: "service",
    category: "comfort",
    tagline: "Professional smart thermostat installation, replacement, and troubleshooting for precise climate control.",
    primaryFocus: "Installing and configuring Wi-Fi smart thermostats (Nest, Ecobee, Honeywell), setting C-wires, and matching system multi-stage controls.",
    sidebarPromise: "Contact AHS Heating & Air for professional Wi-Fi smart thermostat installation, multi-stage wiring, and seamless digital control setup.",
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
    sidebarPromise: "Contact AHS Heating & Air for whole-home dehumidification, hospital-grade air filtration, and cleaner indoor air solutions.",
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

  const primaryLandmark = loc.landmarks.split(',')[0].trim();
  const title = `${srv.name} in ${loc.name}, FL | AHS, LLC.`;

  let metaDescription = "";
  if (serviceSlug === "ac-repair") {
    metaDescription = `Is your air conditioner blowing warm air or struggling to cool in ${loc.name}, FL? Contact AHS, LLC. for AC troubleshooting and repair near ${primaryLandmark}.`;
  } else if (serviceSlug === "ac-installation") {
    metaDescription = `Planning an AC replacement or central air installation in ${loc.name}, FL? AHS, LLC. provides custom SEER2 sizing, heat pump options, and upfront pricing.`;
  } else if (serviceSlug === "heat-pump-service") {
    metaDescription = `Heat pump stuck in cooling mode or icing up in ${loc.name}, FL? AHS, LLC. specializes in reversing valve diagnostics and dual-mode heating/cooling care.`;
  } else if (serviceSlug === "hvac-maintenance") {
    metaDescription = `Prevent summer cooling breakdowns in ${loc.name}, FL. Contact AHS, LLC. for 24-point seasonal AC tune-ups, coil cleaning, and algaecide drain flushing.`;
  } else if (serviceSlug === "furnace-repair") {
    metaDescription = `Furnace not heating or clicking off in ${loc.name}, FL? Contact AHS, LLC. for safe gas and electric furnace troubleshooting, igniters, and safety checks.`;
  } else if (serviceSlug === "furnace-installation") {
    metaDescription = `Looking for reliable furnace replacement in ${loc.name}, FL? AHS, LLC. sizes and installs high-efficiency gas and electric heating equipment.`;
  } else if (serviceSlug === "thermostat-service") {
    metaDescription = `Need smart thermostat replacement or C-wire wiring in ${loc.name}, FL? AHS, LLC. installs and configures digital thermostats for precise temperature control.`;
  } else if (serviceSlug === "indoor-air-quality") {
    metaDescription = `Reduce indoor humidity and airborne allergens in ${loc.name}, FL. AHS, LLC. installs whole-home dehumidifiers, UV purifiers, and high-efficiency filtration.`;
  } else {
    metaDescription = `Looking for dependable ${srv.name.toLowerCase()} in ${loc.name}, FL? Contact AHS, LLC. for honest diagnostic troubleshooting and upfront options near ${primaryLandmark}.`;
  }

  // Natural, grammatically sound localized introduction
  const introParagraph1 = `When your heating or cooling system runs into trouble in ${loc.name}, Florida, having a dependable, experienced contractor makes all the difference. ${loc.environment} For residents living near ${loc.landmarks}, whether in ${loc.homeTypes.toLowerCase().replace(/\.$/, "")}, maintaining dependable indoor comfort and humidity control is essential throughout the year in ${loc.county}.`;

  // Transparent diagnostic approach with verified license and technician integrity
  const introParagraph2 = `AHS Heating & Air brings over 28 years of hands-on Florida trade experience directly to your neighborhood in ${loc.name} (serving zip codes ${loc.zipCodes.join(", ")}). Our state-licensed technicians (CAC1817865) focus on ${srv.primaryFocus.toLowerCase().replace(/\.$/, "")}. We believe in honest diagnostics: we test your equipment thoroughly with calibrated meters, explain what broke in plain language, and present straightforward repair options before performing any work—never pressuring you into unnecessary replacements.`;

  const localInfoTitle = `${srv.name} Considerations for ${loc.name} Homes`;
  const localInfoText = `Properties across ${loc.name} encounter persistent regional conditions that impact HVAC efficiency and equipment lifespan, including ${loc.climateFactors.toLowerCase().replace(/\.$/, "")}. Our service procedures are tailored to inspect and protect against these specific wear factors.`;

  const challengesList = loc.commonHVACChallenges.map(challenge => ({
    title: challenge,
    desc: `During our ${srv.name.toLowerCase()} service in ${loc.name}, our technicians carefully check for ${challenge.toLowerCase()}, protecting your compressor, fan motors, and electrical controls from premature Florida climate wear.`
  }));

  const faqs = [
    {
      q: `How quickly can AHS Heating & Air respond for ${srv.name.toLowerCase()} in ${loc.name}?`,
      a: `We provide responsive local dispatch across ${loc.name} and surrounding Marion County neighborhoods, including properties near ${loc.landmarks}. Our service trucks carry diagnostic tools and universal OEM parts—such as dual-run capacitors, contactors, and fan motors—allowing us to resolve most urgent cooling and heating calls on the initial visit.`
    },
    {
      q: `How do your technicians diagnose why my system needs ${srv.name.toLowerCase()}?`,
      a: `Rather than guessing or pushing costly replacements, our licensed technicians follow a systematic diagnostic process. We test electrical capacitors and contactors, measure compressor operating amperage, evaluate refrigerant pressures (superheat and subcooling), and check air handler airflow and drain lines to identify the exact root problem.`
    },
    {
      q: `How do I know whether to repair my system or invest in a new installation?`,
      a: `If your system is under 10 years old and has experienced a routine electrical or mechanical failure (such as a bad capacitor, motor, or contactor), a targeted repair is almost always the smart choice. If your unit is over 10–12 years old, uses phased-out R-22 refrigerant, or faces a major compressor burnout, our technician will provide an honest comparison of repair costs versus the energy savings of a modern SEER2 replacement.`
    },
    {
      q: `Is AHS Heating & Air licensed and insured to work in ${loc.name}?`,
      a: `Yes. AHS Heating & Air is a fully state-certified Florida HVAC contractor (License #CAC1817865), bonded, and insured. With more than 28 years serving Ocala and Marion County, all our repairs, replacements, and maintenance services adhere strictly to Florida Building Code standards.`
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${srv.name} in ${loc.name}, FL`,
    "serviceType": srv.name,
    "provider": {
      "@type": "HVACBusiness",
      "name": SITE_CONFIG.brandName,
      "legalName": SITE_CONFIG.legalName,
      "telephone": "+13528471377",
      "url": `${SITE_CONFIG.canonicalDomain}/`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.address.street,
        "addressLocality": SITE_CONFIG.address.city,
        "addressRegion": SITE_CONFIG.address.state,
        "postalCode": SITE_CONFIG.address.zip,
        "addressCountry": SITE_CONFIG.address.country
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
        "item": `${SITE_CONFIG.canonicalDomain}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${srv.name} in Ocala`,
        "item": `${SITE_CONFIG.canonicalDomain}/${srv.slug}-ocala`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${srv.name} in ${loc.name}`,
        "item": `${SITE_CONFIG.canonicalDomain}/${srv.slug}-${loc.slug}`
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

export function getOcalaServiceContent(serviceSlug: string) {
  const srv = SERVICES[serviceSlug] || SERVICES["ac-repair"];
  const title = `${srv.name} in Ocala, FL | AHS Heating & Air`;
  const metaDescription = `Need expert ${srv.name.toLowerCase()} in Ocala, FL? AHS Heating & Air provides licensed ${srv.name.toLowerCase()}, upfront pricing, and fast local HVAC service. Call ${SITE_CONFIG.activeDisplayPhone}.`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${srv.name} in Ocala, FL`,
    "serviceType": srv.name,
    "provider": {
      "@type": "HVACBusiness",
      "name": SITE_CONFIG.brandName,
      "legalName": SITE_CONFIG.legalName,
      "telephone": "+13528471377",
      "url": `${SITE_CONFIG.canonicalDomain}/`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.address.street,
        "addressLocality": SITE_CONFIG.address.city,
        "addressRegion": SITE_CONFIG.address.state,
        "postalCode": SITE_CONFIG.address.zip,
        "addressCountry": SITE_CONFIG.address.country
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Ocala",
      "addressRegion": "FL"
    },
    "description": metaDescription
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_CONFIG.canonicalDomain}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${SITE_CONFIG.canonicalDomain}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${srv.name} in Ocala`,
        "item": `${SITE_CONFIG.canonicalDomain}/${srv.slug}-ocala`
      }
    ]
  };

  return {
    srv,
    title,
    metaDescription,
    serviceSchema,
    breadcrumbSchema
  };
}

