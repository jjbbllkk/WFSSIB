var q0 = {
    h1: "What f#&king synthesizer should I buy?",
	h3: "A terrible guide to fuel your terrible GAS",
    button_text : ["Bring It On"],
	button_target: [1],
	returns_to: [0],
	need_prev: false,
};

var q1 = {
    h1: "Modular or no?",
	h3: "",
    button_text: ["Modular", "What?", "No"],
	button_target: [2, 7, 9],
	returns_to: [0],
	need_prev: false,
};

var q2 = {
    h1: "Are you new to modular?",
	h3: "",
    button_text: ["Yes", "No"],
	button_target: [3, 4, 7],
	returns_to: [1],
	need_prev: true,
};

var q3 = {
    h1: "How fucking brave are you?",
	h3: "",
    button_text: ["Hold Me", "Witness!"],
	button_target: [5, 6],
	returns_to: [2],
	need_prev: true,
};

var q4 = {
    h1: "I dont know shit about advanced modular...",
	h3: "...but I would get a fucking Mutable Instruments Clouds because granular synthesis is awesome, a Monome Teletype because it's a fucking computer you can use as a 4-track sequencer, one of those sweet Bastl CV Trinity things, and a motherfucking Intellijel Cylonix Shapeshifter because digital waveforms and wavetables are cool and analog waveforms are fucking boring.",
    button_text: [],
	button_target: [],
	returns_to: [2],
	need_prev: true,
};

var q5 = {
    h1: "Get a Moog Mother 32",
	h3: "It's a semi-modular single-VCO analog synth that doesn't take too much fucking brains to get working but will let you dip your tiny precious toes into the big scary world of patching your own fucking shit.",
    button_text: [],
	button_target: [],
	returns_to: [3],
	need_prev: true,
};

var q6 = {
    h1: "Get a Make Noise 0-Coast.",
	h3: "Fuck, move to Portland while you're at it. At least that way you'll be at ground-fucking-zero to buy this sweet fucking single-voice modular when it comes out. Pick it up from Control Voltage drunk one night and then brag about it on Gearslutz.",
    button_text: [],
	button_target: [],
	returns_to: [3],
	need_prev: true,
};

var q7 = {
    h1: "Modular Synthesizers : ",
	h3: "A bunch of random shit patched together with brightly colored cables that will bankrupt you and ruin any relationship with humanity you may have.",
    button_text: ["Sure", "Nope"],
	button_target: [2, 9],
	returns_to: [1],
	need_prev: true,
};

var q8 = {
    h1: "Are you f#&king kidding me?",
	h3: "I don't have time to write a billion versions of every single goddamn thing here just to protect your delicate sensibilities.",
    button_text: ["OK Fine!"],
	button_target: [0],
	returns_to: [0],
	need_prev: false,
};

var q9 = {
    h1: "Want something easily portable?",
	h3: "",
    button_text: ["Smaller is good", "Bigger is better"],
	button_target: [10, 47],
	returns_to: [1],
	need_prev: true,
};

var q10 = {
    h1: "Runs on batteries?",
	h3: "",
    button_text: ["Fuck yes", "No thanks"],
	button_target: [11, 20],
	returns_to: [9],
	need_prev: true,
};

var q11 = {
    h1: "Real keyboard?",
	h3: "",
    button_text: ["Ya", "No"],
	button_target: [12, 17],
	returns_to: [10],
	need_prev: true,
};

var q12 = {
    h1: "Like knobs?",
	h3: "",
    button_text: ["I Love Knob", "I Hate Fun"],
	button_target: [13, 14],
	returns_to: [11],
	need_prev: true,
};

var q13 = {
    h1: "Get a Roland GAIA SH-01",
	h3: "It's your lucky day, because this 3 part virtual anaglog synth is fucking awesome. $599 gets you 64 notes of polyphony, tons of effects, and a metric buttload of knobs, sliders, and controls. Oh, yeah, and it can run on batteries for like, 5 fucking hours!",
    button_text: [],
	button_target: [],
	returns_to: [12],
	need_prev: true,
};

