import fs from 'fs';
import path from 'path';

const outDir = path.resolve('./src/pages/locations');

const neighborhoods = [
  // 83406
  {
    slug: 'country-club-hills',
    name: 'Country Club Hills',
    zip: '83406',
    headline: 'Water Heater Repair & High-Capacity Installation in Country Club Hills',
    lead: 'Country Club Hills stands as one of the premier hillside residential communities in Idaho Falls, overlooking the valley with expansive multistory residences, multiple full bathrooms, and finished daylight basements. Delivering dependable hot water to large custom households requires properly balanced system sizing, high-recovery heating, and elevation pressure regulation. Idaho Falls Water Heater Pros delivers prompt, expert water heater repair, tankless conversions, and replacement throughout Country Club Hills with 24/7 on-call dispatch.',
    housingStyle: 'Expansive custom executive homes, multi-level layouts, finished daylight basements, and luxury master suites with soaking tubs constructed primarily from the 1980s through 2010s.',
    streets: ['Country Club Drive', 'Fairway Drive', 'Eagle Drive', 'Sunnyside Road Corridor', 'Pinehurst Lane'],
    waterContext: 'Receives municipal water supply pressurized for hillside elevation changes, presenting dynamic static water pressures between 75 and 95 PSI alongside Eastern Snake River Plain Aquifer mineral hardness of 14.1 GPG.',
    challenge1Title: 'High Elevation Static Pressure Surges and Expansion Stress',
    challenge1Desc: 'Due to the elevation rise of Country Club Hills, municipal booster pumps maintain high baseline pressure. When water heaters cycle without properly calibrated thermal expansion tanks, internal tank pressures can spike above 120 PSI, causing temperature and pressure (T&P) relief valves to weep continuously and stressing tank welds.',
    challenge2Title: 'High-Demand Simultaneous Hot Water Starvation',
    challenge2Desc: 'Homes featuring 4 to 6 bathrooms, multi-head walk-in showers, and garden soaking tubs frequently overwhelm standard 50-gallon residential water heaters during morning routines. We diagnose recovery rates, install tandem high-efficiency tankless arrays, or upgrade to 75-gallon commercial-grade residential units.',
    challenge3Title: 'Recirculation Loop Scale Acceleration',
    challenge3Desc: 'Many Country Club Hills estates incorporate dedicated hot water recirculation loops for instant hot water. Because water continuously circulates through copper lines, calcium carbonate precipitates out rapidly inside the heat exchanger or tank, requiring specialized descaling and scale-inhibiting filters.',
    tableHeaders: ['System Type', 'Standard 50-Gal Tank', 'Dual Tankless Array', '75-Gal High-Recovery Gas'],
    tableRows: [
      ['Adequacy for 4+ Baths', 'Struggles during peak usage', 'Continuous, limitless flow', 'High initial draw capacity'],
      ['Basement Footprint', 'Moderate floor space', 'Zero floor space (wall mounted)', 'Large floor footprint'],
      ['Recirculation Compatibility', 'Limited by tank volume', 'Built-in intelligent pump', 'Requires external timer pump'],
      ['Lifespan in 83406 Water', '8 to 10 years with anode check', '18 to 20 years with annual flush', '10 to 12 years with maintenance']
    ],
    caseTitle: 'Resolving Morning Hot Water Depletion on Fairway Drive',
    caseDesc: 'A family of six on Fairway Drive experienced cold showers every morning despite their five-year-old 50-gallon gas water heater being in operating condition. Our technician calculated total fixture draw and peak-hour demand, discovering the household required 88 gallons of first-hour rating. We converted the property to a Navien NPE-240A2 condensing tankless system with a dedicated recirculation line. The family now enjoys uninterrupted hot water across all three floors, with zero floor footprint taken up in their finished utility room.',
    faqs: [
      {
        question: 'Why does my Country Club Hills water heater pressure relief valve drip constantly?',
        answer: 'Hillside properties in 83406 often experience municipal pressures exceeding 80 PSI. When combined with thermal expansion inside a closed system, line pressure can easily exceed the 150 PSI rating of the T&P relief valve. We install pressure-reducing valves (PRVs) and calibrated thermal expansion tanks to maintain steady 55 to 65 PSI operating pressure.'
      },
      {
        question: 'What size water heater is recommended for homes over 4,000 square feet?',
        answer: 'For homes with 4 or more bathrooms, soaking tubs, and multi-member families, a standard 40 or 50-gallon heater is undersized. We recommend either a high-recovery 75-gallon commercial-grade atmospheric or power-vent unit, or a dual-unit condensing tankless setup capable of delivering 9 to 11 gallons per minute of continuous hot water.'
      },
      {
        question: 'How often should a tankless water heater be flushed in Country Club Hills?',
        answer: 'With local water hardness around 14.1 GPG, tankless heat exchangers should be descaled with food-grade virgin citric acid flush every 12 months. This removes microscopic calcium layers before they bake onto the copper or stainless steel combustion surfaces.'
      },
      {
        question: 'Do you offer weekend and evening emergency service in 83406?',
        answer: 'Yes. Our emergency plumbing technicians are on call 24 hours a day, 7 days a week, 365 days a year throughout Country Club Hills, arriving in fully stocked vehicles prepared to diagnose or replace water heaters on the spot.'
      },
      {
        question: 'Can you relocate my water heater into a mechanical room during basement finishing?',
        answer: 'Yes. We frequently re-pipe and relocate water heaters in finished basements, ensuring code-compliant direct combustion air intake, dedicated floor drains, pan drains routed to the exterior, and emergency shutoff valves.'
      }
    ]
  },
  {
    slug: 'cedar-ridge',
    name: 'Cedar Ridge',
    zip: '83406',
    headline: 'Precision Water Heater Repair & Modern Replacements in Cedar Ridge',
    lead: 'Nestled in the picturesque eastern foothills of Idaho Falls, Cedar Ridge features sprawling contemporary custom homes, sweeping views, and advanced residential mechanical rooms. High elevation changes, sub-zero winter temperatures, and 14.1 GPG aquifer mineral content require specialized plumbing knowledge to keep hot water flowing smoothly. Idaho Falls Water Heater Pros offers prompt, licensed water heater repair, preventive maintenance, and modern energy-efficient replacements across all Cedar Ridge cul-de-sacs and avenues.',
    housingStyle: 'Modern custom-built suburban estates, architectural multi-levels, modern ramblers with expansive finished basements, high-efficiency mechanical systems, and multi-zone heating.',
    streets: ['Cedar Ridge Drive', 'Foothill Road', 'Ridge View Way', 'Skyline Drive', 'Ponderosa Court'],
    waterContext: 'High-elevation municipal water system with cold winter groundwater temperatures dropping to 38°F, requiring high BTU combustion to achieve standard 120°F shower delivery.',
    challenge1Title: 'Severe Winter Temperature Rise (Delta-T) Stress',
    challenge1Desc: 'In Cedar Ridge, winter supply water arriving from municipal reservoirs cools down to 38°F. To achieve a safe household delivery temperature of 120°F, water heaters must sustain an 82°F temperature rise. Standard undersized burners struggle to keep up, leading to extended runtimes and accelerated wear.',
    challenge2Title: 'Direct-Vent Sidewall Exhaust Freezing',
    challenge2Desc: 'Modern power-vent and tankless systems exhausting through exterior basement rim joists face intense sub-zero winter winds off the foothills. Without properly pitched concentric vent pipes and condensate freeze protection, exhaust pipes can freeze over, triggering safety lockout error codes.',
    challenge3Title: 'Multi-Level Thermal Recirculation Imbalance',
    challenge3Desc: 'With large horizontal and vertical pipe runs in Cedar Ridge homes, hot water can take several minutes to reach upstairs master bathrooms. We calibrate dedicated smart recirculation systems that provide instantaneous hot water without burning through unnecessary energy.',
    tableHeaders: ['Feature', 'Atmospheric 50-Gal Tank', 'Power-Vent 50-Gal Tank', 'Condensing Tankless Unit'],
    tableRows: [
      ['Venting Type', 'Vertical metal B-vent', 'PVC pipe through sidewall', 'Concentric PVC/polypropylene'],
      ['Winter 82°F Rise Performance', 'Moderate recovery', 'Fast recovery', 'Continuous flow (scaled GPM)'],
      ['Energy Factor (UEF)', '0.58 - 0.62', '0.67 - 0.72', '0.95 - 0.97'],
      ['Basement Ceiling Impact', 'Requires 6+ ft clearance', 'Flexible routing', 'Zero floor space required']
    ],
    caseTitle: 'Diagnosing Power-Vent Lockout During a Sub-Zero Foothills Freeze',
    caseDesc: 'During a January cold snap with winds gusting off the foothills, a Cedar Ridge homeowner woke up to no hot water and a flashing pressure switch error code on their power-vent water heater. Our emergency technician arrived within 45 minutes and identified that condensation inside the exterior PVC vent terminal had frozen solid due to an improper pipe slope. We cleared the ice, rebuilt the vent run with correct pitch back toward the condensation drain, and insulated the exterior penetration, restoring reliable heating immediately.',
    faqs: [
      {
        question: 'Why did my tankless water heater display an error code during freezing weather?',
        answer: 'Sub-zero temperatures can freeze exposed condensate drain lines or exterior vent termination points. If the system detects a blocked flue or frozen drain trap, it locks out to prevent carbon monoxide spillage. Our technicians clear blockages, insulate drains, and install internal freeze protection.'
      },
      {
        question: 'Are plumbing permits required for water heater replacement in Cedar Ridge?',
        answer: 'Yes. All water heater replacements in the 83406 area are governed by the Idaho State Plumbing Code and require a permit and inspection from the City of Idaho Falls or Bonneville County. We handle all paperwork and coordinate the final inspection on your behalf.'
      },
      {
        question: 'How does hard water impact high-efficiency water heaters in Cedar Ridge?',
        answer: 'At 14.1 GPG, calcium scale precipitates onto heating surfaces quickly. In tank models, scale forms an insulating blanket on the tank floor; in tankless units, it constricts the copper heat exchanger tubing. Annual descaling prevents efficiency loss and premature heat exchanger cracking.'
      },
      {
        question: 'Can you replace my older water heater with a larger 75-gallon tank?',
        answer: 'Yes. We assess your electrical panel or gas line capacity, mechanical room footprint, and venting clearances to safely install high-recovery 75-gallon units tailored for high-demand households.'
      },
      {
        question: 'What is the turnaround time for emergency water heater replacement in Cedar Ridge?',
        answer: 'We maintain a fully stocked warehouse and mobile trucks in Idaho Falls, allowing us to complete same-day water heater replacements in Cedar Ridge in the vast majority of emergency calls.'
      }
    ]
  },
  {
    slug: 'hidden-valley',
    name: 'Hidden Valley',
    zip: '83406',
    headline: 'Reliable Water Heater Repair & Replacement in Hidden Valley',
    lead: 'Hidden Valley offers tranquil foothill living characterized by private drives, mature landscaping, and custom multi-level family homes. Tucked along the southeastern edge of Idaho Falls, residences here depend heavily on reliable basement mechanical systems to combat bitter eastern Idaho winters. From unexpected pilot outages and sediment knocking to full tankless retrofits, Idaho Falls Water Heater Pros is the trusted neighborhood service provider for rapid, code-compliant water heater repair throughout Hidden Valley.',
    housingStyle: 'Secluded custom residences, split-level family homes, finished walk-out basements, and craftsman ranch designs built primarily throughout the 1990s and 2000s.',
    streets: ['Hidden Valley Drive', 'Valley View Court', 'Canyon Creek Road', 'Sunnyside Extension', 'Meadow Wood Way'],
    waterContext: 'Aquifer water with 14.1 grains per gallon of mineral hardness, frequently coupled with whole-home water softeners that require specialized sacrificial anode rod management.',
    challenge1Title: 'Water Softener Interaction with Sacrificial Anode Rods',
    challenge1Desc: 'Many Hidden Valley residences use ion-exchange water softeners to combat hardness. Softened water contains higher sodium ion concentrations, increasing water conductivity and causing standard magnesium anode rods to degrade up to twice as fast. Once the rod is gone, the steel tank rusts rapidly.',
    challenge2Title: 'Walkout Basement Combustion Air Depressurization',
    challenge2Desc: 'Finished walkout basements in Hidden Valley frequently seal mechanical closets away from living spaces. Without dedicated high-and-low combustion air vents to the exterior, atmospheric gas heaters suffer from oxygen deprivation, leading to yellow burner flames and soot accumulation.',
    challenge3Title: 'Sediment Buildup in Lower Heating Elements',
    challenge3Desc: 'In electric water heaters common in portions of Hidden Valley, calcified mineral debris settles around the lower 4500-watt heating element. The sediment insulates the element from the water, causing thermal runaway that burns out the element within two to three years.',
    tableHeaders: ['Anode Type', 'Standard Magnesium', 'Aluminum / Zinc Alloy', 'Powered Titanium Rod'],
    tableRows: [
      ['Service Life', '2 to 3 years in softened water', '3 to 5 years', '20+ years (non-sacrificial)'],
      ['Sulfur Odor Defense', 'Can react with bacteria', 'Reduces rotten-egg odor', 'Completely eliminates sulfur smell'],
      ['Softener Compatibility', 'Moderate (depletes rapidly)', 'Good', 'Excellent (impervious to sodium)'],
      ['Replacement Frequency', 'Routine periodic service', 'Periodic service', 'Never needs replacement']
    ],
    caseTitle: 'Eliminating Chronic Rotten-Egg Odors in a Hidden Valley Home',
    caseDesc: 'A homeowner on Valley View Court called us regarding an intense sulfur odor coming exclusively from their hot water fixtures. A newly installed water softener had reacted with the water heater’s factory magnesium anode rod, allowing sulfur-reducing bacteria to generate hydrogen sulfide gas. Our technician drained and sanitized the tank with hydrogen peroxide, removed the decaying magnesium rod, and installed a powered titanium anode rod. The foul smell vanished permanently without compromising tank corrosion defense.',
    faqs: [
      {
        question: 'Why does my hot water smell like rotten eggs in Hidden Valley?',
        answer: 'Rotten-egg smells are caused by anaerobic sulfur-reducing bacteria reacting with standard magnesium sacrificial anode rods, especially in homes with water softeners. Replacing the factory rod with a powered titanium anode rod eliminates this chemical reaction permanently.'
      },
      {
        question: 'How do I know if my water heater’s lower element has burned out?',
        answer: 'If your hot water runs lukewarm after just a few minutes of showering, the lower element has likely failed. When only the upper element operates, you only receive about one-third of the tank’s heated capacity. We test element continuity and replace burned elements on-site.'
      },
      {
        question: 'Can you install a drain pan under my water heater in a finished basement?',
        answer: 'Yes. The Idaho State Plumbing Code mandates drain pans under water heaters installed in finished basements or living areas. We install heavy-gauge aluminum or composite pans with PVC drain lines routed safely to a floor drain or exterior outlet.'
      },
      {
        question: 'Do you charge extra for emergency service on weekends in Hidden Valley?',
        answer: 'We provide flat, upfront estimates without hidden trip charges across the 83406 area. You will receive a clear, transparent quote before any work begins.'
      },
      {
        question: 'How can I extend the lifespan of my water heater in 83406?',
        answer: 'Annual tank flushes to remove calcium carbonate sediment, regular anode rod inspections, maintaining line pressure between 55 and 65 PSI, and testing the temperature and pressure relief valve annually will double the operational life of your system.'
      }
    ]
  },
  {
    slug: 'heritage-heights',
    name: 'Heritage Heights',
    zip: '83406',
    headline: 'Expert Water Heater Repair & High-Recovery Solutions in Heritage Heights',
    lead: 'Heritage Heights stands as one of eastern Idaho Falls’ established suburban neighborhoods, featuring well-maintained family properties, spacious yards, and mature residential infrastructure. Water heaters in this neighborhood endure heavy daily demand from growing families, high aquifer mineral content, and demanding seasonal temperature shifts. Idaho Falls Water Heater Pros provides comprehensive, licensed water heater diagnostics, emergency burner repair, and modern replacement across Heritage Heights with 24/7 priority service.',
    housingStyle: 'Traditional two-story suburban family residences, brick-accented split-entries, and expansive ranch homes built primarily during the late 1980s through 2000s.',
    streets: ['Heritage Drive', 'Founders Way', 'Liberty Circle', 'Constitution Way', '17th South Foothill Area'],
    waterContext: 'Supplied by municipal deep wells tapping the Eastern Snake River Plain Aquifer, delivering 14.1 GPG hard water through established city mains.',
    challenge1Title: 'Thermal Expansion Bladder Ruptures in Closed Plumbing',
    challenge1Desc: 'Most homes in Heritage Heights feature backflow-preventing check valves or pressure-reducing valves installed at the main water entry. When hot water expands inside a closed system without a functioning thermal expansion tank, pressure spikes rupture internal glass linings and cause chronic valve weeping.',
    challenge2Title: 'Atmospheric Flue Deterioration and Draft Inefficiency',
    challenge2Desc: 'Homes built in the 1990s often feature atmospheric B-vent exhaust runs that traverse cold unconditioned attics before terminating through the roof. Cold attic temperatures cool exhaust gases, causing draft sluggishness and condensation that corrodes sheet metal vent connectors.',
    challenge3Title: 'Lower Tank Calcium Crystallization and Kettle Sounds',
    challenge3Desc: 'Years of untreated 14.1 GPG municipal water creates rock-like calcium carbonate deposits at the bottom of 50-gallon tanks. Whenever burners fire, steam pockets trapped beneath the sediment bubble violently, causing disturbing rumbling and popping noises throughout the home.',
    tableHeaders: ['Diagnostic Sign', 'Probable Cause', 'Immediate Risk', 'Recommended Action'],
    tableRows: [
      ['Rumbling or popping sounds', 'Heavy calcium sediment blanket', 'Overheating tank floor & leaks', 'Professional power flush or replace'],
      ['Water leaking around top fittings', 'Corroded dielectric nipples', 'External tank shell rust', 'Replace nipples with brass fittings'],
      ['T&P valve continuously dripping', 'Failed thermal expansion tank', 'Dangerous overpressure', 'Replace expansion tank & test PRV'],
      ['Water too hot / scalding', 'Faulty thermostat or grounded element', 'Scald burns & pressure spike', 'Calibrate or replace thermostat']
    ],
    caseTitle: 'Correcting Severe Thermal Overpressure on Heritage Drive',
    caseDesc: 'A homeowner on Heritage Drive noticed their water heater pressure relief valve was discharging water into the drain bucket daily. A neighbor had suggested replacing the valve, but the dripping persisted with a new valve installed. Our technician tested the household static pressure and discovered that when the water heater cycled, line pressure jumped from 60 PSI to an alarming 140 PSI due to a completely waterlogged thermal expansion tank with a failed internal butyl bladder. We installed a heavy-duty commercial expansion tank pre-charged to 60 PSI, completely stabilizing line pressure.',
    faqs: [
      {
        question: 'Why does my water heater make a loud popping noise when heating in Heritage Heights?',
        answer: 'Popping sounds are caused by water trapped beneath thick layers of calcium carbonate sediment. As the burner heats the tank bottom, this trapped water boils instantly into steam bubbles that pop violently through the sediment crust. Power-flushing the tank clears this mineral buildup.'
      },
      {
        question: 'How do I check if my thermal expansion tank has failed?',
        answer: 'Tap the expansion tank with your knuckle. The top half should sound hollow (holding pressurized air) and the bottom half solid (holding water). If the entire tank sounds dense and heavy, or if water spurts out of the air Schrader valve when depressed, the internal bladder has ruptured.'
      },
      {
        question: 'Can you repair a gas control valve that won’t stay lit?',
        answer: 'Yes. We inspect the thermocouple, pilot orifice, thermopile, and gas valve electromagnet. If the control valve itself has failed internally, our trucks carry OEM Honeywell and White-Rodgers replacement gas valves.'
      },
      {
        question: 'Do you offer energy-efficient hybrid heat pump water heaters in 83406?',
        answer: 'Yes. Hybrid electric heat pump water heaters can reduce water heating electrical costs by up to 70%. We assess your basement ceiling clearance, room volume, and ambient temperature to determine if a hybrid unit is ideal for your home.'
      },
      {
        question: 'How quickly can Idaho Falls Water Heater Pros arrive in Heritage Heights?',
        answer: 'Our service vehicles are dispatched locally from our Chaffin Lane facility, typically arriving at Heritage Heights addresses within 30 to 60 minutes for urgent service requests.'
      }
    ]
  },
  {
    slug: 'boulder-creek-estates',
    name: 'Boulder Creek Estates',
    zip: '83406',
    headline: 'Modern Water Heater Repair & Tankless Installation in Boulder Creek Estates',
    lead: 'Boulder Creek Estates represents one of the most desirable newer master-planned developments in Ammon and eastern Idaho Falls. Featuring modern construction, PEX distribution plumbing, high-efficiency mechanical rooms, and multi-zone layouts, properties in this neighborhood demand high-performance water heating solutions. Idaho Falls Water Heater Pros delivers specialized diagnostics, condensing tankless servicing, and rapid emergency repairs throughout Boulder Creek Estates 24 hours a day.',
    housingStyle: 'Contemporary craftsman homes, modern modern farmhouses, high-efficiency new construction, multistory living spaces, and dedicated utility rooms built primarily from 2010 to present.',
    streets: ['Boulder Creek Lane', 'Cobblestone Way', 'Granite Drive', 'Canyon Rim Road', 'Sandstone Court'],
    waterContext: 'Supplied by modern municipal water mains carrying 14.1 GPG mineral hardness, paired with modern PEX plumbing systems requiring strict water temperature regulation.',
    challenge1Title: 'Direct-Vent High-Efficiency Condensing Vent Calibration',
    challenge1Desc: 'Modern homes in Boulder Creek Estates utilize 95%+ high-efficiency condensing gas water heaters venting through two-pipe PVC systems. Condensate produced by these units is highly acidic and must be routed through neutralizing filters to prevent etching concrete basement floors and PVC drains.',
    challenge2Title: 'Tankless Descaling in High-Mineral Aquifer Water',
    challenge2Desc: 'Tankless units installed in new construction pass water over compact, high-temperature heat exchangers. In 14.1 GPG water, calcium scale forms inside heat exchanger tubes within 12 to 18 months, reducing water flow rate and causing unexpected temperature fluctuations.',
    challenge3Title: 'Thermostatic Mixing Valve Calibration',
    challenge3Desc: 'To maximize hot water storage while preventing scalding, modern Boulder Creek homes often utilize thermostatic mixing valves set to store water at 140°F (killing bacteria) and blend cold water to deliver safe 120°F at fixtures. Mineral scale can seize these mechanical blending valves.',
    tableHeaders: ['System Type', 'Atmospheric Tank', 'Power-Vent Tank', 'Condensing Tankless (Navien/Rinnai)'],
    tableRows: [
      ['Energy Efficiency', 'Standard (0.60 UEF)', 'Good (0.70 UEF)', 'Exceptional (0.95+ UEF)'],
      ['Venting Route', 'Metal B-vent through roof', 'PVC out rim joist', 'Concentric PVC/polypropylene'],
      ['PEX Pipe Compatibility', 'Requires 18-inch copper flex', 'Requires 18-inch copper flex', 'Direct PEX transition with isolation'],
      ['Floor Space Required', 'Significant footprint', 'Significant footprint', 'Zero floor footprint (wall mount)']
    ],
    caseTitle: 'Restoring Flow Rate on a Scaled Tankless Unit on Cobblestone Way',
    caseDesc: 'A family living in a four-year-old home on Cobblestone Way noticed their high-end tankless water heater was shutting off whenever two showers were running simultaneously, flashing error code E016. Our certified technician diagnosed severe calcium scale constriction inside the primary copper heat exchanger. We performed a 90-minute recirculating citric acid power descale, thoroughly dissolving the mineral deposits and restoring full 8.5 GPM flow capacity without damaging the heat exchanger.',
    faqs: [
      {
        question: 'Why does my tankless water heater fluctuate between hot and cold water?',
        answer: 'This is commonly known as the "cold water sandwich" or is caused by calcium scale buildup inside the flow sensor or heat exchanger. In other cases, low-flow showerheads fail to trigger the minimum flow rate required for burner ignition. We diagnose and resolve all flow rate and scale issues.'
      },
      {
        question: 'What is a condensate neutralizer and do I need one in Boulder Creek Estates?',
        answer: 'High-efficiency condensing water heaters produce acidic water with a pH of 3 to 4. A condensate neutralizer uses calcium carbonate media to neutralize this acid before it enters your plumbing drain, protecting your pipes and city sewer infrastructure.'
      },
      {
        question: 'Can PEX plumbing connect directly to a water heater?',
        answer: 'Per the Idaho State Plumbing Code, PEX tubing cannot connect directly to a gas water heater. A minimum of 18 inches of metallic piping (copper or stainless steel flex) must be installed between the water heater nipples and the PEX distribution lines to prevent heat degradation.'
      },
      {
        question: 'How often do tankless units need maintenance in 83406?',
        answer: 'Due to Idaho Falls’ 14.1 GPG mineral hardness, tankless water heaters should be descaled annually. We also clean the cold water inlet filter, inspect exhaust terminations, and check gas pressure.'
      },
      {
        question: 'Do you provide written estimates before starting work in Boulder Creek Estates?',
        answer: 'Yes. We conduct a thorough diagnostic inspection and provide a detailed estimate for your approval before turning a single wrench.'
      }
    ]
  },
  {
    slug: 'woodruff',
    name: 'Woodruff Area',
    zip: '83406',
    headline: 'Trusted Water Heater Repair & Fast Replacement in the Woodruff Area',
    lead: 'The Woodruff corridor in eastern Idaho Falls represents a vibrant, established residential community connecting key business districts and quiet neighborhoods. Featuring solid ranch-style homes, multi-level layouts, and active family households, properties along and adjoining Woodruff Avenue require dependable, heavy-duty water heating systems. Idaho Falls Water Heater Pros delivers rapid diagnostics, reliable burner replacements, and full installation services across the entire Woodruff area 24/7.',
    housingStyle: 'Mid-century to 1980s ranch homes, traditional split-levels, and established suburban subdivisions featuring full basements and dedicated utility rooms.',
    streets: ['Woodruff Avenue', '17th Street East', '12th Street', '1st Street Corridor', 'John Adams Parkway'],
    waterContext: 'Municipal deep well supply characterized by 14.1 GPG calcium carbonate hardness, subject to seasonal temperature variations and steady municipal pressure.',
    challenge1Title: 'Aging Metal Vent Connectors and Flue Degradation',
    challenge1Desc: 'Many established homes in the Woodruff neighborhood feature galvanized or single-wall metal vent connectors that have been in place for decades. Corrosion from acidic combustion moisture can create pinholes and loose joints, allowing dangerous exhaust gases to escape into basements.',
    challenge2Title: 'Galvanized-to-Copper Dielectric Corrosion',
    challenge2Desc: 'In older Woodruff homes where original plumbing was partially updated, water heaters frequently connect to remaining galvanized iron lines without dielectric unions. Electrolytic action creates severe rust clogs and pinhole leaks at tank connections.',
    challenge3Title: 'Sediment Accumulation and Burner Overheating',
    challenge3Desc: 'Decades of hard water use without regular flushing causes heavy sediment settling. In gas units, the burner must heat through inches of rock-like scale to reach the water, overheating the bottom tank head and leading to metal fatigue and tank rupture.',
    tableHeaders: ['Issue Indicator', 'Root Cause', 'Urgency', 'Solution'],
    tableRows: [
      ['Water puddle beneath tank', 'Internal tank shell breach', 'Immediate replacement', 'New Bradford White / Rheem installation'],
      ['Pilot light repeatedly goes out', 'Faulty thermocouple / bad valve', 'Prompt repair', 'Thermocouple replacement or valve rebuild'],
      ['Slow hot water recovery', 'Lower heating element burnt out', 'Scheduled repair', 'Element replacement and tank flush'],
      ['Rust-colored hot water only', 'Failing sacrificial anode rod', 'Preventive service', 'Install powered titanium or magnesium rod']
    ],
    caseTitle: 'Replacing a Corroded Vent Connector and Water Heater on 12th Street',
    caseDesc: 'A homeowner near Woodruff Avenue and 12th Street called our dispatch desk when their 14-year-old water heater began leaking from the bottom seam. During our multi-point inspection, our technician noticed that the single-wall vent connector had rusted completely through at the chimney thimble. We removed the failing unit, installed a high-efficiency 50-gallon Bradford White atmospheric gas water heater, replaced the compromised exhaust with heavy-duty B-vent piping, and installed an expansion tank, bringing the entire installation into complete code compliance.',
    faqs: [
      {
        question: 'How do I know if my water heater is leaking from the tank or a fitting?',
        answer: 'Check the top fittings, the temperature and pressure relief valve discharge pipe, and the drain valve. If water is dripping from a threaded connection, it can often be repaired. If water is seeping out from under the metal jacket or bottom seam, the inner tank has rusted through and requires complete replacement.'
      },
      {
        question: 'What is the average lifespan of a water heater in the Woodruff area?',
        answer: 'Without regular maintenance, the typical water heater in Idaho Falls lasts 8 to 10 years due to the 14.1 GPG mineral content. With annual flushing and anode rod replacements, a quality tank can last 12 to 15 years.'
      },
      {
        question: 'Can you convert my electric water heater to natural gas?',
        answer: 'Yes, provided a natural gas supply line is available near your mechanical room and proper combustion venting can be established. Gas units offer faster recovery times and lower operating costs in our area.'
      },
      {
        question: 'Are your technicians licensed and insured in Idaho?',
        answer: 'Yes. All of our technicians are fully licensed through the Idaho Division of Occupational and Professional Licenses (DOPL) and carry comprehensive liability and workers’ compensation insurance.'
      },
      {
        question: 'How do I schedule water heater service near Woodruff Avenue?',
        answer: 'Call our local dispatch desk at (208) 218-2108. We offer 24/7 availability and can schedule same-day appointments or emergency dispatch.'
      }
    ]
  },
  // 83404
  {
    slug: 'cotton',
    name: 'Cotton',
    zip: '83404',
    headline: 'Quality Water Heater Repair & Replacement in the Cotton Neighborhood',
    lead: 'The Cotton neighborhood in south-central Idaho Falls represents a mature, well-loved residential district known for quiet tree-lined streets, sturdy mid-century construction, and spacious lots. Because homes in this area were built primarily between the 1950s and 1970s, plumbing systems often feature legacy copper and galvanized piping, basement crawlspaces, and older chimney flues. Idaho Falls Water Heater Pros provides dedicated water heater repair, sediment power flushing, and modern replacements throughout the Cotton neighborhood.',
    housingStyle: 'Classic mid-century ramblers, 1960s brick ranch homes, split-entry layouts, and cozy daylight basements with dedicated mechanical storage rooms.',
    streets: ['Cottonwood Drive', 'Holmes Avenue Corridor', 'Sunnyside Road Access', 'Elm Street', 'Linden Drive'],
    waterContext: 'Central municipal well supply carrying 14.1 GPG calcium carbonate hardness through mature distribution mains with moderate baseline pressures.',
    challenge1Title: 'Galvanic Joint Failure on Legacy Plumbing Lines',
    challenge1Desc: 'Older homes in the Cotton neighborhood often retain original galvanized distribution lines connected to newer copper water heater stub-outs. Without dielectric separation, galvanic corrosion corrodes pipe threads, causing leaks that drip down onto the water heater jacket.',
    challenge2Title: 'Sediment-Bound Plastic Drain Valves',
    challenge2Desc: 'Standard water heaters installed with factory plastic drain valves frequently seize up when homeowners attempt to flush out heavy 14.1 GPG sediment. Plastic threads strip or snap, risking flooding. We replace delicate plastic valves with full-port brass ball valves.',
    challenge3Title: 'Inadequate Combustion Clearance in Finished Closets',
    challenge3Desc: 'Over decades of home renovations, many Cotton neighborhood basements have added walls that boxed water heaters into tiny utility closets without sufficient make-up air. Incomplete combustion causes soot buildup and pilot outages.',
    tableHeaders: ['Component', 'Factory Standard', 'Our Heavy-Duty Upgrade', 'Benefit for Cotton Homes'],
    tableRows: [
      ['Drain Valve', 'Plastic composite', 'Full-port brass ball valve', 'Prevents snapping; permits power flushes'],
      ['Piping Connectors', 'Direct copper/iron thread', 'Brass dielectric unions', 'Stops galvanic corrosion and thread rust'],
      ['Anode Rod', 'Standard magnesium', 'Powered titanium rod', 'No degradation; stops rotten-egg smells'],
      ['Expansion Control', 'Often missing in older homes', 'Pre-charged thermal expansion tank', 'Protects plumbing from pressure spikes']
    ],
    caseTitle: 'Replacing a Snapped Drain Valve on Cottonwood Drive',
    caseDesc: 'A homeowner on Cottonwood Drive attempted to drain their water heater to clear sediment, but the factory plastic drain valve snapped in half, sending a steady stream of hot water across the basement floor. Our on-call technician arrived within 30 minutes, shut off the main water valve, safely extracted the broken plastic threads with an internal extractor, and installed a commercial-grade brass ball valve. We then performed a full power flush, removing two buckets of calcified scale and restoring the unit to peak efficiency.',
    faqs: [
      {
        question: 'Why did my water heater drain valve break when I tried to flush it?',
        answer: 'Factory drain valves are made of brittle plastic that degrades under high temperatures and mineral exposure. When calcium scale clogs the valve opening, turning the handle can easily snap the plastic stem. We install durable brass ball valves that withstand repeated flushes.'
      },
      {
        question: 'Is a thermal expansion tank necessary in an older home in the Cotton neighborhood?',
        answer: 'Yes. Even if your home was built before expansion tanks were common, modern city water meters and backflow devices create a closed plumbing system. When water heats and expands, an expansion tank absorbs the excess volume, preventing leaks and extending tank life.'
      },
      {
        question: 'Can you install a water heater in a low-ceiling basement?',
        answer: 'Yes. We specialize in lowboy water heaters designed specifically for basements and crawlspaces with limited overhead clearance. Lowboy models provide 30 to 50 gallons of capacity while standing under 36 inches tall.'
      },
      {
        question: 'Do you offer electric water heater repair in the Cotton area?',
        answer: 'Yes. We troubleshoot and repair all electric water heater components, including upper and lower heating elements, dual thermostats, high-limit reset switches, and wiring connections.'
      },
      {
        question: 'How can I get an estimate for water heater replacement in 83404?',
        answer: 'Call us directly at (208) 218-2108. We will assess your home’s plumbing setup and provide a straightforward estimate with zero hidden fees.'
      }
    ]
  },
  {
    slug: 'community-park',
    name: 'Community Park Area',
    zip: '83404',
    headline: 'Fast Water Heater Repair & Installation Near Community Park',
    lead: 'Surrounding Idaho Falls’ expansive Community Park, this established residential neighborhood is known for active households, tree-lined avenues, and dependable mid-century architecture. Family living here places continuous daily demands on residential water heaters, from sports gear laundry cycles to back-to-back showers. Idaho Falls Water Heater Pros delivers rapid, dependable water heater repairs, proactive maintenance flushes, and energy-efficient system replacements throughout the Community Park area.',
    housingStyle: 'Solid 1960s and 1970s ranch homes, traditional split-levels, and updated single-family properties with spacious basements and large mechanical rooms.',
    streets: ['South Boulevard', 'Tautphaus Park Access', 'Rollandet Avenue', '25th Street', '19th Street'],
    waterContext: 'City of Idaho Falls municipal deep well supply, delivering 14.1 GPG hard water through established distribution mains under steady municipal pressure.',
    challenge1Title: 'High-Demand Element Burnout in Electric Water Heaters',
    challenge1Desc: 'With busy family schedules near Community Park, electric water heaters cycle constantly. In hard aquifer water, mineral sediment blankets the lower element, trapping heat until the internal resistance wire burns out, leaving homeowners with lukewarm water.',
    challenge2Title: 'Draft Hood Spillage from Chimney Cold Air Inversion',
    challenge2Desc: 'Atmospheric gas heaters venting into older central masonry chimneys can suffer from cold air downdrafts during winter. Cold chimney air pushes combustion exhaust back into the basement through the draft hood. We test and reline flues to guarantee proper draft.',
    challenge3Title: 'Main Line Pressure Fluctuations',
    challenge3Desc: 'Subdivision water lines near major thoroughfares like South Boulevard can experience pressure spikes during municipal pump cycling. Unregulated pressure causes repeated stress to water heater tank seams and flex connectors.',
    tableHeaders: ['Symptom', 'Immediate Cause', 'Long-Term Danger', 'Plumbing Solution'],
    tableRows: [
      ['Lukewarm shower water', 'Lower heating element burnt out', 'Excessive electrical usage', 'Replace element with low-watt-density unit'],
      ['Exhaust smell in basement', 'Improper flue draft / backdrafting', 'Carbon monoxide poisoning risk', 'Reline chimney flue and inspect draft hood'],
      ['Water dripping from top pipes', 'Failed dielectric nipples or washers', 'Corrosion of outer tank jacket', 'Install brass transition fittings'],
      ['Loud popping when burner fires', 'Heavy bottom sediment layer', 'Premature tank metal fatigue', 'Execute pressurized sediment hydro-flush']
    ],
    caseTitle: 'Resolving Chronic Hot Water Shortage on Rollandet Avenue',
    caseDesc: 'A family of five near Community Park on Rollandet Avenue reported that their hot water ran out midway through the second morning shower. The water heater was only four years old. Our technician performed electrical continuity tests and discovered that while the upper element was functional, the lower element was completely burned out and submerged in six inches of calcified gravel. We removed the sediment using our power-flush system, installed a heavy-duty low-watt-density incoloy element, and calibrated both thermostats, restoring full 50-gallon capacity.',
    faqs: [
      {
        question: 'Why does my electric water heater only produce enough hot water for one shower?',
        answer: 'When the lower heating element burns out, only the top one-third of the tank is heated. The upper thermostat satisfies quickly, giving the illusion the heater is working, but capacity is severely reduced. Replacing the lower element restores full-tank heating.'
      },
      {
        question: 'What is a low-watt-density heating element and why is it better for Idaho Falls?',
        answer: 'Low-watt-density elements spread the same electrical wattage over a larger surface area, operating at lower surface temperatures. This dramatically reduces mineral scale baking onto the element, tripling its lifespan in 14.1 GPG hard water.'
      },
      {
        question: 'Can you inspect my chimney flue for carbon monoxide backdrafting?',
        answer: 'Yes. We use digital draft gauges and smoke pens to inspect combustion draft around the draft hood, ensuring flue gases vent safely through the roof without spilling into your basement.'
      },
      {
        question: 'Do you offer emergency service on holidays in 83404?',
        answer: 'Yes. We are on call 365 days a year to handle emergency water heater failures throughout the Community Park area and greater Idaho Falls.'
      },
      {
        question: 'How do I schedule an estimate for a replacement water heater?',
        answer: 'Call our friendly dispatch team at (208) 218-2108. We will discuss your household needs and schedule an on-site visit to provide an accurate estimate.'
      }
    ]
  },
  // 83402
  {
    slug: 'eagle-rock',
    name: 'Eagle Rock',
    zip: '83402',
    headline: 'Professional Water Heater Repair & Installation in Eagle Rock',
    lead: 'Located on the historic west side of Idaho Falls near Eagle Rock Middle School, the Eagle Rock neighborhood features established residential blocks, comfortable family homes, and mature trees. Plumbing systems here contend with the rigorous mineral demands of the Eastern Snake River Plain Aquifer, cold winter ground temperatures, and aging venting infrastructure. Idaho Falls Water Heater Pros provides dependable water heater repair, emergency leak control, and modern tank and tankless replacements throughout Eagle Rock 24/7.',
    housingStyle: 'Classic 1960s to 1980s split-levels, brick ramblers, ranch-style homes, and single-level properties with crawlspaces or full basements.',
    streets: ['Pancheri Drive Corridor', 'Grizzly Avenue', 'West Broadway', 'Skyline Drive Access', 'Grandview Drive'],
    waterContext: 'West-side municipal supply tapping the Snake River aquifer, featuring 14.1 GPG hardness, cold winter influent temperatures (38°F–40°F), and stable line pressure.',
    challenge1Title: 'High Mineral Hardness Scale on Electric Elements',
    challenge1Desc: 'Electric water heaters throughout Eagle Rock suffer from rapid mineral accumulation. Without regular flushing, thick calcium blankets the lower heating element, causing it to overheat and fail prematurely while drastically increasing electric utility costs.',
    challenge2Title: 'Thermocouple and Pilot Outages in Gas Units',
    challenge2Desc: 'Atmospheric gas water heaters in older utility rooms often accumulate dust and lint around the burner chamber air intake screen. Restricted airflow causes lazy pilot flames and frequent thermal switch tripping.',
    challenge3Title: 'Aging Pressure Relief Discharge Piping',
    challenge3Desc: 'Many older Eagle Rock installations feature improper T&P valve discharge piping made of PVC or threaded without a downward pitch. Under high-temperature discharge, non-rated piping can soften or burst. We install rigid copper or CPVC lines to code.',
    tableHeaders: ['Feature', 'Atmospheric Gas Tank', 'Electric Storage Tank', 'Direct-Vent Tankless'],
    tableRows: [
      ['Energy Source', 'Natural Gas', '240V Electricity', 'Natural Gas'],
      ['First-Hour Rating', 'Fast recovery (70-80 gal)', 'Moderate recovery (50-60 gal)', 'Continuous flow (limitless)'],
      ['Sediment Vulnerability', 'Moderate (bottom flushes)', 'High (element burnout)', 'Requires annual descaling'],
      ['Ideal Placement', 'Basement with chimney B-vent', 'Basement, closet, or crawlspace', 'Basement wall mount']
    ],
    caseTitle: 'Diagnosing Repeated Pilot Outages on Grizzly Avenue',
    caseDesc: 'An Eagle Rock homeowner on Grizzly Avenue dealt with a water heater pilot light that would shut off every few days. Two previous contractors had replaced the thermocouple, yet the pilot continued to extinguish. Our technician removed the burner assembly and discovered the flame arrestor screen was completely clogged with household lint and dryer dust, starving the burner of oxygen. We cleaned the arrestor, tested the millivolt output of the thermopile, and recalibrated the air shutter. The unit has operated flawlessly ever since.',
    faqs: [
      {
        question: 'Why does my gas water heater pilot light keep going out in Eagle Rock?',
        answer: 'Common causes include a clogged flame arrestor screen starving the burner of oxygen, a weak or improperly positioned thermocouple, a dirty pilot orifice, or downdrafts from the chimney. We diagnose and fix the root cause rather than guessing.'
      },
      {
        question: 'Can you install a water heater in an unconditioned crawlspace?',
        answer: 'Yes, but special precautions must be taken in eastern Idaho winters. We install crawlspace-rated water heaters with heavy insulation jackets, heat tape on water supply lines, and insulated pipes to prevent freezing during sub-zero temperatures.'
      },
      {
        question: 'What is the difference between a standard and commercial-grade residential tank?',
        answer: 'Commercial-grade residential water heaters feature thicker steel tank shells, brass drain valves instead of plastic, heavy-duty incoloy heating elements, and larger sacrificial anode rods for superior durability in hard water.'
      },
      {
        question: 'Do you offer 24-hour emergency water heater service in Eagle Rock?',
        answer: 'Yes. Our West Idaho Falls technicians are on call 24 hours a day, 7 days a week to handle leaks, burst tanks, and heating failures.'
      },
      {
        question: 'How do I get an estimate for a replacement in 83402?',
        answer: 'Call our office directly at (208) 218-2108. We provide upfront, transparent estimates with no surprise fees.'
      }
    ]
  },
  {
    slug: 'idaho-falls-west',
    name: 'Idaho Falls West',
    zip: '83402',
    headline: 'Comprehensive Water Heater Repair & Installation in Idaho Falls West',
    lead: 'Spanning the diverse residential and commercial districts west of the Snake River, Idaho Falls West encompasses everything from mature mid-century neighborhoods to newer suburban subdivisions near the airport and Interstate 15. The geographic breadth of the 83402 area presents a mix of municipal and private well systems, varying water pressures, and distinct venting configurations. Idaho Falls Water Heater Pros provides rapid, reliable water heater repair, precision diagnostics, and energy-efficient replacements across the entire West Side.',
    housingStyle: 'Diverse housing stock including mid-century suburban ranches, post-2000 subdivisions, multi-acre semi-rural parcels, and townhome communities.',
    streets: ['West Broadway Corridor', 'Skyline Drive', 'Airport Road', 'Pancheri Drive West', 'Bellin Road'],
    waterContext: 'Predominantly municipal water from west-side deep wells (14.1 GPG), with outer residential pockets utilizing private domestic wells with varying mineral and sand content.',
    challenge1Title: 'High Main Line Water Pressure Near Industrial Corridors',
    challenge1Desc: 'Properties near West Broadway and the airport often experience municipal static pressures exceeding 85 to 90 PSI. High pressure strains water heater tank seams, causes noisy water hammer, and forces T&P relief valves to weep.',
    challenge2Title: 'Sediment and Particulate Intrusion from Private Wells',
    challenge2Desc: 'Semi-rural homes on the western periphery drawing from private wells frequently experience fine volcanic sand and silt entering the water heater. Sand settles at the bottom of the tank, creating hot spots that degrade the tank floor.',
    challenge3Title: 'Combustion Air Depletion in Compact Utility Closets',
    challenge3Desc: 'Many west-side homes feature water heaters housed in compact laundry or utility closets. Inadequate air supply leads to incomplete gas combustion, soot accumulation, and elevated carbon monoxide risks.',
    tableHeaders: ['Condition', 'Standard Risk', 'Protective Measure', 'Impact on Longevity'],
    tableRows: [
      ['Water Pressure >80 PSI', 'Tank seam leaks & burst flex lines', 'Install Pressure Reducing Valve (PRV)', 'Extends tank life by 3-5 years'],
      ['Sand & Silt in Well Water', 'Burnt tank bottoms & clogged valves', 'Install spin-down sediment filter', 'Prevents sediment accumulation'],
      ['14.1 GPG Hard Water', 'Calcium scale & element burnout', 'Annual power flushing & anode check', 'Maintains 95%+ heating efficiency'],
      ['Closed Plumbing System', 'Thermal overpressure spikes', 'Calibrated thermal expansion tank', 'Stops relief valve dripping']
    ],
    caseTitle: 'Installing a Pressure Reducing Valve and Water Heater on Bellin Road',
    caseDesc: 'A homeowner on Bellin Road called us after their water heater developed a leak at only six years old. Our incoming pressure test revealed city water pressure surging to 98 PSI during nighttime hours. The extreme pressure had overstressed the internal glass lining, causing premature failure. We installed a new energy-efficient Bradford White 50-gallon gas water heater, paired with a heavy-duty Watts pressure reducing valve set to 60 PSI and an expansion tank, protecting the entire home’s plumbing infrastructure.',
    faqs: [
      {
        question: 'How do I know if my water pressure is too high in Idaho Falls West?',
        answer: 'Signs of excessive water pressure include banging pipes (water hammer), faucets that spit or splash violently when opened, toilets that run intermittently, and water heater relief valves that drip constantly. We test static pressure using calibrated gauges.'
      },
      {
        question: 'What is the safe water pressure range for residential plumbing?',
        answer: 'The Uniform Plumbing Code specifies that residential water pressure should not exceed 80 PSI. The ideal operating range for water heaters and household fixtures is between 55 and 65 PSI.'
      },
      {
        question: 'Can you service water heaters on private well systems in 83402?',
        answer: 'Yes. We routinely service and install water heaters connected to private wells, installing pre-filters, heavy-duty anode rods, and sediment-resistant drain valves tailored for well water.'
      },
      {
        question: 'Do you offer same-day water heater replacement on the West Side?',
        answer: 'Yes. Our trucks carry popular 40 and 50-gallon gas and electric models, enabling us to complete most replacements on the same day you call.'
      },
      {
        question: 'How do I get an estimate for water heater repair in Idaho Falls West?',
        answer: 'Contact our dispatch desk at (208) 218-2108. A licensed technician will diagnose your system and provide a transparent estimate.'
      }
    ]
  },
  // 83401
  {
    slug: 'new-sweden',
    name: 'New Sweden',
    zip: '83401',
    headline: 'Reliable Water Heater Repair & Well-Water Solutions in New Sweden',
    lead: 'Steeped in rich agricultural heritage southwest of Idaho Falls, New Sweden is known for expansive farmsteads, historic homes, and acreage properties along the Great Feeder Canal system. Residences here rely predominantly on private domestic wells tapping the Snake River Aquifer, presenting unique water quality challenges including heavy mineral hardness, sand, and occasional sulfur odors. Idaho Falls Water Heater Pros provides specialized water heater repair, well-water filtration upgrades, and rugged replacements throughout New Sweden.',
    housingStyle: 'Historic rural farmhouses, modern custom acreage residences, agricultural outbuildings, and spacious country homes with large basement utility rooms.',
    streets: ['New Sweden Highway', 'West 33rd South', 'Milligan Road', 'Great Feeder Canal Area', 'South 45th West'],
    waterContext: 'Private domestic wells tapping the volcanic aquifer, featuring high calcium carbonate hardness (often exceeding 16 GPG), dissolved minerals, and seasonal water table shifts.',
    challenge1Title: 'Heavy Well Water Sediment and Mineral Loading',
    challenge1Desc: 'Private wells in New Sweden often pull fine silt, sand, and heavy dissolved calcium into water heaters. This abrasive sediment settles quickly, forming thick, stone-like deposits that choke heating elements and trap burner heat.',
    challenge2Title: 'Corrosive Well Chemistry and Rotten-Egg Odors',
    challenge2Desc: 'Naturally occurring sulfur-reducing bacteria in well water react with factory magnesium anode rods, producing offensive hydrogen sulfide gas (rotten-egg smell) throughout the hot water system.',
    challenge3Title: 'Propane and High-Capacity Fuel Requirements',
    challenge3Desc: 'Many rural properties in New Sweden utilize liquid propane (LP) rather than utility natural gas. Water heaters must be factory-configured or properly converted with correct burner orifices and gas valve springs to ensure safe LP combustion.',
    tableHeaders: ['Feature', 'Municipal Water Tank', 'New Sweden Well Water Setup'],
    tableRows: [
      ['Filtration Needed', 'Standard mesh screen', 'Pre-tank spin-down sediment filter'],
      ['Anode Rod Type', 'Standard magnesium', 'Powered titanium (eliminates sulfur odor)'],
      ['Drain Valve Type', 'Standard valve', 'Full-port brass ball valve for heavy flushes'],
      ['Fuel Configuration', 'Standard Natural Gas', 'Propane (LP) or High-Efficiency Electric']
    ],
    caseTitle: 'Eliminating Heavy Mineral Silt and Rotten-Egg Smell on New Sweden Highway',
    caseDesc: 'A rural homeowner on New Sweden Highway faced both foul-smelling hot water and extreme sediment accumulation that destroyed two heating elements within twelve months. Our technician installed a pre-tank spin-down sand filter, flushed out over 20 pounds of calcified sediment, replaced the factory magnesium rod with a powered titanium anode, and installed dual incoloy low-watt-density elements. The hot water odor disappeared completely, and element burnout was permanently resolved.',
    faqs: [
      {
        question: 'Can you convert a natural gas water heater to propane in New Sweden?',
        answer: 'Yes, provided the manufacturer approves the model for field conversion and an OEM conversion kit is used. However, many models must be ordered factory-configured for propane to maintain safety and warranty coverage. We carry both LP and natural gas units.'
      },
      {
        question: 'Why does my well water in New Sweden cause hot water to smell like sulfur?',
        answer: 'Harmless sulfur-reducing bacteria in well water react with standard magnesium anode rods to generate hydrogen sulfide gas. Replacing the rod with a powered titanium anode rod stops this reaction permanently without degrading your tank.'
      },
      {
        question: 'How do I prevent sand from ruining my water heater in 83401?',
        answer: 'We install a spin-down sediment separator with an automatic or manual flush valve before the water enters your water heater or water softener. This traps sand and grit before it can settle inside your tank.'
      },
      {
        question: 'Do you service electric water heaters on rural properties in New Sweden?',
        answer: 'Yes. We service all makes and models of electric water heaters, including heavy-duty 50, 65, and 80-gallon residential storage units.'
      },
      {
        question: 'How do I schedule service in New Sweden?',
        answer: 'Call our 24/7 dispatch office at (208) 218-2108. We provide fast service across all rural and agricultural parcels in the 83401 area.'
      }
    ]
  },
  {
    slug: 'osgood',
    name: 'Osgood',
    zip: '83401',
    headline: 'Expert Water Heater Repair & Rural Installation in Osgood',
    lead: 'Situated northwest of Idaho Falls along the fertile plains of the Snake River, Osgood is an established agricultural community featuring farm residences, rural acreage, and spacious country homes. Properties here operate almost exclusively on private well water and propane fuel, requiring plumbing components built to handle high mineral loading and sub-zero winter winds. Idaho Falls Water Heater Pros provides expert propane water heater conversions, well-water sediment management, and emergency repairs across Osgood.',
    housingStyle: 'Rural acreage homes, traditional farmhouses, modern country ramblers, and agricultural shops with dedicated domestic hot water systems.',
    streets: ['Osgood Road', 'West 65th North', 'Sage Canal Road', 'Old Butte Road North', 'North 35th West'],
    waterContext: 'Private domestic well supply drawing from the volcanic aquifer, featuring high calcium and magnesium content (15+ GPG), cold winter well water (38°F), and independent pressure tanks.',
    challenge1Title: 'High Mineral Well Water Scale on LP Burners',
    challenge1Desc: 'Propane burners burn hotter than natural gas. When high-temperature LP combustion meets 15+ GPG mineral water, calcium precipitates rapidly onto the bottom tank head, creating thick insulating crusts that cause burner short-cycling and tank rumbling.',
    challenge2Title: 'Well Pressure Tank Cycling and Water Heater Stress',
    challenge2Desc: 'Fluctuating pressures from well pressure switches (e.g., 40/60 PSI cycles) constantly flex water heater tank vessels. Without a functional thermal expansion tank, pressure spikes overstress internal glass linings.',
    challenge3Title: 'Exposed Venting and Winter Freezing Risks',
    challenge3Desc: 'Strong northwest winds sweep across open Osgood fields, creating severe backdrafts on unlined chimneys and freezing exposed direct-vent terminations on power-vent and tankless systems.',
    tableHeaders: ['System Type', 'Standard Gas (NG)', 'Liquid Propane (LP) Tank', 'Propane Tankless'],
    tableRows: [
      ['Fuel Source', 'City Natural Gas', 'On-Site Propane Tank', 'On-Site Propane Tank'],
      ['Recovery Speed', 'Fast (40,000 BTU)', 'Very Fast (40,000-50,000 BTU)', 'Instant / Continuous'],
      ['Cold Weather Prep', 'Standard B-vent', 'Insulated B-vent & LP regulator', 'Freeze-protection kit & concentric vent'],
      ['Sediment Defense', 'Annual drain flush', 'Power flush & sediment pre-filter', 'Annual citric acid descale']
    ],
    caseTitle: 'Propane Water Heater Upgrade and Flue Rebuild in Osgood',
    caseDesc: 'An agricultural family on West 65th North had their 12-year-old propane water heater fail during harvest season. The old unit had severe soot buildup and a deteriorated exhaust connector. Our technician installed an OEM factory-configured 50-gallon Bradford White propane water heater, upgraded the exhaust with all-weather double-wall B-vent, installed an expansion tank, and added a brass sediment flush valve. The new system provides dependable hot water with superior fuel efficiency.',
    faqs: [
      {
        question: 'Do you carry propane (LP) water heaters in stock for Osgood?',
        answer: 'Yes. We stock popular 40 and 50-gallon liquid propane water heaters specifically for rural homeowners in Bonneville County who do not have natural gas service.'
      },
      {
        question: 'Why does my propane water heater produce a whistling or humming sound?',
        answer: 'Whistling or humming can be caused by improper gas supply pressure from your exterior propane regulator, a partially obstructed burner orifice, or severe sediment trapping steam bubbles. We test gas line manifold pressure with digital manometers.'
      },
      {
        question: 'Can cold well water damage my water heater in winter?',
        answer: 'Cold 38°F well water increases the temperature rise needed to reach 120°F, forcing the heater to run longer. This creates heavy condensation on the tank exterior during heating cycles, which can drip onto the burner. Proper burner sizing prevents excessive condensation.'
      },
      {
        question: 'Do you service water heaters in agricultural shops and outbuildings?',
        answer: 'Yes. We install and repair commercial and residential water heaters in farm shops, equestrian facilities, and outbuildings throughout Osgood.'
      },
      {
        question: 'How quickly can you dispatch a plumber to Osgood?',
        answer: 'We dispatch from Idaho Falls and can typically reach Osgood addresses within 45 to 60 minutes for urgent repair calls.'
      }
    ]
  },
  {
    slug: 'lincoln',
    name: 'Lincoln',
    zip: '83401',
    headline: 'Trusted Water Heater Repair & Replacement in Lincoln',
    lead: 'Situated just east of Idaho Falls along the bustling Lincoln Road corridor, the historic community of Lincoln blends established mid-century homes, newer suburban developments, and commercial properties. Whether you live in a classic home with an older atmospheric gas heater or a modern residence with a tankless unit, hard water scale and seasonal temperature shifts demand proactive maintenance. Idaho Falls Water Heater Pros provides 24/7 water heater repair, precision troubleshooting, and professional replacements across Lincoln.',
    housingStyle: 'Mix of established 1950s-1970s residences, newer single-family subdivisions, modular homes, and light industrial / commercial shops.',
    streets: ['Lincoln Road', 'Lewisville Highway', 'East 1st Street Access', 'North 25th East', 'Yellowstone Highway Corridor'],
    waterContext: 'Supplied by municipal and shared community wells tapping the volcanic aquifer, with mineral hardness averaging 14.1 to 15 GPG.',
    challenge1Title: 'Atmospheric Chimney Vent Deterioration',
    challenge1Desc: 'Older homes along Lincoln Road often share chimney flues between legacy heating units and water heaters. Inefficient venting allows acidic exhaust moisture to accumulate, creating corrosion in the vent connector and spillage risks.',
    challenge2Title: 'Heavy Mineral Sediment and Element Failure',
    challenge2Desc: 'Electric water heaters in Lincoln frequently burn out lower elements due to calcium buildup. Scale encrusts the element sheath, causing heat to build up internally until the resistance wire snaps.',
    challenge3Title: 'Thermal Expansion and Main Line Surges',
    challenge3Desc: 'Recent water infrastructure upgrades along Lincoln Road have introduced backflow devices that turn older open plumbing into closed systems. Without expansion tanks, water heaters experience excessive pressure spikes during firing cycles.',
    tableHeaders: ['Issue', 'Warning Sign', 'Our Solution'],
    tableRows: [
      ['Pilot Light Failure', 'Pilot won’t stay lit after releasing knob', 'Test/replace thermocouple or thermopile'],
      ['No Hot Water (Electric)', 'Breaker tripped or reset button popped', 'Replace grounded element & calibrate thermostat'],
      ['Rusty Water', 'Brown water from hot taps only', 'Inspect/replace depleted sacrificial anode rod'],
      ['Water Dripping', 'Puddle under T&P discharge pipe', 'Install thermal expansion tank & test line pressure']
    ],
    caseTitle: 'Replacing a Corroded Atmospheric Water Heater on Lincoln Road',
    caseDesc: 'A homeowner on Lincoln Road discovered a puddle spreading from their utility closet. Our technician found that a 13-year-old atmospheric water heater had developed a pinhole leak behind the combustion chamber. We removed the failed unit, installed a high-efficiency 50-gallon gas heater, added an expansion tank, and reconnected the exhaust to a certified B-vent connector, providing the homeowner with safe, code-compliant hot water.',
    faqs: [
      {
        question: 'Why did the red reset button trip on my electric water heater?',
        answer: 'The red button on the upper thermostat is a high-limit safety cutoff that trips when tank temperatures exceed 170°F. This is usually caused by a thermostat that has welded its contacts closed or a grounded heating element that continues heating uncontrollably.'
      },
      {
        question: 'Can you install an expansion tank on an older plumbing system in Lincoln?',
        answer: 'Yes. We install thermal expansion tanks on any residential water heater system, ensuring your plumbing complies with Idaho State Plumbing Code and protects your fixtures.'
      },
      {
        question: 'What brands of water heaters do you install in Lincoln?',
        answer: 'We install top-tier professional-grade brands including Bradford White, Rheem, Navien, and Rinnai. These units feature commercial-grade components superior to retail big-box models.'
      },
      {
        question: 'Do you offer emergency service on weekends in Lincoln?',
        answer: 'Yes. Our licensed plumbing technicians are available 24 hours a day, 7 days a week, 365 days a year.'
      },
      {
        question: 'How do I schedule an estimate in Lincoln 83401?',
        answer: 'Call our office at (208) 218-2108. We will schedule a technician to evaluate your water heater and provide a clear estimate.'
      }
    ]
  },
  {
    slug: 'grant',
    name: 'Grant',
    zip: '83401',
    headline: 'Specialized Water Heater Repair & Installation in Grant',
    lead: 'Located north of Idaho Falls near the scenic banks of the Snake River, Grant is a peaceful rural community of expansive farm acreage, custom country homes, and multi-generation family properties. Homes here operate on independent domestic wells and propane fuel systems, requiring rugged, high-capacity water heaters that can handle heavy mineral content and freezing winter temperatures. Idaho Falls Water Heater Pros offers dedicated propane water heater repair, sediment power flushing, and replacement services throughout Grant.',
    housingStyle: 'Rural acreage residences, custom ramblers, historic farm properties, and expansive shops with finished living quarters.',
    streets: ['North 3500 East', 'Grant Highway', 'County Line Road North', 'Lewisville Road Access', 'Snake River Road'],
    waterContext: 'Private domestic well water with high calcium carbonate hardness (15+ GPG), cold winter temperatures, and variable well pump pressures.',
    challenge1Title: 'High-Demand Agricultural and Family Hot Water Draws',
    challenge1Desc: 'Country properties in Grant often require large volumes of hot water for large families, outdoor wash stations, and shop sinks. Standard 40-gallon tanks run out of hot water rapidly under heavy simultaneous demand.',
    challenge2Title: 'Heavy Well Silt and Calcium Scale Accumulation',
    challenge2Desc: 'Without municipal filtration, water heaters in Grant accumulate heavy silt and gravel-like calcium deposits. This mineral bed insulates the tank bottom, leading to metal overheating, noisy popping, and premature tank rupture.',
    challenge3Title: 'Propane Burner Orifice and Gas Valve Clogging',
    challenge3Desc: 'Propane systems can accumulate heavy ends or oil residues in gas lines if exterior regulators are not properly maintained. Contaminated gas lines clog pilot orifices and cause erratic burner operation.',
    tableHeaders: ['Equipment Type', 'Standard 40-Gal Electric', '75-Gal High-Recovery Propane', 'Dual Propane Tankless'],
    tableRows: [
      ['Hot Water Output', 'Limited (50 gal first hour)', 'Very High (90+ gal first hour)', 'Limitless continuous flow'],
      ['Operating Cost', 'Higher electrical demand', 'Cost-effective LP usage', 'High efficiency (burns fuel on demand)'],
      ['Hard Water Defense', 'Vulnerable lower element', 'Requires periodic flushes', 'Annual citric acid descale required'],
      ['Winter Performance', 'Slow recovery in winter', 'Fast 45-minute tank recovery', 'Continuous hot water at scaled GPM']
    ],
    caseTitle: 'Upgrading a Freezing Propane Water Heater in a Grant Country Home',
    caseDesc: 'A homeowner on North 3500 East experienced freezing water lines and repeated pilot failure on their water heater located in an attached unheated utility room during a -15°F cold snap. Our technician insulated the incoming and outgoing water lines with self-regulating heat tape, cleaned the propane pilot burner assembly, and installed an insulated thermal jacket. We also adjusted the gas pressure to factory specs, ensuring reliable hot water through the remainder of the winter.',
    faqs: [
      {
        question: 'How can I protect my water heater from freezing in an unheated room in Grant?',
        answer: 'We install pipe insulation, commercial heat trace cabling on water lines, and ensure combustion air vents do not blow sub-zero air directly onto the water heater base. In extreme cases, we recommend relocating the unit to a conditioned space.'
      },
      {
        question: 'Do you service propane water heaters in Grant?',
        answer: 'Yes. All of our technicians are trained and licensed to service, repair, and install liquid propane (LP) water heaters and gas supply lines.'
      },
      {
        question: 'Why is my Grant well water causing my water heater to pop and rumble?',
        answer: 'Popping sounds indicate a heavy layer of calcium carbonate sediment at the bottom of the tank. Water trapped underneath turns to steam and pops through the mineral crust. A pressurized power flush removes this buildup.'
      },
      {
        question: 'Can you install a tankless water heater on propane in Grant?',
        answer: 'Yes. Propane tankless water heaters are an excellent choice for country homes, delivering continuous hot water while taking up zero floor space.'
      },
      {
        question: 'How do I request an estimate in Grant?',
        answer: 'Call our team at (208) 218-2108. We serve all addresses in Grant and northern Bonneville County.'
      }
    ]
  },
  {
    slug: 'coltman',
    name: 'Coltman',
    zip: '83401',
    headline: 'Expert Water Heater Repair & High-Efficiency Replacements in Coltman',
    lead: 'Situated northeast of Idaho Falls, Coltman is an attractive semi-rural community characterized by modern acreage subdivisions, custom single-family homes, and active agricultural parcels. Homes here depend on high-performing water heating systems capable of handling private well mineral hardness and sub-zero winter temperatures. Idaho Falls Water Heater Pros provides dependable water heater diagnostics, precision burner maintenance, and energy-efficient replacements throughout Coltman.',
    housingStyle: 'Modern custom acreage homes, suburban ranch properties, modern multi-levels, and rural estates with spacious mechanical rooms.',
    streets: ['Coltman Road', 'North 25th East Corridor', 'East 65th North', 'County Road Access', 'Willow Creek Area'],
    waterContext: 'Private domestic well water drawing from the volcanic Snake River aquifer, carrying 14 to 16 GPG mineral hardness and high dissolved calcium.',
    challenge1Title: 'Rapid Limescale Precipitation in Modern High-Recovery Units',
    challenge1Desc: 'High-recovery water heaters installed in modern Coltman homes heat water rapidly, which accelerates the precipitation of dissolved calcium carbonate onto tank surfaces and heating elements, forming rock-hard scale.',
    challenge2Title: 'Well Pump Pressure Surges',
    challenge2Desc: 'Domestic well pump cycling creates cyclical pressure waves that stress water heater tank vessels and expansion bladders. Properly calibrated expansion tanks and pressure relief valves are essential.',
    challenge3Title: 'Exposed Venting in High-Wind Areas',
    challenge3Desc: 'Strong prairie winds can create severe downdrafts in standard atmospheric vent caps, blowing out pilot lights and pushing flue gases back into basements. We install wind-resistant high-velocity vent terminals.',
    tableHeaders: ['Component', 'Symptoms of Failure', 'Recommended Fix'],
    tableRows: [
      ['Sacrificial Anode', 'Rusty hot water or rotten-egg odor', 'Replace with powered titanium rod'],
      ['Heating Element', 'Lukewarm water / high power bills', 'Install low-watt-density incoloy element'],
      ['T&P Valve', 'Continuous dripping or pooling', 'Replace valve & install expansion tank'],
      ['Burner Assembly', 'Yellow flame / soot accumulation', 'Clean burner orifice & adjust air shutter']
    ],
    caseTitle: 'Resolving Severe Hard Water Scaling on Coltman Road',
    caseDesc: 'A family on Coltman Road noticed their four-year-old electric water heater was taking over two hours to recover after showers. Our technician removed the lower heating element and found it encased in a five-pound block of solid calcium scale. We thoroughly descaled the interior of the tank using an acidic flushing wash, installed a premium low-watt-density element, and installed an inline scale inhibitor, cutting recovery time in half.',
    faqs: [
      {
        question: 'How often should Coltman homeowners flush their water heaters?',
        answer: 'Due to the 15+ GPG hardness of local well water, we recommend draining and flushing your tank every 6 to 12 months. An annual professional power flush provides a much deeper clean.'
      },
      {
        question: 'What causes yellow flames in a gas water heater?',
        answer: 'A healthy gas burner burns with a crisp blue flame. Yellow flames indicate incomplete combustion, usually caused by dust, lint, or mineral scale blocking the burner air intake. This produces dangerous carbon monoxide and requires prompt inspection.'
      },
      {
        question: 'Can you install a hybrid heat pump water heater on a well in Coltman?',
        answer: 'Yes. Hybrid electric heat pump water heaters work exceptionally well in spacious basements, utilizing ambient air heat to warm water while cutting electrical costs significantly.'
      },
      {
        question: 'Do you offer emergency service in Coltman 83401?',
        answer: 'Yes. We are available 24 hours a day, 7 days a week to handle leaks, outages, and burst tanks.'
      },
      {
        question: 'How do I get an estimate for water heater service in Coltman?',
        answer: 'Call our direct line at (208) 218-2108 to speak with a technician and request an estimate.'
      }
    ]
  },
  {
    slug: 'hillview',
    name: 'Hillview',
    zip: '83401',
    headline: 'Trusted Water Heater Repair & Installation in Hillview',
    lead: 'Overlooking the valley northeast of Idaho Falls, Hillview features established residential properties, rolling terrain, and comfortable suburban living. Properties in Hillview experience unique water pressure variations due to topographic elevation changes, along with the relentless mineral hardness of eastern Idaho aquifer water. Idaho Falls Water Heater Pros provides comprehensive water heater repair, pressure regulation, and modern system replacement across the Hillview community.',
    housingStyle: 'Mid-century to 1980s suburban homes, split-entry residences, comfortable ramblers, and quiet cul-de-sac properties with full basements.',
    streets: ['Hillview Drive', 'Skyline Corridor', 'East 49th North', 'Meadow Lane', 'Foothill Access Road'],
    waterContext: 'Municipal water supplied through elevation-boosted mains, delivering 14.1 GPG hard water subject to dynamic pressure shifts.',
    challenge1Title: 'Elevation Pressure Surges and Bladder Fatigue',
    challenge1Desc: 'Hillside elevation variations in Hillview require municipal booster stations, resulting in baseline water pressures between 75 and 85 PSI. When thermal expansion occurs, pressure can exceed safe limits, rupturing expansion bladders.',
    challenge2Title: 'Sediment Settle in Lowboy and Short Tanks',
    challenge2Desc: 'Many Hillview basements feature low ceilings requiring compact or short water heaters. These wider, shorter tanks have larger bottom surface areas where calcium scale settles in wide blankets, overheating tank bottoms.',
    challenge3Title: 'Deteriorating Galvanized Supply Lines',
    challenge3Desc: 'Original galvanized water lines in older Hillview homes frequently experience interior corrosion at water heater inlet and outlet nipples, reducing water flow to showers and sinks.',
    tableHeaders: ['Issue', 'Root Cause', 'Plumbing Correction'],
    tableRows: [
      ['Dripping T&P Valve', 'Excessive pressure / failed expansion tank', 'Install PRV & replace expansion tank'],
      ['Popping / Banging Noise', 'Hard calcium scale on tank bottom', 'Pressurized hydro-flush and descaling'],
      ['Low Hot Water Volume', 'Burnt lower element or broken dip tube', 'Replace element or install new curved dip tube'],
      ['Pilot Won’t Stay Lit', 'Defective thermocouple or dirty burner', 'Clean pilot assembly and replace thermocouple']
    ],
    caseTitle: 'Fixing Chronic Pressure Relief Weeping on Hillview Drive',
    caseDesc: 'A homeowner on Hillview Drive had their pressure relief valve replaced twice by handymen, but it continued to discharge water onto the floor daily. Our technician measured static line pressure at 86 PSI and found the thermal expansion tank was completely flooded. We installed a heavy-duty pressure reducing valve calibrated to 60 PSI, installed a new pre-charged expansion tank, and replaced the weeping T&P valve, resolving the leak permanently.',
    faqs: [
      {
        question: 'Why does my water heater leak from the side pipe onto the floor?',
        answer: 'That pipe is the temperature and pressure (T&P) relief discharge line. It weeps when water temperature exceeds 210°F or line pressure exceeds 150 PSI. We test both temperature and pressure to find the exact cause.'
      },
      {
        question: 'Can you replace my old lowboy water heater in a low-ceiling basement?',
        answer: 'Yes. We carry specially dimensioned lowboy water heaters designed to deliver full 40 or 50-gallon capacity in basements with low joists.'
      },
      {
        question: 'What is a dip tube and how do I know if mine is broken?',
        answer: 'The dip tube directs incoming cold water to the bottom of the tank so it heats before reaching your fixtures. If the tube cracks or breaks, cold water mixes with hot water at the top of the tank, causing showers to turn lukewarm quickly. We replace broken dip tubes on-site.'
      },
      {
        question: 'Do you offer 24/7 service in Hillview?',
        answer: 'Yes. Our on-call technicians are available 24/7 throughout Hillview and northeastern Idaho Falls.'
      },
      {
        question: 'How do I schedule an estimate in Hillview?',
        answer: 'Call our office at (208) 218-2108. We will discuss your situation and arrange an on-site visit.'
      }
    ]
  },
  {
    slug: 'taylor',
    name: 'Taylor',
    zip: '83401',
    headline: 'Dependable Water Heater Repair & Rural Solutions in Taylor',
    lead: 'Nestled south of Ammon along the scenic base of the foothills, Taylor is a historic rural-residential community of acreage properties, custom family homes, and equestrian estates. Operating primarily on private domestic wells, properties in Taylor face intense mineral content, cold mountain runoff water, and seasonal pressure variations. Idaho Falls Water Heater Pros provides dedicated well-water water heater repair, heavy-duty replacements, and propane system maintenance across Taylor.',
    housingStyle: 'Spacious custom acreage homes, modern multi-level country residences, equestrian estates, and traditional rural homesteads.',
    streets: ['Taylor Mountain Road', 'East 65th South', 'South 15th East', 'Foothill Boulevard Corridor', 'Jameston Road Access'],
    waterContext: 'Private domestic wells tapping volcanic aquifer layers with mineral hardness often reaching 16 GPG, combined with sub-40°F winter influent water.',
    challenge1Title: 'Severe Winter Temperature Rise (Delta-T) Requirements',
    challenge1Desc: 'Winter groundwater in Taylor descends from mountain snowmelt, entering homes at 36°F to 38°F. Water heaters must sustain an 82°F to 84°F temperature rise to reach comfortable household temperatures, requiring properly sized high-BTU burners or high-recovery electric units.',
    challenge2Title: 'Heavy Mineral Sediment and Scale Clogging',
    challenge2Desc: 'With hardness exceeding 16 GPG, Taylor well water causes massive calcium deposition inside tanks. In tankless units, scale can clog the compact heat exchanger in under a year without pre-treatment.',
    challenge3Title: 'Corrosive Well Chemistry and Tank Corrosion',
    challenge3Desc: 'Dissolved minerals and sulfur in Taylor wells rapidly consume standard sacrificial anode rods. Once the rod dissolves, corrosive water attacks the steel tank shell, causing pinhole leaks.',
    tableHeaders: ['Water Heater Option', 'Standard 50-Gal Tank', '75-Gal High-Recovery Propane', 'Condensing Tankless Array'],
    tableRows: [
      ['Winter Flow Rate', 'Standard delivery', 'High continuous recovery', 'Scaled to 4.5-5.5 GPM per unit'],
      ['Fuel Flexibility', 'Electric or Gas', 'Propane or Natural Gas', 'Propane or Natural Gas'],
      ['Maintenance Need', 'Annual bottom flush', 'Annual bottom flush', 'Annual citric acid descale'],
      ['Expected Lifespan', '8-10 years', '10-14 years', '18-20 years with care']
    ],
    caseTitle: 'Converting an Undersized Electric Heater to a High-Recovery Propane Tank in Taylor',
    caseDesc: 'A family of six on Taylor Mountain Road struggled with constantly running out of hot water with their standard 50-gallon electric water heater. In the winter, recovery took over an hour between showers. Our technician ran a new gas line from their existing propane tank, installed an energy-efficient 75-gallon Bradford White propane water heater with double-wall B-venting, and added a brass flush valve. First-hour hot water capacity jumped from 55 gallons to over 100 gallons.',
    faqs: [
      {
        question: 'Why does my hot water take so long to heat up in the winter in Taylor?',
        answer: 'Cold winter well water enters the tank at 36°F to 38°F, requiring significantly more energy and time to reach 120°F. If your heater is undersized, recovery can take twice as long in winter. Upgrading to a high-recovery unit solves this problem.'
      },
      {
        question: 'Can I use a tankless water heater with Taylor well water?',
        answer: 'Yes, but a water softener or specialized anti-scale pre-filter is strongly recommended to protect the heat exchanger from the area’s 16+ GPG mineral content. Annual descaling is also required.'
      },
      {
        question: 'What type of anode rod is best for Taylor well water?',
        answer: 'A powered titanium anode rod is the gold standard for hard well water. It provides active cathodic protection without degrading, never needs replacement, and stops sulfur odors completely.'
      },
      {
        question: 'Do you service propane water heaters in Taylor?',
        answer: 'Yes. We specialize in propane water heater repairs, conversions, and new installations.'
      },
      {
        question: 'How do I schedule an estimate in Taylor 83401?',
        answer: 'Call our dispatch team at (208) 218-2108. We serve all residential and acreage properties in Taylor.'
      }
    ]
  },
  {
    slug: 'shelton',
    name: 'Shelton',
    zip: '83401',
    headline: 'Professional Water Heater Repair & Rural Services in Shelton',
    lead: 'Located northeast of Idaho Falls near the South Fork of the Snake River corridor, Shelton is a scenic rural agricultural community featuring sprawling farmsteads, country acreage, and custom homes. Operating exclusively on private well water and propane systems, homeowners in Shelton require durable, high-performance water heating equipment built to withstand intense mineral content and harsh winter weather. Idaho Falls Water Heater Pros provides expert propane repairs, well-water sediment flushing, and replacement services across Shelton.',
    housingStyle: 'Rural homesteads, custom country homes, traditional farmhouses, and multi-acre properties with large outbuildings and basement utility areas.',
    streets: ['Shelton Road', 'East 100th North', 'Ririe Highway Access', 'South Fork River Road', 'North 55th East'],
    waterContext: 'Private domestic well water drawing from deep aquifer reserves, carrying 15+ GPG calcium hardness, seasonal sand intrusion, and cold winter water temperatures.',
    challenge1Title: 'High-Temperature Propane Scale Formation',
    challenge1Desc: 'Propane burners operate at intense heat. When combined with Shelton’s 15+ GPG well water, calcium carbonate bakes rapidly onto the tank bottom plate, creating thick insulating blankets that cause loud kettle noises and bottom-head fatigue.',
    challenge2Title: 'Sediment and Well Silt Intrusion',
    challenge2Desc: 'Agricultural and acreage wells in Shelton frequently pull fine silt and sand that settles at the tank bottom, burying heating elements and jamming standard drain valves.',
    challenge3Title: 'Exposed Flue and Wind Downdrafts',
    challenge3Desc: 'Open prairie winds can create powerful downdrafts down atmospheric flues, blowing out pilot lights and spilling flue gas into basements. We install sealed B-vent systems with high-velocity wind caps.',
    tableHeaders: ['System', 'Lifespan in Shelton Water', 'Maintenance Need', 'Key Advantage'],
    tableRows: [
      ['Standard Electric Tank', '6 to 8 years without care', 'Element checks every 2 yrs', 'Simple electrical hookup'],
      ['High-Recovery Propane Tank', '10 to 12 years with care', 'Annual bottom power flush', 'Fast recovery; high volume'],
      ['Direct-Vent Tankless Unit', '15 to 20 years with care', 'Annual citric acid descale', 'Limitless hot water; space saver']
    ],
    caseTitle: 'Restoring Burner Function and Descaling a Propane Tank in Shelton',
    caseDesc: 'A homeowner on Shelton Road reported their propane water heater was making violent popping sounds and the burner was shutting down on high-limit lockouts. Our technician flushed out four gallons of calcified mineral scale from the tank floor, cleaned the burner orifice of carbon deposits, and installed a heavy-duty brass ball valve for future flushes. The heater returned to smooth, quiet operation with full thermal efficiency.',
    faqs: [
      {
        question: 'Why does my water heater make a tea-kettle whistling sound in Shelton?',
        answer: 'Whistling or kettle sounds occur when water is trapped under a dense layer of calcium carbonate scale at the bottom of the tank. As the burner heats up, trapped water turns to steam and forces its way through the scale. Power flushing removes the scale and silences the noise.'
      },
      {
        question: 'Can you install a sediment filter before my water heater in Shelton?',
        answer: 'Yes. We install spin-down sediment separators that capture sand, silt, and rust before they can enter your water heater, protecting the tank and fixtures throughout your home.'
      },
      {
        question: 'Do you offer emergency weekend service in Shelton?',
        answer: 'Yes. We provide 24/7 emergency dispatch throughout Shelton and surrounding rural communities.'
      },
      {
        question: 'What is the most energy-efficient water heater for a rural home in Shelton?',
        answer: 'For homes with propane, high-efficiency condensing tankless water heaters offer 0.95+ UEF efficiency. For all-electric homes, hybrid heat pump water heaters can save up to 70% on water heating power bills.'
      },
      {
        question: 'How do I get an estimate for service in Shelton 83401?',
        answer: 'Call us at (208) 218-2108. Our team will discuss your water heating needs and schedule an on-site visit.'
      }
    ]
  },
  {
    slug: 'bone',
    name: 'Bone',
    zip: '83401',
    headline: 'Rugged Water Heater Repair & Sub-Zero Winter Solutions in Bone',
    lead: 'Nestled in the high foothills of the Blackfoot Mountains southeast of Idaho Falls, Bone is a rugged, historic highland community known for wide-open ranch lands, mountain scenery, and extreme winter weather. With elevations climbing well above the valley floor, groundwater temperatures in Bone can drop to near-freezing (34°F–36°F), placing extraordinary demands on residential water heating systems. Idaho Falls Water Heater Pros provides specialized heavy-duty water heater repair, freeze-protection setups, and rugged replacements across Bone.',
    housingStyle: 'Highland ranch homes, custom mountain cabins, rural homesteads, and multi-acre properties with independent mechanical setups.',
    streets: ['Bone Road', 'Blackfoot Reservoir Road Access', 'Willow Creek Drainage', 'East 97th South', 'Highland Valley Corridor'],
    waterContext: 'Mountain well water with variable mineral content, sub-zero winter temperatures, and groundwater entering homes as cold as 34°F to 36°F.',
    challenge1Title: 'Extreme Winter Temperature Rise (Delta-T) of 86°F+',
    challenge1Desc: 'In Bone’s high elevation, incoming well water during winter can be as cold as 34°F. To achieve standard 120°F hot water, a water heater must provide an 86°F temperature rise. Standard residential heaters struggle to deliver adequate volume without specialized high-BTU burners or dual-tank configurations.',
    challenge2Title: 'Freezing Risks on Water Supply Lines and Venting',
    challenge2Desc: 'Sub-zero winter temperatures (-20°F or lower) can freeze uninsulated water supply lines, condensate drains, and intake air vents in utility rooms and basements. Without freeze protection, systems suffer catastrophic freeze-burst damage.',
    challenge3Title: 'Off-Grid and Propane Fuel Dependability',
    challenge3Desc: 'Many properties in Bone rely entirely on bulk propane tanks and backup generators. Water heaters must operate reliably through winter storms and power outages without delicate, failure-prone electronic controls.',
    tableHeaders: ['Factor', 'Valley Floor (Idaho Falls)', 'Highland Elevation (Bone)'],
    tableRows: [
      ['Winter Water Influent Temp', '38°F to 40°F', '34°F to 36°F'],
      ['Required Temperature Rise', '80°F rise to 120°F', '86°F+ rise to 120°F'],
      ['Freezing Ambient Risk', 'Moderate (conditioned basements)', 'Severe (sub-zero drafts & rim joists)'],
      ['Recommended System', 'Standard 50-Gal Gas/Electric', 'High-BTU Propane Tank with Freeze Wrap']
    ],
    caseTitle: 'Restoring Hot Water After an Extreme Freeze on Bone Road',
    caseDesc: 'During a -22°F cold snap, a ranch home on Bone Road lost hot water when an uninsulated crawlspace water line froze solid, backing up pressure and tripping the high-limit switch on their propane water heater. Our technician arrived equipped for winter conditions, safely thawed the frozen lines using commercial heat induction equipment, inspected the tank for freeze cracks, installed heavy-duty insulation wrap and heat tape, and re-fired the burner. The system was completely secured against future sub-zero freezes.',
    faqs: [
      {
        question: 'How do I protect my water heater from freezing during a Bone winter storm?',
        answer: 'Ensure the mechanical room stays above 40°F, insulate all exposed copper and PEX pipes with closed-cell foam, install thermostatically controlled heat cable on vulnerable runs, and seal any drafty exterior rim joists or foundation vents.'
      },
      {
        question: 'Can you install a non-electric water heater that works during power outages in Bone?',
        answer: 'Yes. Standard millivolt atmospheric gas water heaters generate their own tiny electrical current via the pilot thermopile, requiring zero grid electricity to heat water during winter power outages.'
      },
      {
        question: 'What size water heater do I need for cold mountain well water?',
        answer: 'Because of the severe 86°F+ temperature rise required in winter, we recommend sizing up to a 65 or 75-gallon high-recovery propane unit, or pairing two units in parallel for large ranch homes.'
      },
      {
        question: 'Do your technicians travel to remote properties in Bone?',
        answer: 'Yes. Our service trucks are equipped for winter travel and we provide dedicated service to Bone and surrounding highland properties in Bonneville County.'
      },
      {
        question: 'How do I schedule an estimate in Bone?',
        answer: 'Call our office at (208) 218-2108. We will discuss your setup and arrange a prompt service visit.'
      }
    ]
  }
];

