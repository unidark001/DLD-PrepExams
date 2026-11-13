window.mockExamQuestions = [
  {
    "q": "In a 4-bit serial-load shift register, how many clock pulses are needed to enter a 4-bit number completely?",
    "options": [
      "4",
      "8",
      "2",
      "1"
    ],
    "correct": 0,
    "hint": "Serial loading shifts in one bit per clock pulse, so four bits need four pulses."
  },
  {
    "q": "A small triangle symbol (>) on the clock (CLK) input of a flip-flop indicates it is:",
    "options": [
      "edge-triggered.",
      "level-triggered.",
      "a master/slave device.",
      "active-LOW."
    ],
    "correct": 0,
    "hint": "The triangle symbol marks edge-triggered operation; a bubble would indicate inversion."
  },
  {
    "q": "Using 2's complement, binary subtraction (A - B) can be performed by:",
    "options": [
      "adding A and B.",
      "finding the 2's complement of A and adding it to B.",
      "finding the 2's complement of B and adding it to A.",
      "inverting all bits of B and adding to A."
    ],
    "correct": 2,
    "hint": "Subtract B by adding its two's complement to A."
  },
  {
    "q": "Flash memory, used in USB drives and SSDs, is a specific type of:",
    "options": [
      "EEPROM",
      "DRAM",
      "Mask ROM",
      "SRAM"
    ],
    "correct": 0,
    "hint": "Flash is a form of EEPROM that is erased and programmed in blocks."
  },
  {
    "q": "Which of the following is NOT a common task for a counter?",
    "options": [
      "Count up or down",
      "Address memory",
      "Divide frequency",
      "Convert serial data to parallel"
    ],
    "correct": 3,
    "hint": "Counters track states or pulses; serial-to-parallel conversion is a shift-register function."
  },
  {
    "q": "A Hard Disk Drive (HDD) is an example of what type of secondary storage?",
    "options": [
      "Magnetic",
      "Optical",
      "Semiconductor",
      "Volatile"
    ],
    "correct": 0,
    "hint": "HDDs store data magnetically on rotating platters."
  },
  {
    "q": "The TTL 7483 IC is a:",
    "options": [
      "Quad J-K flip-flop.",
      "Mod-10 counter.",
      "4-bit binary full adder.",
      "4-bit shift register."
    ],
    "correct": 2,
    "hint": "The 7483 is a 4-bit binary full-adder IC."
  },
  {
    "q": "According to the comparison chart (Lecture 9, slide 26), which technology generally has the fastest access time?",
    "options": [
      "Disk technology (Hard disk)",
      "Optical disc",
      "Semiconductor technology (Flash memory)",
      "Tape technology"
    ],
    "correct": 2,
    "hint": "Semiconductor storage has faster access than disk, optical, or tape technologies in the cited comparison."
  },
  {
    "q": "An R-S Flip-Flop is also known as an R-S _____",
    "options": [
      "Gate",
      "Counter",
      "Latch",
      "Timer"
    ],
    "correct": 2,
    "hint": "An R-S flip-flop is also called an R-S latch."
  },
  {
    "q": "What is the 4-bit 2's complement representation of the decimal number +7?",
    "options": [
      "0111",
      "1001",
      "1000",
      "1111"
    ],
    "correct": 0,
    "hint": "Positive seven is 0111 in four-bit two's complement; positive values use ordinary binary form."
  },
  {
    "q": "What does DIP stand for in IC packaging?",
    "options": [
      "Double-Integrated Package",
      "Data Input Package",
      "Dual In-line Package",
      "Digital In-line Package"
    ],
    "correct": 2,
    "hint": "DIP means Dual In-line Package, describing its two parallel pin rows."
  },
  {
    "q": "How is the 2's complement of a binary number found?",
    "options": [
      "Add 1 to the number.",
      "Invert all bits (1's complement).",
      "Shift all bits left by one.",
      "Invert all bits (1's complement) and then add 1."
    ],
    "correct": 3,
    "hint": "Find the one's complement by inverting each bit, then add one."
  },
  {
    "q": "How many flip-flops are required to build a Mod-16 binary ripple counter?",
    "options": [
      "16",
      "8",
      "4",
      "2"
    ],
    "correct": 2,
    "hint": "A Mod-16 counter needs four flip-flops because 2^4 = 16 states."
  },
  {
    "q": "What is the term for the difference between the positive-going (V+) and negative-going (V-) switching thresholds in a Schmitt trigger?",
    "options": [
      "Toggle rate",
      "Latch-up",
      "Hysteresis",
      "Propagation delay"
    ],
    "correct": 2,
    "hint": "Hysteresis is the gap between a Schmitt trigger's rising and falling thresholds."
  },
  {
    "q": "A sequential device made of flip-flops that allows serial/parallel loading and bit-by-bit shifting is a:",
    "options": [
      "Counter",
      "ROM",
      "Multiplexer",
      "Shift register"
    ],
    "correct": 3,
    "hint": "A shift register stores data and supports serial/parallel loading or shifting."
  },
  {
    "q": "In a computer system, the volatile, fast, internal working memory (like SRAM and DRAM) is called:",
    "options": [
      "Secondary storage.",
      "Optical storage.",
      "Primary storage.",
      "Magnetic storage."
    ],
    "correct": 2,
    "hint": "SRAM and DRAM are volatile primary memory used as the system's working storage."
  },
  {
    "q": "The shift register shown in Review 1 (Lecture 7) with a single serial input and multiple parallel outputs is a:",
    "options": [
      "Serial in-parallel out (SIPO) register.",
      "Parallel in-parallel out (PIPO) register.",
      "Serial in-serial out (SISO) register.",
      "Parallel in-serial out (PISO) register."
    ],
    "correct": 0,
    "hint": "SIPO means data enters serially and is available on parallel outputs."
  },
  {
    "q": "Why are ripple counters considered asynchronous?",
    "options": [
      "They can only count in one direction.",
      "All flip-flops do not trigger at the same time.",
      "They are made of logic gates instead of flip-flops.",
      "They do not require a clock."
    ],
    "correct": 1,
    "hint": "Ripple-counter stages are clocked successively, so they do not switch simultaneously."
  },
  {
    "q": "In a computer memory system, which bus selects the specific memory location?",
    "options": [
      "Control bus",
      "Serial bus",
      "Data bus",
      "Address bus"
    ],
    "correct": 3,
    "hint": "The address bus selects the memory location; the data bus carries its contents."
  },
  {
    "q": "A counter with 16 unique states (0-15) is called a:",
    "options": [
      "Mod-4 counter.",
      "Decade counter.",
      "Mod-16 counter.",
      "Mod-15 counter."
    ],
    "correct": 2,
    "hint": "Modulus counts the distinct states in a counter cycle; 16 states give Mod-16."
  },
  {
    "q": "How is a standard EPROM erased?",
    "options": [
      "By exposing it to ultraviolet (UV) light.",
      "It cannot be erased.",
      "By rewriting it with all zeros.",
      "By applying a high voltage."
    ],
    "correct": 0,
    "hint": "EPROM is erased by ultraviolet light through its transparent window."
  },
  {
    "q": "Which type of RAM stores data in cells that need to be refreshed many times per second?",
    "options": [
      "SRAM (Static RAM)",
      "ROM",
      "NVSRAM",
      "DRAM (Dynamic RAM)"
    ],
    "correct": 3,
    "hint": "DRAM stores bits in capacitors that must be periodically refreshed."
  },
  {
    "q": "What does PISO stand for in the context of shift registers?",
    "options": [
      "Parallel In-Secondary Out",
      "Parallel In-Serial Out",
      "Primary In-Serial Out",
      "Serial In-Parallel Out"
    ],
    "correct": 1,
    "hint": "PISO means parallel input and serial output."
  },
  {
    "q": "Which inputs on the 7478 J-K flip-flop are synchronous?",
    "options": [
      "Q and Q̄",
      "Preset and Clear",
      "J and K",
      "Clock and J"
    ],
    "correct": 2,
    "hint": "J and K are the synchronous control inputs; preset and clear act asynchronously."
  },
  {
    "q": "What is the \"modulus\" of a counter?",
    "options": [
      "The number of flip-flops it contains.",
      "The number of different states in its counting cycle.",
      "The input clock frequency.",
      "The number of logic gates used."
    ],
    "correct": 1,
    "hint": "A counter's modulus is the number of unique states in its repeating cycle."
  },
  {
    "q": "What is the primary characteristic of combinational logic circuits?",
    "options": [
      "Outputs depend solely on the current input values",
      "Outputs depend on past state and current inputs",
      "Requires a master clock signal",
      "Contains feedback loops"
    ],
    "correct": 0,
    "hint": "Combinational circuits have no memory elements; outputs are a direct function of current inputs."
  },
  {
    "q": "Which gates are known as 'universal gates' because any Boolean function can be implemented using them alone?",
    "options": [
      "AND and OR",
      "NAND and NOR",
      "XOR and XNOR",
      "BUFFER and NOT"
    ],
    "correct": 1,
    "hint": "NAND and NOR gates can replicate all basic logic operations."
  },
  {
    "q": "Simplify the Boolean expression: Y = A·B + A·B'",
    "options": [
      "A",
      "B",
      "AB",
      "A + B"
    ],
    "correct": 0,
    "hint": "Factor out A: A(B + B') = A(1) = A."
  },
  {
    "q": "What does De Morgan's theorem state for the complement of a sum (A + B)'?",
    "options": [
      "A' + B'",
      "A'·B'",
      "A + B'",
      "A·B"
    ],
    "correct": 1,
    "hint": "Break the bar and change the operator: (A+B)' = A'·B'."
  },
  {
    "q": "What is the primary function of a multiplexer (MUX)?",
    "options": [
      "Routes one of many input lines to a single output line based on select lines",
      "Converts binary to decimal",
      "Decodes 7-segment displays",
      "Stores 1 bit of data"
    ],
    "correct": 0,
    "hint": "A MUX acts as a digital data selector."
  },
  {
    "q": "How many select lines are required for a 16-to-1 multiplexer?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 2,
    "hint": "2⁴ = 16, so 4 select lines are needed."
  },
  {
    "q": "What is a decoder circuit designed to do?",
    "options": [
      "Convert an n-bit binary code to up to 2^n unique output lines",
      "Convert serial data to parallel",
      "Add two numbers",
      "Compare magnitudes"
    ],
    "correct": 0,
    "hint": "Decoders activate one specific output line corresponding to the binary input code."
  },
  {
    "q": "What is a hazard in combinational logic circuits?",
    "options": [
      "An unwanted temporary glitch or spike in output due to unequal propagation delays",
      "Permanent short circuit",
      "Overheating of the silicon die",
      "Clock skew"
    ],
    "correct": 0,
    "hint": "Hazards occur when different signal paths have varying propagation delays."
  },
  {
    "q": "What is the fundamental difference between combinational and sequential logic?",
    "options": [
      "Sequential logic incorporates memory elements and feedback loops",
      "Sequential logic is always faster",
      "Combinational logic uses clock signals",
      "Sequential logic cannot use NAND gates"
    ],
    "correct": 0,
    "hint": "Sequential circuits store state history using feedback."
  },
  {
    "q": "What condition must be avoided in an unclocked S-R latch built with NOR gates?",
    "options": [
      "S=0, R=0",
      "S=1, R=0",
      "S=0, R=1",
      "S=1, R=1"
    ],
    "correct": 3,
    "hint": "S=1 and R=1 forces both outputs to 0, leading to an invalid/unstable state."
  },
  {
    "q": "What is the characteristic behavior of a D flip-flop?",
    "options": [
      "Output Q copies input D on the active clock edge",
      "Output toggles every clock cycle",
      "Output stays at 0 permanently",
      "Output is the sum of inputs"
    ],
    "correct": 0,
    "hint": "D stands for Delay or Data; Q(next) = D."
  },
  {
    "q": "What happens in a J-K flip-flop when both J=1 and K=1?",
    "options": [
      "Set",
      "Reset",
      "Toggle (reverses current state)",
      "No change"
    ],
    "correct": 2,
    "hint": "J=K=1 causes the output to complement/toggle on each clock edge."
  },
  {
    "q": "What is setup time in a flip-flop?",
    "options": [
      "Minimum time data must remain stable BEFORE the active clock edge",
      "Time required to boot",
      "Time data remains after clock",
      "Propagation delay of output"
    ],
    "correct": 0,
    "hint": "Setup time ensures reliable data capture during clock transitions."
  },
  {
    "q": "What is the main advantage of edge-triggering over level-triggering?",
    "options": [
      "Prevents transparency race conditions during the active clock pulse window",
      "Consumes less power",
      "Allows faster voltage swings",
      "Eliminates all gates"
    ],
    "correct": 0,
    "hint": "Edge-triggering samples inputs instantaneously at the clock edge."
  },
  {
    "q": "What is a Mealy state machine?",
    "options": [
      "A finite state machine where outputs depend on current state AND present inputs",
      "Outputs depend strictly on the current state",
      "A machine with no feedback",
      "An analog controller"
    ],
    "correct": 0,
    "hint": "Mealy outputs change asynchronously when inputs change."
  },
  {
    "q": "What is a Moore state machine?",
    "options": [
      "A finite state machine where outputs depend solely on the current state",
      "Outputs depend on inputs",
      "Random output generator",
      "Combinational only"
    ],
    "correct": 0,
    "hint": "Moore outputs are synchronized strictly to state clock transitions."
  },
  {
    "q": "What is the primary function of a digital counter?",
    "options": [
      "To count clock pulses or periodic events",
      "To add two binary numbers",
      "To shift data serially",
      "To amplify voltage"
    ],
    "correct": 0,
    "hint": "Counters track the number of clock pulses received."
  },
  {
    "q": "What is an asynchronous (ripple) counter?",
    "options": [
      "Flip-flops are cascaded so the output of one clocks the next stage",
      "All flip-flops share the exact same clock simultaneously",
      "Counter with no clock",
      "Counter with random output"
    ],
    "correct": 0,
    "hint": "Ripple counters ripple the clock through successive stages, causing propagation delay accumulation."
  },
  {
    "q": "What distinguishes a synchronous counter from an asynchronous counter?",
    "options": [
      "All flip-flops are clocked simultaneously by a common clock pulse",
      "Synchronous counters are slower",
      "Synchronous counters use no flip-flops",
      "Asynchronous counters never use logic gates"
    ],
    "correct": 0,
    "hint": "Synchronous counters eliminate ripple delay by clocking all FFs at once."
  },
  {
    "q": "How many flip-flops are required to construct a Mod-16 binary counter?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "correct": 1,
    "hint": "2⁴ = 16 states, so 4 flip-flops."
  },
  {
    "q": "What is a decade counter (Mod-10)?",
    "options": [
      "A counter that counts through 10 states (0 through 9) before recycling",
      "A counter with 10 outputs",
      "A 10-bit counter",
      "A counter that runs for 10 seconds"
    ],
    "correct": 0,
    "hint": "Decade counters reset after counting 0 to 9."
  },
  {
    "q": "What is a Johnson counter (twisted-ring counter)?",
    "options": [
      "A shift register with inverted feedback from the last output back to the serial input",
      "A counter shaped like a ring",
      "An audio counter",
      "An asynchronous ripple counter"
    ],
    "correct": 0,
    "hint": "An n-stage Johnson counter generates 2n decoding states."
  },
  {
    "q": "What causes glitches in asynchronous ripple counters?",
    "options": [
      "Cumulative propagation delays across cascaded stages",
      "High battery voltage",
      "Good soldering",
      "Using synchronous clocks"
    ],
    "correct": 0,
    "hint": "Ripple delay creates temporary false output decoding states."
  },
  {
    "q": "How do you achieve a frequency division of 10 using counters?",
    "options": [
      "Using a Mod-10 decade counter",
      "Using a 1-bit flip-flop",
      "Using a resistor network",
      "Connecting to ground"
    ],
    "correct": 0,
    "hint": "A Mod-N counter divides the input clock frequency by N."
  },
  {
    "q": "What is the primary function of a shift register?",
    "options": [
      "To store and shift digital data bits serially or in parallel",
      "To perform arithmetic division",
      "To display graphics",
      "To generate clock signals"
    ],
    "correct": 0,
    "hint": "Shift registers shift data bits left or right upon clock pulses."
  },
  {
    "q": "What does SIPO stand for in shift register configurations?",
    "options": [
      "Serial-In, Parallel-Out",
      "Single-Input, Parallel-Output",
      "Synchronous-In, Protected-Out",
      "Serial-In, Serial-Out"
    ],
    "correct": 0,
    "hint": "Data enters serially bit-by-bit and is read out simultaneously in parallel."
  },
  {
    "q": "What is PISO (Parallel-In, Serial-Out) used for?",
    "options": [
      "Converting parallel data bytes into serial data streams for transmission",
      "Displaying numbers on LEDs",
      "Counting pulses",
      "Inverting signals"
    ],
    "correct": 0,
    "hint": "PISO serializes parallel data for transmission over a single communication line."
  },
  {
    "q": "How many clock pulses are required to load an 8-bit word serially into an 8-bit shift register?",
    "options": [
      "1",
      "4",
      "8",
      "16"
    ],
    "correct": 2,
    "hint": "Serial loading takes one clock cycle per bit."
  },
  {
    "q": "What is a universal shift register?",
    "options": [
      "A versatile IC supporting serial/parallel input/output and bidirectional shifting modes",
      "A register used worldwide",
      "A register with no clock",
      "A ROM chip"
    ],
    "correct": 0,
    "hint": "Universal shift registers (e.g., 74LS194) can perform SISO, SIPO, PISO, and PIPO."
  },
  {
    "q": "What is a Linear Feedback Shift Register (LFSR) commonly used for?",
    "options": [
      "Pseudorandom number generation and CRC error checking",
      "Linear voltage amplification",
      "Binary addition",
      "Display driving"
    ],
    "correct": 0,
    "hint": "LFSRs use XOR feedback taps to generate pseudorandom binary sequences."
  },
  {
    "q": "What is an arithmetic left shift operation equivalent to?",
    "options": [
      "Multiplying the binary number by 2",
      "Dividing the binary number by 2",
      "Clearing all bits",
      "Inverting bits"
    ],
    "correct": 0,
    "hint": "Shifting bits left by 1 multiplies the numerical weight by 2."
  },
  {
    "q": "Why is the all-zeros state forbidden in standard maximal-length XOR LFSRs?",
    "options": [
      "Because XOR feedback with all zeros yields zero permanently (lockup)",
      "It consumes too much power",
      "It blows fuses",
      "It overflows memory"
    ],
    "correct": 0,
    "hint": "Once an LFSR enters all-zeros with simple XOR feedback, it cannot escape."
  },
  {
    "q": "What is the primary difference between RAM and ROM?",
    "options": [
      "RAM is volatile (lost on power-off); ROM is non-volatile (permanent)",
      "RAM is read-only",
      "ROM is faster than RAM",
      "RAM stores only text"
    ],
    "correct": 0,
    "hint": "RAM = Random Access Memory (volatile); ROM = Read-Only Memory (non-volatile)."
  },
  {
    "q": "What distinguishes SRAM from DRAM?",
    "options": [
      "SRAM uses flip-flop latches and needs no refresh; DRAM uses capacitors and requires periodic refreshing",
      "SRAM is volatile, DRAM is non-volatile",
      "DRAM is faster than SRAM",
      "SRAM is cheaper"
    ],
    "correct": 0,
    "hint": "SRAM is fast and static; DRAM is dense, slower, and dynamic."
  },
  {
    "q": "What is EEPROM?",
    "options": [
      "Electrically Erasable Programmable ROM; can be erased and rewritten electrically",
      "Extended EPROM",
      "Energy Efficient PROM",
      "Embedded RAM"
    ],
    "correct": 0,
    "hint": "EEPROM allows byte-level electrical erasure without ultraviolet light."
  },
  {
    "q": "What is Flash memory?",
    "options": [
      "A type of EEPROM that is erased and programmed in large block sectors",
      "Fast RAM cache",
      "Volatile register",
      "Optical storage"
    ],
    "correct": 0,
    "hint": "Flash memory powers modern SSDs and USB flash drives."
  },
  {
    "q": "What is the storage capacity of a memory IC with 12 address lines (A0-A11) and 8 data lines?",
    "options": [
      "4096 bytes (4 KB)",
      "1024 bytes (1 KB)",
      "8192 bytes (8 KB)",
      "65536 bytes (64 KB)"
    ],
    "correct": 0,
    "hint": "2¹² = 4096 locations, each holding 8 bits (1 byte) -> 4 KB."
  },
  {
    "q": "What is the purpose of Chip Select (CS) or Chip Enable (CE) pins on memory chips?",
    "options": [
      "To enable or disable the specific memory chip in multi-chip memory arrays",
      "To select read or write mode",
      "To supply power",
      "To ground the chip"
    ],
    "correct": 0,
    "hint": "CS enables the chip for bus communication."
  },
  {
    "q": "Why is SRAM used for CPU cache memory instead of DRAM?",
    "options": [
      "SRAM is significantly faster (no refresh latency)",
      "SRAM is much cheaper",
      "SRAM holds more data",
      "SRAM is non-volatile"
    ],
    "correct": 0,
    "hint": "Speed is critical for CPU caches, making SRAM ideal despite higher cost."
  },
  {
    "q": "What is memory bandwidth?",
    "options": [
      "The rate at which data can be read from or stored into memory",
      "Physical width of memory chip",
      "Number of address lines",
      "Power consumption"
    ],
    "correct": 0,
    "hint": "Bandwidth measures the data transfer rate over time."
  }
];