var q14 = {
    h1: "Need a vocoder?",
	h3: "",
    button_text: ["Ayup", "Nope"],
	button_target: [16, 15],
	returns_to: [12],
	need_prev: true,
};

var q15 = {
    h1: "Get a Yamaha Reface",
	h3: "These fuckers are super portable, dead simple, and come in a variety of flavors. You can get a chill little analog modeling synth (reface CS), and a totally fucking sweet FM synth (reface DX). Yeah, I'm not going to mention the other two because who the fuck cares. You want the FM one, I promise.",
    button_text: [],
	button_target: [],
	returns_to: [14],
	need_prev: true,
};

var q16 = {
    h1: "Get a Korg MicroKorg",
	h3: "Relatively cheap, portable, and capable as hell. Take it on the fucking train with some headphones and vocode yourself until people give you weird looks. The XL version gives you 8 notes of polyphony over the original's 4, and sweet fucking USB MIDI. Simple, effective, and fun.",
    button_text: [],
	button_target: [],
	returns_to: [14],
	need_prev: true,
};

var q17 = {
    h1: "Need analog oscillators?",
	h3: "",
    button_text: ["Yup", "Nope"],
	button_target: [18, 19],
	returns_to: [11],
	need_prev: true,
};

var q18 = {
    h1: "Get a Korg Volca",
	h3: "The Volca Bass and Volca Keys are cheap little motherfuckers that deliver big fun in a tiny fucking package. You can even chain them together and jam the fuck out because these little bastards have step-sequencers built into them and sync via a stereo minijack cable.",
    button_text: [],
	button_target: [],
	returns_to: [17],
	need_prev: true,
};

var q19 = {
    h1: "Get a Roland Boutique",
	h3: "Who the fuck doesn't want a tiny, great sounding emulation of a Juno, JX-3p, or Jupiter on their desk? If you can get over the basically invisible controls that make you feel like fucking Gulliver playing video games with a Lilliputian XBOX controller you're going to have a great fucking time.",
    button_text: [],
	button_target: [],
	returns_to: [17],
	need_prev: true,
};

var q20 = {
    h1: "Real keyboard?",
	h3: "",
    button_text: ["Of course", "No need"],
	button_target: [21, 30],
	returns_to: [10],
	need_prev: true,
};

var q21 = {
    h1: "Want analog oscillators?",
	h3: "",
    button_text: ["Yes", "No"],
	button_target: [22, 25],
	returns_to: [20],
	need_prev: true,
};

var q22 = {
    h1: "What's your polyphony proclivity?",
	h3: "",
    button_text: ["Monophonic", "Polyphonic"],
	button_target: [23, 24],
	returns_to: [21],
	need_prev: true,
};

var q23 = {
    h1: "Get an Atruria MicroBrute or Novation Bass Station II",
	h3: "People fucking love the Arturia baby Brutes for their analog signal path and simplicity of use. Controls laid out all chill, WYSIWYG as fuck. The Bass Station II is pretty fucking sweet too and hooks you up with a little more functionality. Go fucking put your disgusting paws on them and pick which you like better.",
    button_text: [],
	button_target: [],
	returns_to: [22],
	need_prev: true,
};

var q24 = {
    h1: "Get a Roland JD-Xi",
	h3: "OK fine, the polyphony on this fucker is via it's digital engine which is paired with a single monophonic analog voice. Don't fucking bitch at me, I like this thing. It's portlable, sequences, has multiple parts (including drums), a bunch of effects, and a fucking vocoder. Take it on the train and write shit with it. Or don't, I don't care.",
    button_text: [],
	button_target: [],
	returns_to: [22],
	need_prev: true,
};

var q25 = {
    h1: "Do you like knobs and sliders and shit?",
	h3: "",
    button_text: ["Fuck Yeah", "I Hate Them"],
	button_target: [26, 27],
	returns_to: [21],
	need_prev: true,
};