function generateAstroFile(n) {
  const pageTitle = `Water Heater Repair in ${n.name}, Idaho Falls | 24/7 Plumbers ${n.zip}`;
  const pageDescription = `Licensed water heater repair, replacement & maintenance in ${n.name} (${n.zip}), Idaho Falls. 24/7 emergency service, local technicians & fast estimates.`;

  return `---
import Layout from '../../layouts/Layout.astro';
import Breadcrumbs from '../../components/Breadcrumbs.astro';
import TrustStrip from '../../components/TrustStrip.astro';
import FaqAccordion from '../../components/FaqAccordion.astro';
import CtaBand from '../../components/CtaBand.astro';
import ContactForm from '../../components/ContactForm.astro';

const pageTitle = "${pageTitle}";
const pageDescription = "${pageDescription}";

const breadcrumbs = [
  { name: "Service Areas", url: "/locations/" },
  { name: "${n.name}", url: "/locations/${n.slug}/" }
];

const neighborhoodFaqs = ${JSON.stringify(n.faqs, null, 2)};

const featuredServices = [
  {
    title: "Emergency Water Heater Repair",
    desc: "Rapid diagnostics for pilot failures, heating element burnouts, water leaks, and noisy sediment buildup in ${n.name}.",
    url: "/services/water-heater-repair/"
  },
  {
    title: "High-Efficiency Tank Replacement",
    desc: "Professional installation of 40, 50, and 75-gallon gas and electric water heaters engineered for high-mineral Idaho water.",
    url: "/services/water-heater-replacement/"
  },
  {
    title: "Tankless Water Heater Installation",
    desc: "Continuous hot water systems with compact wall-mounted footprints, ideal for high-demand modern households in ${n.zip}.",
    url: "/services/tankless-water-heater-repair-installation/"
  },
  {
    title: "Annual Mineral Power Flushing",
    desc: "Specialized descaling and sediment hydro-flushes to protect heating surfaces from Eastern Snake River Plain 14.1 GPG scale.",
    url: "/services/water-heater-maintenance/"
  }
];
---

<Layout 
  title={pageTitle} 
  description={pageDescription} 
  canonicalPath="/locations/${n.slug}/"
  breadcrumbs={breadcrumbs}
  faqs={neighborhoodFaqs}
  areaServedName="${n.name}, Idaho Falls"
>
  <Breadcrumbs items={breadcrumbs} />

  <!-- Hero Section -->
  <section class="neighborhood-hero">
    <div class="container">
      <span class="section-tag">ZIP Code ${n.zip} Service Territory</span>
      <h1>${n.headline}</h1>
      <p class="neighborhood-hero-lead">
        ${n.lead}
      </p>
      <div class="hero-ctas">
        <a href="tel:+12082182108" class="btn btn-primary btn-lg">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
          Call (208) 218-2108
        </a>
        <a href="#contact" class="btn btn-outline btn-lg">
          Book Service in ${n.name}
        </a>
      </div>
    </div>
  </section>

  <TrustStrip />

  <!-- Section: Neighborhood Context & Architecture -->
  <section class="section">
    <div class="container content-container">
      <div class="content-block">
        <span class="section-tag">Local Plumbing Dynamics</span>
        <h2>Plumbing Architecture & Water Heating Demands in ${n.name}</h2>
        <p>
          Located in the ${n.zip} postal district of greater Idaho Falls, ${n.name} showcases distinct architectural styles and mechanical demands. ${n.housingStyle} Operating a residential or commercial water heating system in this environment requires an intimate understanding of local housing layouts, elevation shifts, and eastern Idaho seasonal swings.
        </p>
        <p>
          Water chemistry plays an equally decisive role in equipment longevity throughout ${n.name}. ${n.waterContext} When untreated or improperly maintained, this intense mineral density forces standard heating elements to operate at elevated temperatures, encrusts burner bottoms in rock-hard sediment, and causes premature tank leaks.
        </p>
        <p>
          At Idaho Falls Water Heater Pros, our mobile plumbing units are stationed locally on Chaffin Lane, equipped with OEM diagnostic components, commercial-grade replacement tanks, and heavy-duty descaling equipment. Whether you are dealing with a sudden 2:00 AM leak or planning an energy-efficient upgrade, our licensed team is ready to respond immediately.
        </p>
      </div>

      <!-- Featured Services Grid -->
      <div class="content-block">
        <span class="section-tag">Specialized Solutions</span>
        <h2>Tailored Water Heater Services for ${n.name} Residents</h2>
        <p>
          We align our service offerings with the specific infrastructure, fuel types, and mechanical room configurations common throughout ${n.name}.
        </p>
        <div class="grid-2">
          {featuredServices.map((srv) => (
            <div class="card">
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
              <a href={srv.url} class="btn btn-outline" style="margin-top:0.5rem; display:inline-block;">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>

      <!-- Deep Dive: Technical Challenges in This Neighborhood -->
      <div class="content-block">
        <span class="section-tag">Engineering Analysis</span>
        <h2>Specific Water Heating Challenges in ${n.name} (${n.zip})</h2>
        <p>
          Our field service records identify three primary mechanical friction points that frequently impact water heaters in this specific area:
        </p>

        <h3>1. ${n.challenge1Title}</h3>
        <p>
          ${n.challenge1Desc}
        </p>

        <h3>2. ${n.challenge2Title}</h3>
        <p>
          ${n.challenge2Desc}
        </p>

        <h3>3. ${n.challenge3Title}</h3>
        <p>
          ${n.challenge3Desc}
        </p>
      </div>

      <!-- Comparison Table -->
      <div class="content-block">
        <span class="section-tag">System Comparison</span>
        <h2>Selecting the Optimal Water Heater for Your ${n.name} Home</h2>
        <p>
          Comparing replacement equipment requires balancing upfront installation factors, fuel availability, first-hour recovery, and long-term hard water resistance.
        </p>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                ${n.tableHeaders.map(th => `<th>${th}</th>`).join('\n                ')}
              </tr>
            </thead>
            <tbody>
              ${n.tableRows.map(row => `<tr>\n                ${row.map((cell, idx) => idx === 0 ? `<td><strong>${cell}</strong></td>` : `<td>${cell}</td>`).join('\n                ')}\n              </tr>`).join('\n              ')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Local Streets & Corridors Covered -->
      <div class="content-block">
        <span class="section-tag">Local Service Corridors</span>
        <h2>Streets & Roads We Regularly Service in ${n.name}</h2>
        <p>
          Our service vehicles provide comprehensive coverage throughout all residential streets, subdivisions, and rural routes in ${n.name}, including:
        </p>
        <ul>
          ${n.streets.map(st => `<li><strong>${st}:</strong> Complete diagnostics, rapid leak repair, annual maintenance, and emergency replacements.</li>`).join('\n          ')}
        </ul>
        <p>
          We also provide prompt dispatch to neighboring districts across Bonneville County. Explore our full regional coverage on our <a href="/locations/">locations hub</a>, or check nearby neighborhood guides including <a href="/locations/ammon/">Ammon</a>, <a href="/locations/downtown-idaho-falls/">Downtown Idaho Falls</a>, and <a href="/locations/snake-river-landing/">Snake River Landing</a>.
        </p>
      </div>

      <!-- Real World Case Scenario -->
      <div class="content-block">
        <span class="section-tag">Local Case Scenario</span>
        <h2>Real-World Solution: ${n.caseTitle}</h2>
        <p>
          ${n.caseDesc}
        </p>
      </div>

      <!-- Transparent Estimates Section -->
      <div class="content-block">
        <span class="section-tag">Honest Estimates</span>
        <h2>Transparent Pricing with Upfront Estimates</h2>
        <p>
          At Idaho Falls Water Heater Pros, we believe in complete clarity and honesty. We never charge hidden travel surcharges or surprise trip fees for servicing properties in ${n.name}. 
        </p>
        <p>
          Before any repair or installation begins, our licensed technician completes an on-site multi-point evaluation and provides a clear written estimate detailing all necessary parts, labor, permits, and haul-away services. Call our dispatch team at <a href="tel:+12082182108">(208) 218-2108</a> to request an estimate today.
        </p>
      </div>

      <!-- Step-by-Step Repair vs Replacement Framework -->
      <div class="content-block">
        <span class="section-tag">Diagnostic Decision Guide</span>
        <h2>Water Heater Repair vs. Replacement: Making the Right Call in ${n.name}</h2>
        <p>
          Homeowners in ${n.name} often ask whether repairing an aging water heater makes financial sense or if replacing the unit is the more prudent investment. While minor component failures such as a faulty thermocouple, a burnt electric heating element, or a leaking drain valve can be resolved with prompt repairs, physical degradation of the tank vessel itself requires full replacement.
        </p>
        <p>
          We use a four-point diagnostic framework tailored to Bonneville County operating conditions to help you make an informed choice:
        </p>
        <ul>
          <li><strong>Age of the Appliance:</strong> The average operational lifespan of a residential tank water heater in Idaho Falls is 8 to 10 years due to the relentless 14.1 GPG mineral content of the Eastern Snake River Plain Aquifer. If your system is over eight years old and facing a repair cost exceeding 50% of a new installation, investing in a modern high-efficiency replacement is typically more economical.</li>
          <li><strong>Location of the Leak:</strong> If water is weeping from an inlet pipe fitting, an upper dielectric union, or the temperature and pressure relief valve discharge pipe, the issue is external and readily repairable. However, if water is pooling beneath the unit or seeping from behind the lower jacket seams, the inner steel cylinder has suffered glass lining failure. Internal tank leaks cannot be patched or welded; immediate replacement is mandatory to avoid catastrophic basement flooding.</li>
          <li><strong>Accumulated Mineral Scale Thickness:</strong> When tanks operate for several seasons without regular flushing, calcium carbonate settles into dense, calcified gravel layers several inches deep. If this scale has baked into a solid rock slab on the bottom head, standard flushing cannot dissolve it, and burner heat cannot penetrate efficiently. This leads to bottom-head metal fatigue and eventual cracking.</li>
          <li><strong>Energy Efficiency and Utility Costs:</strong> Older atmospheric water heaters operate with Uniform Energy Factors (UEF) between 0.52 and 0.58, losing substantial heat up the chimney flue. Modern high-efficiency power-vent units (0.70+ UEF) and condensing tankless water heaters (0.95+ UEF) consume significantly less fuel, yielding meaningful monthly savings during bitter Idaho Falls winters.</li>
        </ul>
      </div>

      <!-- Deep Dive: Seasonal Ground Temperature Physics -->
      <div class="content-block">
        <span class="section-tag">Seasonal Plumbing Science</span>
        <h2>The Impact of Eastern Idaho Winter Ground Temperatures on Water Heating</h2>
        <p>
          Plumbing physics in ${n.name} and across the ${n.zip} postal district are heavily influenced by severe seasonal climate shifts. During summer months, municipal and well water enters homes at roughly 55°F to 58°F. However, as winter arrives and sub-zero cold grips Bonneville County, groundwater temperatures plummet to between 36°F and 38°F.
        </p>
        <p>
          This drastic temperature drop significantly increases the workload placed upon your water heater:
        </p>
        <ul>
          <li><strong>Temperature Rise (Delta-T) Demands:</strong> To elevate incoming 38°F water to a standard, comfortable shower temperature of 120°F, a water heater must provide an 82°F temperature rise. In summer, the required temperature rise is only 62°F. This 32% increase in thermal workload forces gas burners and electric elements to fire for much longer durations.</li>
          <li><strong>Thermal Shock and Glass Lining Stress:</strong> When cold 38°F water rushes into an empty tank that has just been heated to 130°F, the sudden temperature gradient causes metal expansion and contraction cycles known as thermal shock. Over time, microscopic fractures form in the internal porcelain enamel glass lining, exposing raw steel to water and accelerating tank corrosion.</li>
          <li><strong>Standby Heat Loss in Unfinished Basements:</strong> Water heaters installed in cold basements, utility crawlspaces, or attached garages lose heat continuously through their metal jackets to the surrounding chilled air. Installing a high-density insulation blanket and pipe foam on the first six feet of hot and cold water lines reduces standby losses significantly.</li>
          <li><strong>Condensation Drip on Cold Gas Burners:</strong> During winter morning fill cycles, the large volume of ice-cold incoming water causes atmospheric moisture inside the combustion chamber to condense rapidly onto the cold tank bottom. Homeowners often hear a distinct sizzling sound as condensation drips onto the hot burner, frequently mistaking it for an internal tank leak. Our technicians can inspect your burner to verify whether sizzling is normal condensation or a true tank failure.</li>
        </ul>
      </div>

      <!-- Permitting, Code Compliance & Safety Regulations -->
      <div class="content-block">
        <span class="section-tag">Permits & Building Codes</span>
        <h2>Idaho State Plumbing Code Requirements for Water Heater Installations in ${n.name}</h2>
        <p>
          Installing a water heater in ${n.name} involves far more than simply connecting water lines and lighting a pilot flame. Because water heaters are pressurized vessels combining high thermal energy with combustible gas or 240-volt electrical circuits, strict adherence to the Uniform Plumbing Code as adopted by the State of Idaho is essential for household safety and property protection.
        </p>
        <p>
          When Idaho Falls Water Heater Pros completes a replacement in ${n.name}, we handle all permitting and ensure full compliance with these mandatory safety standards:
        </p>
        <ul>
          <li><strong>Plumbing Permits and City Inspections:</strong> Under Idaho Code Title 54, Chapter 26, any installation or replacement of a water heater requires an official plumbing permit. We pull all necessary permits through the <a href="https://www.idahofallsidaho.gov/" target="_blank" rel="noopener">City of Idaho Falls Building Division</a> or <a href="https://www.bonnevillecountyidaho.gov/" target="_blank" rel="noopener">Bonneville County Public Works</a> and schedule the required post-installation inspection so you have official documentation for your homeowner insurance records.</li>
          <li><strong>Calibrated Thermal Expansion Tanks:</strong> Because modern municipal water meters and backflow preventers create a closed plumbing loop, water expanding under heating cannot push backward into the city main. Without an expansion tank, pressure spikes can blow out supply hoses, burst washing machine lines, or crack the water heater itself. We install and pre-charge heavy-duty thermal expansion tanks matched to your home’s incoming static water pressure.</li>
          <li><strong>Temperature and Pressure (T&P) Relief Discharge Piping:</strong> The safety T&P valve must have a dedicated, unthreaded discharge pipe constructed of rigid copper, CPVC, or galvanized steel. It must slope downward without traps and terminate between 6 and 24 inches above the floor or floor drain to prevent scalding in the event of an emergency discharge.</li>
          <li><strong>Seismic Restraint Strapping:</strong> Eastern Idaho falls within an active seismic zone associated with the Intermountain Seismic Belt. Idaho plumbing code requires water heaters to be securely strapped to the surrounding wall framing using heavy-gauge metal seismic straps located in the upper and lower thirds of the tank cylinder to prevent tip-overs during earth tremors.</li>
          <li><strong>Combustion Air Clearances:</strong> Gas-fired water heaters require adequate fresh oxygen for safe, complete combustion. When units are enclosed in small utility rooms or finished basements, we install high and low combustion air intake grilles to prevent oxygen starvation and carbon monoxide accumulation.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <FaqAccordion faqs={neighborhoodFaqs} title="${n.name} Water Heater FAQs" />

  <!-- CTA Band -->
  <CtaBand 
    headline="Need Water Heater Service in ${n.name}?"
    subtext="Call (208) 218-2108 now for fast, licensed dispatch anywhere in ${n.name} and the ${n.zip} zip code. We are on call 24/7."
  />

  <!-- Contact Form & Map (Pure Phone CTA) -->
  <ContactForm 
    title="Schedule Service in ${n.name}" 
    subtitle="Call (208) 218-2108 directly to speak with an on-call technician and request an estimate."
    locationContext="${n.name} ${n.zip}"
  />
</Layout>

<style>
  .neighborhood-hero {
    background: linear-gradient(180deg, #f0f7fc 0%, #ffffff 100%);
    padding: 3.5rem 0 3rem 0;
    text-align: center;
    border-bottom: 1px solid var(--color-border-light);
  }

  .neighborhood-hero h1 {
    max-width: 960px;
    margin: 0 auto 1.25rem auto;
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  }

  .neighborhood-hero-lead {
    max-width: 820px;
    margin: 0 auto 2rem auto;
    font-size: 1.15rem;
    color: var(--color-text-muted);
    line-height: 1.6;
  }

  .hero-ctas {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .content-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .content-block {
    margin-bottom: 3.5rem;
  }

  .content-block h2 {
    margin-bottom: 1.25rem;
  }

  .content-block h3 {
    margin-top: 1.5rem;
    margin-bottom: 0.6rem;
    font-size: 1.25rem;
  }

  .content-block p {
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  .content-block ul {
    margin-bottom: 1.5rem;
  }

  .content-block li {
    font-size: 1.02rem;
    line-height: 1.6;
    margin-bottom: 0.65rem;
  }
</style>
`;
}

for (const n of neighborhoods) {
  const filePath = path.join(outDir, `${n.slug}.astro`);
  fs.writeFileSync(filePath, generateAstroFile(n), 'utf8');
  console.log(`Generated: ${filePath}`);
}

console.log(`Successfully generated ${neighborhoods.length} neighborhood pages!`);