var q26 = {
    h1: "Get a Roland GAIA SH-01",
	h3: "It's your lucky day, because this 3 part virtual anaglog synth is fucking awesome. $599 gets you 64 notes of polyphony, tons of effects, and a metric buttload of knobs, sliders, and controls. Oh, yeah, and it can run on batteries for like, 5 fucking hours!",
    button_text: [],
	button_target: [],
	returns_to: [25],
	need_prev: true,
};

var q27 = {
    h1: "Do you need a vocoder?",
	h3: "",
    button_text: ["Vocowhat?", "Of Course"],
	button_target: [28, 29],
	returns_to: [25],
	need_prev: true,
};

var q28 = {
    h1: "Get a Yamaha Reface",
	h3: "These fuckers are super portable, dead simple, and come in a variety of flavors. You can get a chill little analog modeling synth (reface CS), and a totally fucking sweet FM synth (reface DX). Yeah, I'm not going to mention the other two because who the fuck cares. You want the FM one, I promise.",
    button_text: [],
	button_target: [],
	returns_to: [27],
	need_prev: true,
};

var q29 = {
    h1: "Get a Korg MicroKorg or a Novation MiniNova",
	h3: "I don't care which one of these you get, but I would probably get a MiniNova. Yeah, the Korg is classic or whatever, but the Novation gives you a shit-ton more polyphony and better effects. Both are probably a pain in the ass to program due to lack of knobs, but don't let that stop you. Play 'em both and make a fucking choice already.",
    button_text: [],
	button_target: [],
	returns_to: [27],
	need_prev: true,
};

var q30 = {
    h1: "You looking for analog or digital?",
	h3: "",
    button_text: ["Analog", "Digital"],
	button_target: [36, 31],
	returns_to: [20],
	need_prev: true,
};

var q31 = {
    h1: "What about analog filters?",
	h3: "",
    button_text: ["Nope", "Yarp"],
	button_target: [33, 32],
	returns_to: [30],
	need_prev: true,
};

var q32 = {
    h1: "Get a DSI Prophet 12 Module",
	h3: "Crazy digital oscillators coupled with badass anolog filters, an arpeggiator, multiple synthesis types, and a Character section to mangle things. This fucker is a sound designer's wet dream. Pair it with a good reverb and never leave the house again.",
    button_text: [],
	button_target: [],
	returns_to: [31],
	need_prev: true,
};

var q33 = {
    h1: "How many knobs?",
	h3: "",
    button_text: ["I hate knob", "I love knob"],
	button_target: [34, 35],
	returns_to: [31],
	need_prev: true,
};

var q34 = {
    h1: "Get a Waldorf Blofeld",
	h3: "Holy shit people fucking love these things, and with good reason : underneath that cold, almost completely smooth exterior lives the heart of a beast. This multitimbral fucker can do a shit ton of different kinds of synthesis, (subtractive, wavetable, FM) it's got effects, decent polyphony, and a great user community. You and your knob-hating ass are in for a treat.",
    button_text: [],
	button_target: [],
	returns_to: [33],
	need_prev: true,
};

var q35 = {
    h1: "Get a Virus TI2 Desktop",
	h3: "The Virus TI2s are arguably the best digital synths out there. You can do anything with this fucking box, including hook it up to your computer and use it as a multitimbral VST. Subtractive, wavetable, FM, effects, tons of modulation options. You'll spend hardly any time menu-diving because, fuck, there's knobs all over this thing. Is it expensive? Yeah, sure... but you're fucking worth it.",
    button_text: [],
	button_target: [],
	returns_to: [33],
	need_prev: true,
};

var q36 = {
    h1: "Ever play chords?",
	h3: "",
    button_text: ["Nope", "I does"],
	button_target: [37, 40],
	returns_to: [30],
	need_prev: true,
};

var q37 = {
    h1: "Complexity or Simplicity?",
	h3: "",
    button_text: ["Complexity", "Simplicity"],
	button_target: [38, 39],
	returns_to: [36],
	need_prev: true,
};

var q38 = {
    h1: "Get a DSI Evolver",
	h3: "This weird little fuck sports 2 analog oscillators and 2 digital wavetable oscillators, a step sequencer, 3 separate delays, and a sweet blue paint job. Oh, and it likes to process external signals. Like, really likes to. Once you wrap your head around how to program it you're gonna have a real good time.",
    button_text: [],
	button_target: [],
	returns_to: [37],
	need_prev: true,
};

var q39 = {
    h1: "Get a Korg Volca Bass",
	h3: "It's an undeniable classic at this point : analog 303-esque sounds and sequences in a tiny little package and price. Pretty much 1 for 1 controls, too. Everyone seems to fucking love them, and considering what you get for under $200, it's not hard to see why.",
    button_text: [],
	button_target: [],
	returns_to: [37],
	need_prev: true,
};

var q40 = {
    h1: "1 for 1 controls?",
	h3: "",
    button_text: ["Oh yes", "Oh no"],
	button_target: [41, 44],
	returns_to: [36],
	need_prev: true,
};

var q41 = {
    h1: "Made of Money?",
	h3: "",
    button_text: ["Things are tight", "Rolling in it"],
	button_target: [42, 43],
	returns_to: [40],
	need_prev: true,
};

var q42 = {
    h1: "Get the Korg Volca Keys",
	h3: "3 voice portable polyphonic synth with lots of hands-on control at a price you can't fucking beat. What more do you want? Sequencing, battery power, and delay? Fine, asshole, you got it.",
    button_text: [],
	button_target: [],
	returns_to: [41],
	need_prev: true,
};

var q43 = {
    h1: "Get a DSI Prophet-6 or Prophet '08 Desktop",
	h3: "Analog as fuck, covered with knobs to tweak, these are the fucking cadillac of analog desktop units made by one of the dudes who basically invented MIDI. The 6 is a pure analog VCO while the '08 sports analog DCOs, but who the fuck cares, they're both great. Get the Prophet-6 if you want extensive internal effects.",
    button_text: [],
	button_target: [],
	returns_to: [41],
	need_prev: true,
};

var q44 = {
    h1: "Price?",
	h3: "",
    button_text: ["Under $1k", "Over $1k"],
	button_target: [45, 46],
	returns_to: [40],
	need_prev: true,
};

var q45 = {
    h1: "Get a DSI Tetra",
	h3: "A 4-part multitimbral motherfucking analog DCO animal with step sequencing and a super flexible mod matrix. For chords or crazy 4-part sequenced chaos, it's really hard to go wrong with a Tetra unless you want internal effects other than distortion. With 4 notes you can play a minor 7th so you're basically a master of house music now.",
    button_text: [],
	button_target: [],
	returns_to: [44],
	need_prev: true,
};

var q46 = {
    h1: "Get an Elektron Analog Four",
	h3: "Like a cold, inscrutable, button-covered lover, the Elektron Analog Four will take some time to warm up to. It's not exactly easy to understand, but that's partly because of all the goddamn fucking raw power they shoved in this thing. 4 analog voices, some decent effects, and one of the most powerful 6-track (yes, 6) sequencers ever shoved in an analog synth add up to an impressive package. Once you've wrapped your head around the interface you're going to have a good time.",
    button_text: [],
	button_target: [],
	returns_to: [44],
	need_prev: true,
};

var q47 = {
    h1: "Analog or digial oscillators?",
	h3: "",
    button_text: ["Analog", "Digital", "Both"],
	button_target: [57, 49, 48],
	returns_to: [9],
	need_prev: true,
};

var q48 = {
    h1: "Get a Roland JD-XA",
	h3: "Roland's new flagship synth combines 4 analog and 64 digital voices into a butt-ugly, highly capabale package. You can only touch this with gloves, otherwise the cumulated effects of cleaning off fingerprints will cause it to disintegrate. There are both analog and digital filters, a sweet effects section, and a motherfucking vocoder. Did I mention it can sequence both 8 internal and external tracks?",
    button_text: [],
	button_target: [],
	returns_to: [47],
	need_prev: true,
};

var q49 = {
    h1: "You looking for, like, a shitload of knobs?",
	h3: "",
    button_text: ["Yes"],
	button_target: [50],
	returns_to: [47],
	need_prev: true,
};

var q50 = {
    h1: "Is fully featured multitimbrality a dealbreaker?",
	h3: "",
    button_text: ["Yes", "What?", "No"],
	button_target: [51, 54, 55],
	returns_to: [49],
	need_prev: true,
};

var q51 = {
    h1: "How important?",
	h3: "",
    button_text: ["Ungodly So", "Marginally So"],
	button_target: [52, 53],
	returns_to: [50],
	need_prev: true,
};

var q52 = {
    h1: "Get an Access Virus TI2 Polar",
	h3: "The Virus TI2s are arguably the best digital synths out there. You can do anything with this fucking box, including hook it up to your computer and use it as a 16 part multitimbral VST. Subtractive, wavetable, FM, effects, tons of modulation options. You'll spend hardly any time menu-diving because, fuck, there's knobs all over this thing. Is it expensive? Yeah, sure... but you're fucking worth it.",
    button_text: [],
	button_target: [],
	returns_to: [51],
	need_prev: true,
};

var q53 = {
    h1: "Get a Nord Lead A1 or Nord Lead 4",
	h3: "The Nords have remained some of the most popular virtual analog synths for over 30 years and are featured on countles records. No I don't have time to list them, jesus fucking christ. I'm too busy playing with this sweet wooden mod-stick thing and dialing in sounds for the next fucking T-Swift record. The A1 will get you 6 more voices of polyphony, extra waveforms, and more effects. ",
    button_text: [],
	button_target: [],
	returns_to: [51],
	need_prev: true,
};

var q54 = {
    h1: "Multitimbrality : ",
	h3: "It's like, when the synth is so badass one synth part playing at once isn't awesome enough for it, so you get to play multiple patches at once. You can use a sequencer to access multiple MIDI channels in the synth and have each channel play back a distinct sound. Usually your only limit is the synth's polyphony. That and your miserly imagination.",
    button_text: ["Oh"],
	button_target: [50],
	returns_to: [50],
	need_prev: true,
};

var q55 = {
    h1: "You OK with getting one of the most awesome synths out there?",
	h3: "",
    button_text: ["Bro"],
	button_target: [56],
	returns_to: [50],
	need_prev: true,
};

var q56 = {
    h1: "Get a DSI Prophet 12",
	h3: "This motherfucker right here may just be the dopest synth ever to combine digital waveforms with analog oscillators. Subtractive, wavetable, and FM synthesis, 4 LFOs, a mod matrix to die for, 4 part delay: it's a sound-designer's wet dream. I heard Dave Smith sent one to Trent Reznor and Trent literally died from tumescence. Pair this with a good reverb and never leave the house again.",
    button_text: [],
	button_target: [],
	returns_to: [55],
	need_prev: true,
};

var q57 = {
    h1: "How many notes you gonna play at once?",
	h3: "",
    button_text: ["Just one", "A fewish"],
	button_target: [58, 65],
	returns_to: [47],
	need_prev: true,
};

var q58 = {
    h1: "Do you feel inadequate, sexually?",
	h3: "",
    button_text: ["Yes", "No"],
	button_target: [59, 62],
	returns_to: [57],
	need_prev: true,
};

var q59 = {
    h1: "Are you scared of new things?",
	h3: "",
    button_text: ["Yes", "No"],
	button_target: [60, 61],
	returns_to: [58],
	need_prev: true,
};

var q60 = {
    h1: "Get a Minimoog Voyager Performer Addition",
	h3: "Jesus fucking christ there's a lot of Moog Voyagers. Why the fuck do we need so many to choose from? We don't. Just this one. You get the legendary sound of a Moog with 3 oscillators, sync, FM, a mixer module, amazing filters, and pretty good modulation routing. Oh, and there's a fucking touchpad on this beast so you can throw away your computer mouse and start being real. Throw your computer away, too, while you're at it. You won't need it after you get this synth.",
    button_text: [],
	button_target: [],
	returns_to: [59],
	need_prev: true,
};

var q61 = {
    h1: "Get an Arturia MatrixBrute",
	h3: "When this was revealed at NAMM or NARM or NCAA or whatever the fuck people were like, holy shit what the fuck even is that. I mean, it's a pretty striking synth what with 1-1 controls bristling everywhere and a gigantic fucking mod matrix of buttons that also acts as it's sequencer and preset bank. It really does beg to be touched. This giant fuckface can also interact with external CV gear, so maybe you'll have an excuse to call your weird modular friends who you haven't seen in over a year.",
    button_text: [],
	button_target: [],
	returns_to: [59],
	need_prev: true,
};

var q62 = {
    h1: "How much you wanna spend?",
	h3: "",
    button_text: ["Under $1k", "Over $1k"],
	button_target: [63, 64],
	returns_to: [58],
	need_prev: true,
};

var q63 = {
    h1: "Get a Moog Sub Phatty",
	h3: "Big Moog sound, tiny Moog price. 2 oscillators, 1 sub, and 1 noise, lots of hands-on controls. That's all you need, bro! Mod matrix isn't astounding, but you'll make do. This little dude will be great at parties or in your tiny studio apartment where you spend 99% of your time, crying. Probably would make a great synth for a touring band, too, if you ever left the fucking house.",
    button_text: [],
	button_target: [],
	returns_to: [62],
	need_prev: true,
};

var q64 = {
    h1: "Get a Moog Sub 37",
	h3: "I lied, this thing can actually play two notes. Fuck you, it's a bonus, don't look at me that way. Look at the synth : it's motherfucking beautiful. 1 for 1 controls, 100% analog signal path. The mod destination list is absolutely batshit, so you'll never get bored. Plus it's a Moog. You can't go wrong with a Moog.",
    button_text: [],
	button_target: [],
	returns_to: [62],
	need_prev: true,
};

var q65 = {
    h1: "How much you wanna spend?",
	h3: "",
    button_text: ["Under $1k", "Over $1k"],
	button_target: [66, 69],
	returns_to: [57],
	need_prev: true,
};

var q66 = {
    h1: "How big are your hands?",
	h3: "",
    button_text: ["Dainty pixie hands", "Normal human hands"],
	button_target: [67, 68],
	returns_to: [65],
	need_prev: true,
};


var q67 = {
    h1: "Get a Korg minilogue",
	h3: "When this was announced by Korg the synthesizer internet thought they had been kidnapped by Doctor Who and dumped in an alternate dimension. A $500 4-voice analog poly synth with 1-for-1 controls? With delay and a polyphonic step sequencer? Wait, is that a fucking OLED oscilloscope that can also process external signals? Fuck me. If you don't mind mini-keys, just buy it already.",
    button_text: [],
	button_target: [],
	returns_to: [66],
	need_prev: true,
};

var q68 = {
    h1: "Get a DSI Mopho x4",
	h3: "A four-voice, all analog synth with a four part step sequencer and USB MIDI. Keyboard is the real deal, not some mini shit, and controls are 1-for-1. Mod matrix on point, too. Want to play minor 7ths? You can do that. Want to create a patch with all four voices doing different shit? Go ahead. No one is stopping you. Knock yourself out.",
    button_text: [],
	button_target: [],
	returns_to: [66],
	need_prev: true,
};

var q69 = {
    h1: "Do you like to touch all the parameters at once?",
	h3: "",
    button_text: ["Yes", "No"],
	button_target: [71, 70],
	returns_to: [65],
	need_prev: true,
};

var q70 = {
    h1: "Get an Elektron Analog Four Keys",
	h3: "Like a cold, inscrutable, button-covered lover, the Elektron Analog Four Keys will take some time to warm up to. It's not exactly easy to understand, but that's partly because of all the goddamn fucking raw power they shoved in this thing. 4 analog voices, some decent effects, and one of the most powerful 6-track (yes, 6) sequencers ever shoved in an analog synth add up to an impressive package. Oh yeah, this version has a joystick too. Once you've wrapped your head around the interface you're going to have a good time.",
    button_text: [],
	button_target: [],
	returns_to: [69],
	need_prev: true,
};

var q71 = {
    h1: "You want EFX, some live EFX?",
	h3: "",
    button_text: ["Yes", "No"],
	button_target: [72, 73],
	returns_to: [69],
	need_prev: true,
};

var q72 = {
    h1: "Get a DSI Prophet-6 or a OB-6",
	h3: "For a while Dave Smith was all like, fuck you I don't want to make re-issues of all my classic synths. But the internet was too strong and went to his house and forced him, and now we've got these fucking awesome keyboards. All analog, 6 voices, onboard sequencer and great effects. These two aren't terribly different, except the OB-6 includes architecture from the classic Oberheim designs. Just get both.",
    button_text: [],
	button_target: [],
	returns_to: [71],
	need_prev: true,
};

var q73 = {
    h1: "Get a DSI Prophet '08",
	h3: "Your life will be better, your skin will clear up, your hair will look great, and you'll have 8 voices of analog DCO in a supremely stable analog performance synth that will always love you. It has no internal effects, but it does have a split/stack feature and a step sequencer and just go buy the fucking thing already what are you waiting for. Seriously, it's great.",
    button_text: [],
	button_target: [],
	returns_to: [71],
	need_prev: true,
};

var qArray = [q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,q34,q35,q36,q37,q38,q39,q40,q41,q42,q43,q44,q45,q46,q47,q48,q49,q50,q51,q52,q53,q54,q55,q56,q57,q58,q59,q60,q61,q62,q63,q64,q65,q66,q67,q68,q69,q70,q71,q72,q73];

//THIS DRAWS THE PAGE

var drawPage = function (z) {
	
	//Grabs Main Heading From Array
	
	$('#main_heading').text(qArray[z].h1);
	
	//Grabs Sub Heading From Array
	 		
	$('#subheading').text(qArray[z].h3);
	
	//Empties Option Group (BUTTONS)
	
	$('.option-group').empty();
	$('.previous-button').empty();
	$('#startover').empty();
	$('#startover').html('<div style = "opacity: 0.0;"><button class="btn btn-default btn-corner">MOTHERFUCKING GHOST WORDS</button></div>');
	
	//Gets Main Buttons from Array and Asks for Buttons
	
	var drawMainButtons = function(z) {
		for (var i=0; i<qArray[z].button_text.length; i++) {
			var b = button_maker((qArray[z].button_text[i]), (qArray[z].button_target[i]));
			$('.option-group').append(b);
		}
	};

	// Creates Main Buttons

	var button_maker = function (input, target_id) {
		var button_made = ('<button id="' + target_id + '" class="btn btn-default btn-lg">' + input + '</button>');
		return button_made;
	};
	
	drawMainButtons(z);

	// Asks if Previous Step Button is needed and calls button-maker
	
	var drawBackButton = function(z) {
		var b = prev_button_maker("Previous Step", qArray[z].returns_to);
		$('.previous-button').append(b);
	};
	
	// Asks if page ID is not the start page and draws Start Over button if needed
	
	var drawStartOver = function() {
		var b = startover_button_maker();
		$("#startover").append(b);
	};
	
	if (z > 0) {
		$('#startover').empty();
		drawStartOver();
	};
	
	if (qArray[z].need_prev) {
		drawBackButton(z);
	};
	
};


// Creates Previous Step Button

var prev_button_maker = function (input, target_id) {
	var button_made = ('<button id="' + target_id + '" class="btn btn-default">' + input + '</button>');
	return button_made;
};

// Creates Start Over Button

var startover_button_maker = function () {
	var button_made = ('<button id="0" class="btn btn-default btn-corner">Start over</button>');
	return button_made;
};


// MAIN FUNCTION CONTROL FLOW

var main = function() {
	
	$(document).on("click", '.btn', function() {
		drawPage(this.id);
	});
	
};
 
$(document).ready(main);