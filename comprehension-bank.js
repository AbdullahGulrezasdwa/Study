(function () {
  "use strict";

  window.GL_COMPREHENSION_BANK = [
    {
      id: "clockwork-orchard",
      title: "The Clockwork Orchard",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. Every autumn, the orchard behind Halim's house clicked before it ripened. The sound began softly, like someone winding a watch under the soil. Then, one by one, the metal leaves lifted themselves from the branches and turned towards the sun.

2. Halim had promised his grandfather that he would not enter before the first red apple appeared. But this year the clicking came early. It rattled through the kitchen window while Grandfather slept in his chair, and Halim saw one branch shaking as if it was trying to warn him.

3. He pushed open the gate. The grass was silver with dew. At the centre of the orchard, the oldest tree had opened a hollow in its trunk, and inside it lay a small brass key. Halim did not touch it at first. The whole orchard held its breath.`,
      questions: [
        { prompt: "What sound does the orchard make before it ripens?", answer: "clicking", options: ["clicking", "singing", "whistling", "scratching"], explanation: "Paragraph 1 says the orchard clicked before it ripened.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What promise had Halim made?", answer: "not to enter before the first red apple appeared", options: ["not to enter before the first red apple appeared", "to sell the orchard", "to wake his grandfather", "to cut down the oldest tree"], explanation: "Paragraph 2 explains the promise to his grandfather.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does the phrase 'the whole orchard held its breath' suggest?", answer: "the moment feels tense and important", options: ["the moment feels tense and important", "the trees are asleep", "the weather is windy", "Halim is bored"], explanation: "The personification creates suspense and makes the key feel important.", interaction: "mc", skill: "Inference" },
        { prompt: "Which object is found inside the tree?", answer: "a small brass key", options: ["a small brass key", "a red apple", "a watch", "a silver leaf"], explanation: "The key is found in the hollow of the oldest tree.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Which detail suggests the orchard is unusual or magical?", answer: "metal leaves lifted themselves from the branches", options: ["metal leaves lifted themselves from the branches", "the kitchen window was open", "Grandfather slept in a chair", "the grass was wet"], explanation: "Leaves moving by themselves and being metal creates a magical effect.", interaction: "mc", skill: "Language" },
        { prompt: "Why does Halim go into the orchard?", answer: "the early clicking and shaking branch make him think something is wrong", options: ["the early clicking and shaking branch make him think something is wrong", "he wants to pick apples for lunch", "his grandfather tells him to go", "he is chasing a cat"], explanation: "The unusual timing and shaking branch suggest a warning.", interaction: "mc", skill: "Inference" },
        { prompt: "How does the extract build mystery?", answer: "it reveals strange details gradually before ending on the key", options: ["it reveals strange details gradually before ending on the key", "it explains everything in paragraph 1", "it uses only dialogue", "it gives a list of orchard tools"], explanation: "The clicking, moving leaves, warning branch and key build mystery step by step.", interaction: "mc", skill: "Structure" },
        { prompt: "Which theme is suggested by Halim entering despite his promise?", answer: "curiosity can conflict with obedience", options: ["curiosity can conflict with obedience", "money is more important than family", "weather controls everything", "apples are always dangerous"], explanation: "Halim breaks a rule because he feels drawn to investigate.", interaction: "mc", skill: "Theme" }
      ]
    },
    {
      id: "repair-cafe",
      title: "The Repair Cafe",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. On the first Saturday of each month, the community hall becomes a repair cafe. People arrive with lamps that flicker, jackets with broken zips, radios that hum instead of sing and toys missing wheels. Nothing is guaranteed to be fixed, but almost everything is examined with patience.

2. The cafe began when a group of retired engineers noticed how quickly useful objects were being thrown away. They did not want to lecture anyone. Instead, they set out long tables, borrowed toolboxes and invited neighbours to learn how things worked.

3. The most popular table is not the one with the newest tools. It is the table where visitors sit beside volunteers and try the repair themselves. A fixed toaster is useful; a person who knows why the toaster broke is even more useful.`,
      questions: [
        { prompt: "When does the repair cafe take place?", answer: "the first Saturday of each month", options: ["the first Saturday of each month", "every Friday night", "once every year", "during school lunch"], explanation: "Paragraph 1 gives the timing.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Which item is not mentioned as being brought to the cafe?", answer: "a bicycle", options: ["a bicycle", "a lamp", "a jacket", "a radio"], explanation: "Lamps, jackets and radios are mentioned; bicycles are not.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why did the retired engineers start the cafe?", answer: "they noticed useful objects were being thrown away too quickly", options: ["they noticed useful objects were being thrown away too quickly", "they wanted to sell new tools", "they needed a place to store radios", "they wanted to close the community hall"], explanation: "Paragraph 2 explains their reason.", interaction: "mc", skill: "Purpose" },
        { prompt: "What does 'radios that hum instead of sing' mean?", answer: "radios that make a faulty noise instead of playing properly", options: ["radios that make a faulty noise instead of playing properly", "radios that perform music live", "radios that are too quiet to hear", "radios that belong to singers"], explanation: "The phrase describes radios that are broken or not playing correctly.", interaction: "mc", skill: "Vocabulary" },
        { prompt: "What attitude does the writer show towards repairing things?", answer: "positive and respectful", options: ["positive and respectful", "angry and dismissive", "bored and uncertain", "fearful and suspicious"], explanation: "The writer values patience, learning and usefulness.", interaction: "mc", skill: "Tone" },
        { prompt: "Why is the final sentence effective?", answer: "it shows that learning the skill matters as much as fixing the object", options: ["it shows that learning the skill matters as much as fixing the object", "it proves toasters are the most important machines", "it says volunteers should work alone", "it suggests broken things should be thrown away"], explanation: "The sentence widens the meaning from one repair to lasting knowledge.", interaction: "mc", skill: "Inference" },
        { prompt: "How is paragraph 3 organised?", answer: "it contrasts tools with learning from volunteers", options: ["it contrasts tools with learning from volunteers", "it gives dates in order", "it describes only one broken toy", "it lists every volunteer"], explanation: "The paragraph compares the newest tools with the table where people learn.", interaction: "mc", skill: "Structure" },
        { prompt: "What is the main idea of the whole passage?", answer: "repairing objects can also teach people useful skills", options: ["repairing objects can also teach people useful skills", "old radios are better than new radios", "community halls should be closed", "only engineers can fix things"], explanation: "The passage focuses on repair as learning.", interaction: "mc", skill: "Summary" }
      ]
    },
    {
      id: "river-volunteers",
      title: "River Volunteers",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. The river looked calm from the bridge, but the volunteers knew better. Beneath the surface, plastic wrappers caught on reeds, old bottles rolled against stones and tiny scraps of foam gathered in the shallows like dirty snow.

2. Every Sunday morning, the group worked along a different stretch of bank. They recorded what they found, weighed each bag and photographed unusual objects. The data helped the council decide where new bins and signs were needed.

3. By winter, the river had not become perfect, but it had become visible. More walkers stopped to ask questions. A canoe club offered to help from the water. The volunteers learned that cleaning a river was partly about rubbish, and partly about making people notice what had been ignored.`,
      questions: [
        { prompt: "Where do plastic wrappers catch?", answer: "on reeds", options: ["on reeds", "under the bridge lights", "inside bins", "in a canoe"], explanation: "Paragraph 1 says wrappers caught on reeds.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What simile is used to describe foam?", answer: "like dirty snow", options: ["like dirty snow", "like a silver ribbon", "like glass", "like a storm"], explanation: "The foam gathers in the shallows like dirty snow.", interaction: "mc", skill: "Language" },
        { prompt: "Why do volunteers record and weigh what they find?", answer: "to help the council decide where bins and signs are needed", options: ["to help the council decide where bins and signs are needed", "to win a competition", "to sell the rubbish", "to decorate the bridge"], explanation: "Paragraph 2 explains the data has a practical purpose.", interaction: "mc", skill: "Purpose" },
        { prompt: "Which group offers to help from the water?", answer: "a canoe club", options: ["a canoe club", "a chess club", "a library group", "a football team"], explanation: "Paragraph 3 names the canoe club.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does the writer mean by the river had become visible?", answer: "people had started to notice its problems", options: ["people had started to notice its problems", "the water turned transparent", "the bridge was removed", "the river became wider"], explanation: "The next sentence shows more walkers asking questions.", interaction: "mc", skill: "Inference" },
        { prompt: "What contrast opens the passage?", answer: "the river looks calm but has hidden rubbish", options: ["the river looks calm but has hidden rubbish", "winter is warmer than summer", "walkers dislike volunteers", "bins are better than signs"], explanation: "The opening contrasts appearance with reality.", interaction: "mc", skill: "Structure" },
        { prompt: "Which word suggests careful, organised work?", answer: "recorded", options: ["recorded", "rolled", "dirty", "ignored"], explanation: "Recording what they find shows method and organisation.", interaction: "mc", skill: "Vocabulary" },
        { prompt: "What is one message of the passage?", answer: "small community action can draw attention to a bigger problem", options: ["small community action can draw attention to a bigger problem", "rivers should never be cleaned", "questions are useless", "only councils can help"], explanation: "The volunteers clean and also make others notice the problem.", interaction: "mc", skill: "Theme" }
      ]
    },
    {
      id: "the-map-room",
      title: "The Map Room",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. The map room was supposed to be locked. Priya knew this because there were three signs on the door, each one more serious than the last. Yet the brass handle turned easily in her hand, and the door opened with a sigh of dust.

2. Inside, maps covered every wall. Some showed countries, some showed oceans and one showed the school itself, but not as it was now. The canteen was labelled ballroom. The science block was marked winter garden. In the place where the playground should have been, someone had drawn a lake.

3. Priya stepped closer. A tiny paper boat moved across the drawn lake, leaving a line of blue ink behind it. Then the map gave a shiver, and from somewhere below the floor came the sound of water.`,
      questions: [
        { prompt: "How many signs are on the map room door?", answer: "three", options: ["three", "one", "two", "five"], explanation: "Paragraph 1 says there were three signs.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What sound does the door make when it opens?", answer: "a sigh of dust", options: ["a sigh of dust", "a loud bell", "a splash", "a click of glass"], explanation: "The door opened with a sigh of dust.", interaction: "mc", skill: "Language" },
        { prompt: "What is unusual about the school map?", answer: "it shows the school differently from now", options: ["it shows the school differently from now", "it is blank", "it is too small to read", "it is written in pencil only"], explanation: "The canteen and science block have different labels.", interaction: "mc", skill: "Inference" },
        { prompt: "What is drawn where the playground should be?", answer: "a lake", options: ["a lake", "a tower", "a forest", "a car park"], explanation: "Paragraph 2 states that a lake is drawn there.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Which detail suggests the map may be alive or magical?", answer: "a tiny paper boat moved across the drawn lake", options: ["a tiny paper boat moved across the drawn lake", "maps covered every wall", "there were signs on the door", "the room had dust"], explanation: "The paper boat moving by itself is magical.", interaction: "mc", skill: "Inference" },
        { prompt: "Why is the final sentence suspenseful?", answer: "it suggests the drawn lake may be becoming real", options: ["it suggests the drawn lake may be becoming real", "it explains the school timetable", "it ends with a joke", "it describes a normal classroom"], explanation: "The sound of water below the floor links to the lake on the map.", interaction: "mc", skill: "Structure" },
        { prompt: "What does Priya's action show about her?", answer: "she is curious", options: ["she is curious", "she is lazy", "she is angry", "she is lost in a forest"], explanation: "She enters despite serious signs and moves closer to investigate.", interaction: "mc", skill: "Character" },
        { prompt: "What mood is created in the extract?", answer: "mysterious and tense", options: ["mysterious and tense", "cheerful and ordinary", "comic and silly", "formal and factual"], explanation: "The locked room, strange maps and moving boat create mystery.", interaction: "mc", skill: "Mood" }
      ]
    },
    {
      id: "quiet-spaces",
      title: "Why Schools Need Quiet Spaces",
      topicId: "argument",
      unit: "Non-Fiction",
      passage: `1. A school is full of useful noise: questions, bells, laughter, chairs, sport, music and the sudden rush of a corridor at break. Noise can mean energy. It can mean friendship. But even energy needs somewhere to rest.

2. Every school should protect at least one quiet space at lunchtime. This is not about forcing silence on everyone. It is about giving pupils a choice. Some people recover by talking; others recover by reading, drawing or simply sitting without being asked to join another conversation.

3. Opponents may argue that space is limited. That is true, but quiet spaces do not need to be grand. A corner of the library, a supervised classroom or a sheltered bench can make a difference. If we plan football pitches and music rooms because pupils need them, we should plan calm spaces too.`,
      questions: [
        { prompt: "What does the writer call the noise of school?", answer: "useful noise", options: ["useful noise", "dangerous noise", "silent noise", "unwanted noise"], explanation: "The phrase appears in paragraph 1.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What is the writer's main argument?", answer: "schools should provide quiet spaces at lunchtime", options: ["schools should provide quiet spaces at lunchtime", "schools should cancel music lessons", "pupils should never talk", "libraries should be locked"], explanation: "Paragraph 2 states this directly.", interaction: "mc", skill: "Argument" },
        { prompt: "Why does the writer say quiet spaces are about choice?", answer: "different pupils recover in different ways", options: ["different pupils recover in different ways", "teachers dislike noise", "libraries are always empty", "all pupils prefer drawing"], explanation: "The writer contrasts talking with reading, drawing and sitting quietly.", interaction: "mc", skill: "Inference" },
        { prompt: "Which counterargument does the writer mention?", answer: "space is limited", options: ["space is limited", "pupils hate lunchtime", "quiet spaces cost millions", "music rooms are useless"], explanation: "Paragraph 3 introduces the objection that space is limited.", interaction: "mc", skill: "Retrieval" },
        { prompt: "How does the writer respond to the counterargument?", answer: "by saying quiet spaces can be small and simple", options: ["by saying quiet spaces can be small and simple", "by ignoring it", "by saying space does not matter", "by blaming pupils"], explanation: "The writer lists small possible spaces.", interaction: "mc", skill: "Argument" },
        { prompt: "What effect does the list in paragraph 1 create?", answer: "it shows how busy and noisy school can be", options: ["it shows how busy and noisy school can be", "it proves school is always calm", "it explains a recipe", "it describes one classroom only"], explanation: "The list piles up examples of school noise.", interaction: "mc", skill: "Language" },
        { prompt: "Which phrase shows a balanced viewpoint?", answer: "That is true, but", options: ["That is true, but", "Every school", "sudden rush", "make a difference"], explanation: "The phrase accepts an opposing point before responding.", interaction: "mc", skill: "Vocabulary" },
        { prompt: "What is the purpose of this text?", answer: "to persuade school leaders to protect quiet spaces", options: ["to persuade school leaders to protect quiet spaces", "to entertain with a story", "to teach football rules", "to describe a holiday"], explanation: "The passage argues for a practical change in schools.", interaction: "mc", skill: "Purpose" }
      ]
    },
    {
      id: "storm-glass",
      title: "Storm Glass",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. Aunt Laleh kept the storm glass on the highest shelf, where nobody could knock it over by accident. It was shaped like a tear and filled with clear liquid. Most days, it looked empty. On storm days, crystals grew inside it like frost on a window.

2. Mira noticed the crystals on a cloudless morning. They crowded the glass in sharp white feathers, pressing against the sides as if trying to escape. Outside, the sky was blue enough to make the warning seem impossible.

3. By noon, birds had stopped singing. By two, the sea had pulled away from the harbour wall, leaving boats tilted in the mud. Aunt Laleh reached for the glass, but Mira was already running to warn the fishermen.`,
      questions: [
        { prompt: "Where is the storm glass kept?", answer: "on the highest shelf", options: ["on the highest shelf", "under the table", "inside a boat", "beside the harbour wall"], explanation: "Paragraph 1 gives the location.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What shape is the storm glass?", answer: "like a tear", options: ["like a tear", "like a star", "like a shell", "like a square"], explanation: "It is described as shaped like a tear.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What is unusual about the warning?", answer: "the glass shows crystals on a cloudless morning", options: ["the glass shows crystals on a cloudless morning", "the sky is grey", "Aunt Laleh breaks the glass", "birds sing loudly"], explanation: "The warning seems impossible because the sky is blue.", interaction: "mc", skill: "Inference" },
        { prompt: "Which image describes the crystals?", answer: "sharp white feathers", options: ["sharp white feathers", "golden coins", "soft blue smoke", "tiny fish"], explanation: "Paragraph 2 uses this image.", interaction: "mc", skill: "Language" },
        { prompt: "What suggests danger is approaching?", answer: "the sea pulls away from the harbour wall", options: ["the sea pulls away from the harbour wall", "the shelf is high", "the glass is clear", "the sky is blue"], explanation: "The sea pulling away is an alarming change.", interaction: "mc", skill: "Inference" },
        { prompt: "What does Mira do at the end?", answer: "runs to warn the fishermen", options: ["runs to warn the fishermen", "hides the storm glass", "goes to sleep", "sings with the birds"], explanation: "The final sentence states her action.", interaction: "mc", skill: "Retrieval" },
        { prompt: "How does the structure create tension?", answer: "it moves from warning signs to urgent action", options: ["it moves from warning signs to urgent action", "it starts with the ending", "it gives only a description of a shelf", "it explains every event calmly"], explanation: "The passage builds from crystals to silence, sea movement and Mira running.", interaction: "mc", skill: "Structure" },
        { prompt: "What kind of character does Mira seem to be?", answer: "observant and brave", options: ["observant and brave", "careless and selfish", "bored and lazy", "angry and cruel"], explanation: "She notices the warning and acts quickly to help others.", interaction: "mc", skill: "Character" }
      ]
    },
    {
      id: "screens-and-sleep",
      title: "Screens and Sleep",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. Many pupils know the feeling: one short video becomes ten, a message needs an answer and bedtime moves later without anyone quite deciding it should. Screens are not the enemy, but they are very good at asking for one more minute.

2. Sleep researchers say the problem is not only light. It is also attention. A bright game or dramatic group chat can make the brain behave as if the day is still busy. Even when the phone is put down, the mind may keep replaying the last challenge, joke or argument.

3. The best advice is boring, which is why it often works. Put the device outside reach. Choose a time to stop before you feel tired. Replace the final scroll with something repeatable: a shower, a chapter, a quiet playlist. A routine tells the brain that the day is closing.`,
      questions: [
        { prompt: "What does the writer say screens are good at asking for?", answer: "one more minute", options: ["one more minute", "homework help", "a new pillow", "loud music"], explanation: "Paragraph 1 ends with this phrase.", interaction: "mc", skill: "Retrieval" },
        { prompt: "According to paragraph 2, what is the problem besides light?", answer: "attention", options: ["attention", "weather", "breakfast", "paper"], explanation: "The passage says the problem is not only light but also attention.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does 'the day is still busy' suggest?", answer: "the brain stays alert instead of relaxing", options: ["the brain stays alert instead of relaxing", "the school day starts again", "the phone is broken", "the room is noisy"], explanation: "Games and chats keep the mind active.", interaction: "mc", skill: "Inference" },
        { prompt: "Which option is not suggested as a replacement for scrolling?", answer: "a racing game", options: ["a racing game", "a shower", "a chapter", "a quiet playlist"], explanation: "The suggested replacements are a shower, a chapter and a quiet playlist.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why does the writer call the advice boring?", answer: "to admit it is simple but still useful", options: ["to admit it is simple but still useful", "to mock sleep researchers", "to say routines never work", "to make readers confused"], explanation: "The phrase is informal and honest, making the advice sound realistic.", interaction: "mc", skill: "Tone" },
        { prompt: "What is the main purpose of the passage?", answer: "to explain why screens can affect sleep and suggest solutions", options: ["to explain why screens can affect sleep and suggest solutions", "to advertise a new phone", "to tell a ghost story", "to ban all technology"], explanation: "The passage explains causes and gives practical advice.", interaction: "mc", skill: "Purpose" },
        { prompt: "Which sentence best summarises paragraph 3?", answer: "Simple routines can help the brain prepare for sleep.", options: ["Simple routines can help the brain prepare for sleep.", "All music keeps people awake.", "Devices should be repaired.", "Sleep researchers dislike showers."], explanation: "The paragraph focuses on repeatable routines.", interaction: "mc", skill: "Summary" },
        { prompt: "What does 'the final scroll' mean?", answer: "the last period of using a device before stopping", options: ["the last period of using a device before stopping", "an ancient paper document", "a school certificate", "a broken screen"], explanation: "In context it means scrolling on a phone before sleep.", interaction: "mc", skill: "Vocabulary" }
      ]
    },
    {
      id: "library-that-moved",
      title: "The Library That Moved",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. When the town library closed for repairs, the librarians refused to disappear behind scaffolding. They packed two thousand books into rolling crates and pushed the collection into parks, playgrounds and bus stops.

2. At first, people laughed at the sight of novels beside the timetable board. Then they began to borrow them. A mechanic read poetry during lunch. A child found a dinosaur book while waiting for the number 18 bus. An elderly man returned every Wednesday for detective stories and conversation.

3. Six months later, the repaired library reopened. The rolling crates did not retire. They became a permanent travelling library, visiting the parts of town where people had least expected to find books.`,
      questions: [
        { prompt: "Why did the town library close?", answer: "for repairs", options: ["for repairs", "because nobody read", "for a concert", "because the books were sold"], explanation: "The first sentence says it closed for repairs.", interaction: "mc", skill: "Retrieval" },
        { prompt: "How many books were packed into crates?", answer: "two thousand", options: ["two thousand", "twenty", "two hundred", "twelve"], explanation: "Paragraph 1 states the number.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Where did librarians take the collection?", answer: "parks, playgrounds and bus stops", options: ["parks, playgrounds and bus stops", "cinemas only", "a private office", "the sea front only"], explanation: "Paragraph 1 lists these places.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does the mechanic reading poetry show?", answer: "unexpected people used the travelling library", options: ["unexpected people used the travelling library", "mechanics cannot read novels", "poetry is only for lunch", "the bus was late"], explanation: "The example shows the library reaching different people.", interaction: "mc", skill: "Inference" },
        { prompt: "What change happens by the end?", answer: "the rolling crates become a permanent travelling library", options: ["the rolling crates become a permanent travelling library", "the books are thrown away", "the library stays closed", "the bus stop is removed"], explanation: "Paragraph 3 explains the crates continue permanently.", interaction: "mc", skill: "Structure" },
        { prompt: "What is the tone of the passage?", answer: "hopeful and approving", options: ["hopeful and approving", "angry and bitter", "frightened and dark", "confused and doubtful"], explanation: "The writer presents the project as successful and valuable.", interaction: "mc", skill: "Tone" },
        { prompt: "Which phrase suggests the librarians were determined?", answer: "refused to disappear", options: ["refused to disappear", "people laughed", "detective stories", "six months later"], explanation: "This phrase shows they would not stop serving readers.", interaction: "mc", skill: "Language" },
        { prompt: "What is the main message?", answer: "books can reach people when services adapt creatively", options: ["books can reach people when services adapt creatively", "libraries should never be repaired", "bus stops are only for novels", "all crates are dangerous"], explanation: "The travelling library adapts to keep serving the community.", interaction: "mc", skill: "Theme" }
      ]
    },
    {
      id: "the-sound-collector",
      title: "The Sound Collector",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. Cass kept sounds in labelled jars. Rain on the greenhouse roof was stored in a blue jar. Her mother's laugh was kept in a small green one. The biggest jar, cloudy and sealed with wax, contained the roar of the old railway station before it closed.

2. Nobody believed Cass until the evening she dropped the jar marked thunder. It smashed on the kitchen tiles, and the whole house shook with a storm that was not outside. Plates rattled. The cat fled. Her father stood in the doorway, holding a towel and looking suddenly afraid.

3. Cass wanted to apologise, but the broken glass was humming. Among the pieces lay a sound she had never collected: a whisper saying her name.`,
      questions: [
        { prompt: "What sound is kept in the blue jar?", answer: "rain on the greenhouse roof", options: ["rain on the greenhouse roof", "her mother's laugh", "thunder", "a whisper"], explanation: "Paragraph 1 identifies the blue jar.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Which jar is sealed with wax?", answer: "the jar with the roar of the old railway station", options: ["the jar with the roar of the old railway station", "the blue rain jar", "the green laugh jar", "the jar marked thunder"], explanation: "The biggest jar is cloudy and sealed with wax.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why does the house shake?", answer: "Cass drops the jar marked thunder", options: ["Cass drops the jar marked thunder", "a real storm hits outside", "a train passes", "the cat knocks over plates"], explanation: "The thunder escapes when the jar smashes.", interaction: "mc", skill: "Cause and Effect" },
        { prompt: "What proves Cass was telling the truth?", answer: "the thunder jar releases a storm sound inside the house", options: ["the thunder jar releases a storm sound inside the house", "her father brings a towel", "the cat is asleep", "the jar labels are neat"], explanation: "The supernatural event proves sounds are really stored.", interaction: "mc", skill: "Inference" },
        { prompt: "What mood is created by the final sentence?", answer: "mysterious and unsettling", options: ["mysterious and unsettling", "peaceful and ordinary", "comic and relaxed", "formal and factual"], explanation: "An unknown whisper saying her name creates suspense.", interaction: "mc", skill: "Mood" },
        { prompt: "Which detail shows her father is shocked?", answer: "looking suddenly afraid", options: ["looking suddenly afraid", "holding a towel", "stood in the doorway", "plates rattled"], explanation: "This directly shows his fear.", interaction: "mc", skill: "Character" },
        { prompt: "What is unusual about the broken glass?", answer: "it is humming", options: ["it is humming", "it disappears", "it turns blue", "it fixes itself"], explanation: "Paragraph 3 says the broken glass was humming.", interaction: "mc", skill: "Retrieval" },
        { prompt: "How does the structure create a twist?", answer: "it moves from explaining the jars to a new unknown sound", options: ["it moves from explaining the jars to a new unknown sound", "it tells the ending first", "it gives only dialogue", "it repeats the same event"], explanation: "The final whisper adds a new mystery after the thunder incident.", interaction: "mc", skill: "Structure" }
      ]
    },
    {
      id: "save-the-old-cinema",
      title: "Save the Old Cinema",
      topicId: "rhetoric",
      unit: "Non-Fiction",
      passage: `1. The Regal Cinema has stood on King Street for ninety years. Its red seats have held grandparents, parents and children. Its faded gold ceiling has watched first dates, birthday trips and rainy afternoons when the whole town needed somewhere warm to go.

2. Now developers want to replace it with another glass office block. Another one. Do we really need more blank windows and empty foyers? Or do we need a place where stories still bring people together?

3. Sign the petition. Share a memory. Come to Saturday's meeting outside the cinema doors. If the Regal closes quietly, we will lose more than a building; we will lose one of the few places where the town still recognises itself.`,
      questions: [
        { prompt: "How long has the Regal Cinema stood on King Street?", answer: "ninety years", options: ["ninety years", "nine years", "nineteen years", "one hundred and ninety years"], explanation: "Paragraph 1 gives the time.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What do developers want to replace it with?", answer: "a glass office block", options: ["a glass office block", "a park", "a school", "a library"], explanation: "Paragraph 2 states the developers' plan.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What technique is used in 'Another one'?", answer: "short sentence for emphasis", options: ["short sentence for emphasis", "simile", "onomatopoeia", "direct speech"], explanation: "The fragment emphasises frustration with another office block.", interaction: "mc", skill: "Language" },
        { prompt: "Which rhetorical question supports the writer's argument?", answer: "Do we really need more blank windows and empty foyers?", options: ["Do we really need more blank windows and empty foyers?", "The Regal Cinema has stood on King Street.", "Sign the petition.", "Its red seats have held grandparents."], explanation: "It pushes readers to question the development.", interaction: "mc", skill: "Rhetoric" },
        { prompt: "What actions are readers asked to take?", answer: "sign the petition, share a memory and come to the meeting", options: ["sign the petition, share a memory and come to the meeting", "buy an office block", "paint the ceiling", "stay silent"], explanation: "Paragraph 3 lists three actions.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does the writer suggest the cinema represents?", answer: "shared community memory and identity", options: ["shared community memory and identity", "a place only for developers", "a new shopping centre", "a private home"], explanation: "The final sentence says the town recognises itself there.", interaction: "mc", skill: "Inference" },
        { prompt: "What is the main purpose of the text?", answer: "to persuade people to help save the cinema", options: ["to persuade people to help save the cinema", "to review a film", "to explain how glass is made", "to describe office jobs"], explanation: "The text uses emotional language and direct commands.", interaction: "mc", skill: "Purpose" },
        { prompt: "Which phrase creates nostalgia?", answer: "birthday trips and rainy afternoons", options: ["birthday trips and rainy afternoons", "glass office block", "empty foyers", "Saturday's meeting"], explanation: "This phrase recalls warm shared memories.", interaction: "mc", skill: "Vocabulary" }
      ]
    },
    {
      id: "desert-dew",
      title: "Desert Dew",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. In some deserts, the morning begins with water. Not rain, but dew: tiny drops that settle on stones, leaves and the backs of beetles before the sun grows fierce. For a few minutes, the dry landscape glitters.

2. Scientists study these brief moments because they reveal how living things survive with very little. Some beetles tilt their bodies so dew runs towards their mouths. Certain plants have waxy surfaces that guide drops down to their roots.

3. Engineers are interested too. By copying these natural surfaces, they hope to design materials that collect water from the air. The desert, often described as empty, may become a teacher of careful design.`,
      questions: [
        { prompt: "What kind of water begins some desert mornings?", answer: "dew", options: ["dew", "rain", "snow", "river water"], explanation: "Paragraph 1 says not rain, but dew.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Where can dew settle?", answer: "stones, leaves and beetles", options: ["stones, leaves and beetles", "clouds only", "inside engines", "under carpets"], explanation: "Paragraph 1 lists stones, leaves and beetles.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why do scientists study dew in deserts?", answer: "it reveals how living things survive with very little water", options: ["it reveals how living things survive with very little water", "it proves deserts are always wet", "it makes plants disappear", "it creates snowstorms"], explanation: "Paragraph 2 explains the scientific interest.", interaction: "mc", skill: "Purpose" },
        { prompt: "How do some beetles collect dew?", answer: "they tilt their bodies so dew runs to their mouths", options: ["they tilt their bodies so dew runs to their mouths", "they dig wells", "they carry cups", "they hide under stones"], explanation: "This behaviour is described in paragraph 2.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does 'the dry landscape glitters' suggest?", answer: "dew briefly makes the desert shine", options: ["dew briefly makes the desert shine", "the desert is covered in jewels", "the sand is on fire", "the plants are plastic"], explanation: "The phrase creates a visual image of tiny shining drops.", interaction: "mc", skill: "Language" },
        { prompt: "Why are engineers interested?", answer: "they want to copy natural surfaces to collect water from air", options: ["they want to copy natural surfaces to collect water from air", "they want to remove all beetles", "they are building cinemas", "they dislike plants"], explanation: "Paragraph 3 explains the engineering application.", interaction: "mc", skill: "Inference" },
        { prompt: "What is meant by the desert becoming a teacher?", answer: "people can learn design ideas from desert life", options: ["people can learn design ideas from desert life", "the desert becomes a school building", "sand writes on a board", "teachers move to the desert"], explanation: "The final sentence means nature can inspire human design.", interaction: "mc", skill: "Vocabulary" },
        { prompt: "What is the structure of the passage?", answer: "it moves from natural observation to scientific and engineering uses", options: ["it moves from natural observation to scientific and engineering uses", "it lists only animals", "it tells a personal diary", "it starts with engineers then stops"], explanation: "The text begins with dew, then scientists, then engineers.", interaction: "mc", skill: "Structure" }
      ]
    },
    {
      id: "paper-lantern-race",
      title: "The Paper Lantern Race",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. At dusk, the village children carried paper lanterns to the river. Each lantern held a candle, a wish and the name of the person who had made it. The race began when the bell rang from the bridge.

2. Toma's lantern was plain compared with the others. No painted dragons, no silver tassels, no clever folded wings. He had spent all afternoon making sure the base was balanced, but now, beside the bright crowd, his careful work looked almost invisible.

3. The bell rang. Flashy lanterns spun, dipped and soaked themselves within seconds. Toma's plain square lantern moved slowly at first, then found the current. By the time it passed under the bridge, everyone was leaning over the rail to watch.`,
      questions: [
        { prompt: "Where do the children take the lanterns?", answer: "to the river", options: ["to the river", "to the mountain", "to the library", "to the cinema"], explanation: "Paragraph 1 gives the setting.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does each lantern hold?", answer: "a candle, a wish and the maker's name", options: ["a candle, a wish and the maker's name", "a coin and a map", "a feather only", "a folded letter"], explanation: "Paragraph 1 lists these three things.", interaction: "mc", skill: "Retrieval" },
        { prompt: "How is Toma's lantern different?", answer: "it is plain but carefully balanced", options: ["it is plain but carefully balanced", "it is the biggest lantern", "it has silver tassels", "it is shaped like a dragon"], explanation: "Paragraph 2 contrasts its plain look with careful making.", interaction: "mc", skill: "Inference" },
        { prompt: "What does the list 'No painted dragons, no silver tassels, no clever folded wings' emphasise?", answer: "Toma's lantern lacks decoration", options: ["Toma's lantern lacks decoration", "Toma dislikes rivers", "the race is cancelled", "the bridge is broken"], explanation: "The repeated 'no' stresses the absence of decoration.", interaction: "mc", skill: "Language" },
        { prompt: "What happens to the flashy lanterns?", answer: "they spin, dip and soak themselves", options: ["they spin, dip and soak themselves", "they all win", "they fly into the sky", "they turn into bells"], explanation: "Paragraph 3 describes their failure.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why does Toma's lantern succeed?", answer: "its careful balanced base helps it find the current", options: ["its careful balanced base helps it find the current", "it has the brightest paint", "it is pushed by adults", "it avoids the water"], explanation: "His careful work matters more than decoration.", interaction: "mc", skill: "Inference" },
        { prompt: "What lesson is suggested by the story?", answer: "careful work can matter more than appearance", options: ["careful work can matter more than appearance", "decoration always wins", "rivers dislike lanterns", "bells are dangerous"], explanation: "The plain lantern does better than the flashy ones.", interaction: "mc", skill: "Theme" },
        { prompt: "How does Toma feel in paragraph 2?", answer: "uncertain and overshadowed", options: ["uncertain and overshadowed", "angry and cruel", "sleepy and bored", "proud of being famous"], explanation: "His work looks almost invisible beside the bright crowd.", interaction: "mc", skill: "Character" }
      ]
    },
    {
      id: "bike-train",
      title: "The Bike Train",
      topicId: "argument",
      unit: "Non-Fiction",
      passage: `1. A bike train is not a train at all. It is a group of pupils cycling to school together on a planned route, usually with adults at the front and back. Like a bus route, it has stops where more riders can join.

2. Our school should try one next term. It would reduce traffic near the gates, help pupils arrive awake and give younger cyclists confidence. Some parents worry about safety, but a planned route with visible adults is safer than many separate children cycling alone.

3. The first route could be short: from the park, along Maple Road and through the quiet lane behind the sports centre. Start small, measure what works and improve it. That is how good journeys begin.`,
      questions: [
        { prompt: "What is a bike train?", answer: "a group cycling together on a planned route", options: ["a group cycling together on a planned route", "a train that carries bicycles", "a race around school", "a bus with no wheels"], explanation: "Paragraph 1 defines it.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Who usually rides at the front and back?", answer: "adults", options: ["adults", "dogs", "teachers only", "bus drivers"], explanation: "Paragraph 1 says adults are usually at the front and back.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Which benefit is not mentioned?", answer: "making lunch cheaper", options: ["making lunch cheaper", "reducing traffic", "helping pupils arrive awake", "giving younger cyclists confidence"], explanation: "Lunch prices are not discussed.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What counterargument does the writer respond to?", answer: "parents worry about safety", options: ["parents worry about safety", "pupils dislike parks", "bikes are impossible to steer", "traffic is already banned"], explanation: "Paragraph 2 mentions parents' safety worries.", interaction: "mc", skill: "Argument" },
        { prompt: "How does the writer answer the safety worry?", answer: "by saying a planned route with adults is safer than separate cycling", options: ["by saying a planned route with adults is safer than separate cycling", "by ignoring the worry", "by banning younger cyclists", "by moving the school"], explanation: "The answer compares supervised group cycling with cycling alone.", interaction: "mc", skill: "Argument" },
        { prompt: "What route is suggested first?", answer: "from the park, along Maple Road and through the quiet lane", options: ["from the park, along Maple Road and through the quiet lane", "across the motorway", "around the canteen", "through the library"], explanation: "Paragraph 3 gives the first route.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does 'Start small' suggest?", answer: "try a manageable version before expanding", options: ["try a manageable version before expanding", "only small pupils can join", "the bikes should be tiny", "the route should be secret"], explanation: "The writer suggests testing and improving the idea.", interaction: "mc", skill: "Inference" },
        { prompt: "What is the purpose of the passage?", answer: "to persuade the school to try a bike train", options: ["to persuade the school to try a bike train", "to explain train engines", "to describe a sports day", "to complain about parks"], explanation: "The passage argues for a school transport idea.", interaction: "mc", skill: "Purpose" }
      ]
    },
    {
      id: "night-ferry",
      title: "The Night Ferry",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. The ferry arrived at midnight with no lights except one green lamp swinging above the deck. Elsie checked the timetable again. There was no midnight crossing. There had never been a midnight crossing.

2. The captain leaned over the rail. His coat was dry though rain hammered the harbour stones. "Only passengers with unfinished journeys," he called. Behind him, shapes moved in the mist, each one holding a ticket that glowed faintly blue.

3. Elsie felt the old ticket in her pocket warm against her fingers. It was the ticket her father had bought the day he disappeared. The ferry bell rang once, and the gangplank lowered itself to her feet.`,
      questions: [
        { prompt: "When does the ferry arrive?", answer: "midnight", options: ["midnight", "noon", "sunrise", "three o'clock"], explanation: "The first sentence states the time.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What light is on the ferry?", answer: "one green lamp", options: ["one green lamp", "two red candles", "a silver torch", "bright windows"], explanation: "Paragraph 1 describes one green lamp.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why is Elsie confused by the ferry?", answer: "there is no midnight crossing on the timetable", options: ["there is no midnight crossing on the timetable", "the ferry is too small", "the captain is singing", "the harbour is empty"], explanation: "She checks the timetable and knows there should be no crossing.", interaction: "mc", skill: "Inference" },
        { prompt: "Which detail makes the captain seem supernatural?", answer: "his coat is dry though rain is hammering down", options: ["his coat is dry though rain is hammering down", "he leans over the rail", "he speaks loudly", "he wears a coat"], explanation: "Being dry in heavy rain is unnatural.", interaction: "mc", skill: "Inference" },
        { prompt: "Who can travel on the ferry?", answer: "passengers with unfinished journeys", options: ["passengers with unfinished journeys", "anyone with coins", "only school children", "people with bicycles"], explanation: "The captain says this directly.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What connects Elsie to the ferry?", answer: "her father's old ticket warms in her pocket", options: ["her father's old ticket warms in her pocket", "she owns the ferry", "she knows the captain", "she dropped a lamp"], explanation: "The ticket links her father's disappearance to the ferry.", interaction: "mc", skill: "Inference" },
        { prompt: "How does the ending create suspense?", answer: "the gangplank lowers itself as if inviting Elsie aboard", options: ["the gangplank lowers itself as if inviting Elsie aboard", "the timetable is repaired", "the rain stops forever", "the captain leaves"], explanation: "The self-moving gangplank suggests she may have to choose whether to board.", interaction: "mc", skill: "Structure" },
        { prompt: "What mood is strongest in the extract?", answer: "eerie and mysterious", options: ["eerie and mysterious", "cheerful and comic", "calm and factual", "angry and noisy"], explanation: "Midnight, mist, glowing tickets and the strange ferry create an eerie mood.", interaction: "mc", skill: "Mood" }
      ]
    },
    {
      id: "homework-club-letter",
      title: "A Letter About Homework Club",
      topicId: "argument",
      unit: "Non-Fiction",
      passage: `1. Dear Headteacher, I am writing to suggest that homework club should run on four afternoons instead of two. At the moment, many pupils want a quiet place to work, but the room is full by Tuesday.

2. Extending the club would not only help pupils finish tasks; it would also help families. Some pupils share bedrooms with younger siblings. Others travel home on busy buses and cannot concentrate until late. A supervised room with dictionaries, laptops and calm support would make homework fairer.

3. I understand that staff time is limited. However, older pupil volunteers could help with organisation, and the library already stays open until 4:30. A small change to the timetable could make a large difference to pupils who are trying to do the right thing.`,
      questions: [
        { prompt: "Who is the letter addressed to?", answer: "the headteacher", options: ["the headteacher", "a bus driver", "a librarian from another town", "younger siblings"], explanation: "The opening says Dear Headteacher.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What change does the writer suggest?", answer: "homework club should run on four afternoons instead of two", options: ["homework club should run on four afternoons instead of two", "homework should be banned", "the library should close earlier", "buses should stop running"], explanation: "The first paragraph states the suggestion.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why is the current club not enough?", answer: "the room is full by Tuesday", options: ["the room is full by Tuesday", "nobody attends", "there are no pencils in school", "the headteacher dislikes homework"], explanation: "Paragraph 1 gives this problem.", interaction: "mc", skill: "Retrieval" },
        { prompt: "How would extending the club help families?", answer: "it would give pupils a fair quiet place to work", options: ["it would give pupils a fair quiet place to work", "it would replace all lessons", "it would make buses empty", "it would remove siblings"], explanation: "Paragraph 2 explains different home situations.", interaction: "mc", skill: "Inference" },
        { prompt: "Which resources are mentioned?", answer: "dictionaries, laptops and calm support", options: ["dictionaries, laptops and calm support", "paint, hammers and glue", "footballs and whistles", "tickets and maps"], explanation: "These are listed in paragraph 2.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What counterargument does the writer acknowledge?", answer: "staff time is limited", options: ["staff time is limited", "pupils hate quiet rooms", "the library has no books", "homework is illegal"], explanation: "Paragraph 3 begins with this concern.", interaction: "mc", skill: "Argument" },
        { prompt: "What solution is offered for organisation?", answer: "older pupil volunteers could help", options: ["older pupil volunteers could help", "younger siblings could mark work", "buses could become classrooms", "the club could be cancelled"], explanation: "The writer suggests older pupil volunteers.", interaction: "mc", skill: "Argument" },
        { prompt: "What tone is used in the letter?", answer: "reasonable and respectful", options: ["reasonable and respectful", "rude and mocking", "frightened and confused", "silly and careless"], explanation: "The writer makes a polite suggestion and acknowledges limits.", interaction: "mc", skill: "Tone" }
      ]
    },
    {
      id: "tiny-satellites",
      title: "Tiny Satellites",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. Not every satellite is the size of a car. Some modern satellites are small enough to hold in two hands. These tiny machines can still take photographs, send signals and collect data from far above Earth.

2. Their size makes them cheaper to build and launch. Instead of sending one large satellite, scientists can send a group of small ones that work together. If one fails, the whole mission does not necessarily fail with it.

3. Tiny satellites are used to track storms, study crops and test new technology. They are not perfect: they carry less power and fewer instruments than large satellites. Even so, they have opened space research to schools, universities and smaller countries that once could not afford it.`,
      questions: [
        { prompt: "How small can some modern satellites be?", answer: "small enough to hold in two hands", options: ["small enough to hold in two hands", "as large as a city", "too small to see with eyes", "the size of a mountain"], explanation: "Paragraph 1 gives this comparison.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What can tiny satellites still do?", answer: "take photographs, send signals and collect data", options: ["take photographs, send signals and collect data", "carry passengers", "grow crops", "make storms"], explanation: "Paragraph 1 lists these functions.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why can groups of small satellites be useful?", answer: "if one fails, the whole mission may still continue", options: ["if one fails, the whole mission may still continue", "they never need launching", "they are impossible to break", "they replace Earth"], explanation: "Paragraph 2 explains this advantage.", interaction: "mc", skill: "Inference" },
        { prompt: "Which use is not mentioned?", answer: "cooking food", options: ["cooking food", "tracking storms", "studying crops", "testing new technology"], explanation: "Cooking food is not listed as a use.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What limitation do tiny satellites have?", answer: "they carry less power and fewer instruments", options: ["they carry less power and fewer instruments", "they cannot send signals", "they are always heavier", "they cannot leave Earth"], explanation: "Paragraph 3 states this limitation.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does 'opened space research' mean?", answer: "made space research possible for more groups", options: ["made space research possible for more groups", "opened a door in a satellite", "removed all rules from space", "made space warmer"], explanation: "The phrase means access has widened.", interaction: "mc", skill: "Vocabulary" },
        { prompt: "How is the final paragraph balanced?", answer: "it gives uses, then a limitation, then a benefit", options: ["it gives uses, then a limitation, then a benefit", "it only praises tiny satellites", "it only criticises tiny satellites", "it gives a story about one astronaut"], explanation: "The paragraph includes both strengths and weaknesses.", interaction: "mc", skill: "Structure" },
        { prompt: "What is the purpose of the passage?", answer: "to explain what tiny satellites are and why they matter", options: ["to explain what tiny satellites are and why they matter", "to persuade readers to buy a telescope", "to tell a fantasy story", "to complain about schools"], explanation: "The text is explanatory and informative.", interaction: "mc", skill: "Purpose" }
      ]
    }
  ];

  window.GL_COMPREHENSION_BANK.push(...[
    {
      id: "rain-garden-plan",
      title: "The Rain Garden Plan",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. After three floods in five years, the town council stopped blaming the weather and started looking at the pavements. Rainwater rushed off roads, roofs and car parks faster than the drains could carry it away.

2. The new plan is to build rain gardens along the high street. These shallow planted areas collect water during heavy rain and let it soak slowly into the ground. They also give insects shelter and make grey streets look softer.

3. Some shop owners worry that the gardens will remove parking spaces. The council says only six spaces will be lost, and loading bays will remain. If the plan works, the high street may become not only drier, but greener.`,
      questions: [
        { prompt: "How many floods has the town had in five years?", answer: "three", options: ["three", "five", "six", "one"], explanation: "Paragraph 1 states there have been three floods.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What did rainwater rush off?", answer: "roads, roofs and car parks", options: ["roads, roofs and car parks", "fields only", "school desks", "trees and benches"], explanation: "Paragraph 1 lists these surfaces.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What is a rain garden?", answer: "a shallow planted area that collects rainwater", options: ["a shallow planted area that collects rainwater", "a roof made of glass", "a car park for insects", "a weather machine"], explanation: "Paragraph 2 explains what rain gardens do.", interaction: "mc", skill: "Vocabulary" },
        { prompt: "Which extra benefit is mentioned besides flood control?", answer: "they give insects shelter", options: ["they give insects shelter", "they make buses faster", "they remove all traffic", "they sell flowers"], explanation: "Paragraph 2 says they give insects shelter.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What is the shop owners' concern?", answer: "the gardens will remove parking spaces", options: ["the gardens will remove parking spaces", "the gardens will cause floods", "the insects will close shops", "the drains will disappear"], explanation: "Paragraph 3 gives this concern.", interaction: "mc", skill: "Argument" },
        { prompt: "How does the council answer the concern?", answer: "only six spaces will be lost and loading bays will remain", options: ["only six spaces will be lost and loading bays will remain", "all cars will be banned", "shops will close early", "the plan will be cancelled"], explanation: "The council gives a practical reassurance.", interaction: "mc", skill: "Argument" },
        { prompt: "What does 'grey streets look softer' suggest?", answer: "plants will make the street feel more pleasant", options: ["plants will make the street feel more pleasant", "the road will become cloth", "the rain will turn grey", "cars will become quiet"], explanation: "The phrase suggests a nicer, less harsh appearance.", interaction: "mc", skill: "Language" },
        { prompt: "What is the purpose of the passage?", answer: "to explain a town plan and its possible benefits", options: ["to explain a town plan and its possible benefits", "to tell a ghost story", "to advertise umbrellas", "to describe a holiday"], explanation: "The text explains the problem, plan and debate.", interaction: "mc", skill: "Purpose" }
      ]
    },
    {
      id: "lighthouse-keeper",
      title: "The Last Lighthouse Keeper",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. Jonah climbed the spiral stairs for the last time, counting each step because he did not trust himself to look up. For forty years, he had polished the lamp, checked the glass and watched the sea write its moods against the rocks.

2. Tomorrow, the lighthouse would become automatic. A small grey box had arrived by boat that morning, and the engineers spoke about it as if it were a miracle. Jonah thought it looked like a locked lunch tin.

3. At sunset, he lit the lamp by hand. The beam swung over the water, slow and certain. Far below, a fishing boat answered with one blink of light, and Jonah lifted his hand before remembering nobody could see him.`,
      questions: [
        { prompt: "What does Jonah count as he climbs?", answer: "each step", options: ["each step", "each boat", "each engineer", "each rock"], explanation: "The opening says he counts each step.", interaction: "mc", skill: "Retrieval" },
        { prompt: "How long has Jonah worked with the lighthouse?", answer: "forty years", options: ["forty years", "four years", "fourteen years", "one year"], explanation: "Paragraph 1 states the time.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What will happen to the lighthouse tomorrow?", answer: "it will become automatic", options: ["it will become automatic", "it will be painted red", "it will fall down", "it will become a school"], explanation: "Paragraph 2 says it will become automatic.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does Jonah compare the grey box to?", answer: "a locked lunch tin", options: ["a locked lunch tin", "a silver fish", "a glass lamp", "a folded map"], explanation: "He thinks the box looks like a locked lunch tin.", interaction: "mc", skill: "Language" },
        { prompt: "What does this comparison suggest about Jonah's attitude?", answer: "he is unimpressed by the new machine", options: ["he is unimpressed by the new machine", "he thinks it is magical", "he wants to eat lunch", "he has never seen a box"], explanation: "The ordinary comparison undercuts the engineers' excitement.", interaction: "mc", skill: "Inference" },
        { prompt: "Which phrase suggests the sea is almost alive?", answer: "watched the sea write its moods", options: ["watched the sea write its moods", "small grey box", "arrived by boat", "counting each step"], explanation: "The sea is given human-like action and feelings.", interaction: "mc", skill: "Figurative Language" },
        { prompt: "Why is the final sentence sad?", answer: "Jonah waves out of habit even though nobody can see him", options: ["Jonah waves out of habit even though nobody can see him", "the boat crashes", "the lamp goes out", "the engineers laugh"], explanation: "It shows his old role and connection are ending.", interaction: "mc", skill: "Inference" },
        { prompt: "What theme is suggested?", answer: "change can bring loss as well as progress", options: ["change can bring loss as well as progress", "machines are always evil", "boats should never use lights", "stairs are dangerous"], explanation: "Automation is useful, but Jonah loses a meaningful routine.", interaction: "mc", skill: "Theme" }
      ]
    },
    {
      id: "uniform-debate",
      title: "A Fairer Uniform Debate",
      topicId: "argument",
      unit: "Non-Fiction",
      passage: `1. School uniform debates often become arguments about style, but the real issue is fairness. A blazer that costs too much can become a barrier before a pupil has even entered the classroom.

2. I am not arguing against uniform completely. Uniform can make mornings simpler and help pupils feel part of a community. However, schools should choose affordable items available from ordinary shops, not special clothing that can only be bought from one expensive supplier.

3. A fair uniform policy would keep the shared identity but remove unnecessary cost. Plain jumpers, simple colours and second-hand sales would do more for school pride than any shiny badge stitched onto an overpriced pocket.`,
      questions: [
        { prompt: "What does the writer say the real issue is?", answer: "fairness", options: ["fairness", "fashion", "weather", "sports"], explanation: "Paragraph 1 says the real issue is fairness.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What can an expensive blazer become?", answer: "a barrier", options: ["a barrier", "a prize", "a timetable", "a badge"], explanation: "Paragraph 1 says cost can become a barrier.", interaction: "mc", skill: "Vocabulary" },
        { prompt: "Is the writer completely against uniform?", answer: "no", options: ["no", "yes", "the passage does not say", "only in winter"], explanation: "Paragraph 2 says the writer is not arguing against uniform completely.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Which benefit of uniform is mentioned?", answer: "it can help pupils feel part of a community", options: ["it can help pupils feel part of a community", "it makes lessons shorter", "it replaces homework", "it stops all arguments"], explanation: "Paragraph 2 gives this benefit.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What change does the writer want?", answer: "affordable items from ordinary shops", options: ["affordable items from ordinary shops", "no clothes at school", "only expensive suppliers", "new badges every week"], explanation: "The writer suggests ordinary shops and affordability.", interaction: "mc", skill: "Argument" },
        { prompt: "What does 'overpriced pocket' criticise?", answer: "uniform items that cost too much because of branding", options: ["uniform items that cost too much because of branding", "pockets that are too small", "jumpers with no sleeves", "pupils who dislike badges"], explanation: "The phrase criticises unnecessary cost linked to special uniform.", interaction: "mc", skill: "Inference" },
        { prompt: "How is the argument balanced?", answer: "it admits uniform has benefits before suggesting changes", options: ["it admits uniform has benefits before suggesting changes", "it refuses to consider any other view", "it only describes one blazer", "it gives no opinion"], explanation: "The writer recognises benefits but argues for affordability.", interaction: "mc", skill: "Structure" },
        { prompt: "What is the purpose of the passage?", answer: "to persuade schools to make uniform cheaper and fairer", options: ["to persuade schools to make uniform cheaper and fairer", "to advertise a clothing shop", "to explain sewing", "to tell a fictional story"], explanation: "The text argues for a fairer policy.", interaction: "mc", skill: "Purpose" }
      ]
    },
    {
      id: "ancient-footprints",
      title: "Ancient Footprints",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. On a windy beach, a line of footprints appeared after a storm stripped away the top layer of sand. They were not fresh. Scientists later discovered that the prints had been pressed into mud thousands of years ago and preserved beneath the shore.

2. The footprints varied in size. Some belonged to adults, others to children. A few crossed each other, suggesting that people had walked there more than once, perhaps collecting shellfish or moving between camps.

3. Finds like this are fragile. Sun, waves and curious visitors can damage them quickly. That is why researchers photograph, measure and scan the prints before the tide returns and hides the evidence again.`,
      questions: [
        { prompt: "What revealed the footprints?", answer: "a storm stripped away the top layer of sand", options: ["a storm stripped away the top layer of sand", "a machine dug them up", "children painted them", "the tide built a wall"], explanation: "Paragraph 1 explains how they appeared.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Were the footprints fresh?", answer: "no", options: ["no", "yes", "only some", "the passage does not say"], explanation: "The text says they were not fresh.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What were the prints pressed into?", answer: "mud", options: ["mud", "concrete", "snow", "wood"], explanation: "Paragraph 1 says they were pressed into mud.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does the variety of sizes suggest?", answer: "adults and children were there", options: ["adults and children were there", "only birds were there", "the prints are fake", "the beach was empty"], explanation: "Paragraph 2 links different sizes to adults and children.", interaction: "mc", skill: "Inference" },
        { prompt: "Why might people have walked there?", answer: "to collect shellfish or move between camps", options: ["to collect shellfish or move between camps", "to catch buses", "to build a cinema", "to plant trees"], explanation: "Paragraph 2 suggests these possibilities.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why do researchers scan the prints quickly?", answer: "the tide may return and hide or damage the evidence", options: ["the tide may return and hide or damage the evidence", "the prints will turn into gold", "the wind will make them bigger", "visitors need souvenirs"], explanation: "Paragraph 3 explains their fragility and the returning tide.", interaction: "mc", skill: "Purpose" },
        { prompt: "What does 'fragile' mean in this context?", answer: "easily damaged", options: ["easily damaged", "very noisy", "recently made", "brightly coloured"], explanation: "The following sentence explains how they can be damaged quickly.", interaction: "mc", skill: "Vocabulary" },
        { prompt: "What is the main idea of the passage?", answer: "ancient footprints can reveal evidence about past lives but must be recorded carefully", options: ["ancient footprints can reveal evidence about past lives but must be recorded carefully", "all beaches are dangerous", "storms always help tourists", "children invented shellfish"], explanation: "The passage combines discovery, interpretation and preservation.", interaction: "mc", skill: "Summary" }
      ]
    },
    {
      id: "glass-elevator",
      title: "The Glass Elevator",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. The museum guide said the glass elevator went only to the roof. But when Sami pressed the top button, the numbers did not stop at five. They climbed past six, seven, eight, while the museum shrank beneath his feet.

2. Outside the glass walls, clouds rolled open like curtains. A city of towers appeared above the real city, each building balanced on long silver legs. Tiny trains moved between them, bright as sparks.

3. The elevator doors opened onto a platform where a woman in a blue uniform checked a clipboard. "Late again," she said, although Sami had never been there before. "The sky tour started ten minutes ago."`,
      questions: [
        { prompt: "Where does the guide say the elevator goes?", answer: "to the roof", options: ["to the roof", "to the basement", "to the cafe", "to the station"], explanation: "The first sentence gives the guide's claim.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What happens to the numbers?", answer: "they climb past five", options: ["they climb past five", "they disappear", "they turn red", "they stop at one"], explanation: "The numbers keep climbing past the expected floor.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does the museum do beneath Sami's feet?", answer: "shrinks", options: ["shrinks", "burns", "spins", "opens"], explanation: "Paragraph 1 says the museum shrank beneath his feet.", interaction: "mc", skill: "Language" },
        { prompt: "What appears above the real city?", answer: "a city of towers", options: ["a city of towers", "a forest", "a river", "a desert"], explanation: "Paragraph 2 describes a city of towers.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What simile is used for the clouds?", answer: "like curtains", options: ["like curtains", "like coins", "like ladders", "like paper"], explanation: "The clouds rolled open like curtains.", interaction: "mc", skill: "Language" },
        { prompt: "Why is the woman's greeting strange?", answer: "she acts as if Sami is expected although he has never been there", options: ["she acts as if Sami is expected although he has never been there", "she cannot see him", "she refuses to speak", "she is outside the museum"], explanation: "Her comment creates mystery because Sami is new there.", interaction: "mc", skill: "Inference" },
        { prompt: "What mood is created?", answer: "wonder and mystery", options: ["wonder and mystery", "anger and boredom", "realistic sadness", "formal instruction"], explanation: "The hidden sky city and unexpected greeting create wonder.", interaction: "mc", skill: "Mood" },
        { prompt: "How does the extract end?", answer: "with an invitation into a new adventure", options: ["with an invitation into a new adventure", "with the elevator breaking", "with Sami going home", "with the guide explaining everything"], explanation: "The sky tour suggests the story is about to continue.", interaction: "mc", skill: "Structure" }
      ]
    },
    {
      id: "market-at-dawn",
      title: "Market at Dawn",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. At dawn, the market is more sound than colour. Metal shutters rattle upward. Crates thump onto stone. Sellers call greetings across the square before the first customers arrive.

2. Then the colours wake. Tomatoes shine like polished buttons, mint spills from baskets in green waves and pyramids of oranges catch the early light. A fishmonger pours ice into a tray, and the cold mist curls around his wrists.

3. By eight o'clock, the square belongs to shoppers. They test peaches with gentle thumbs, compare prices and move from stall to stall with cloth bags opening and closing like small sails.`,
      questions: [
        { prompt: "At dawn, what is the market more than colour?", answer: "sound", options: ["sound", "silence", "rain", "darkness"], explanation: "The first sentence states this.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What do metal shutters do?", answer: "rattle upward", options: ["rattle upward", "fall into the sea", "turn orange", "ring like phones"], explanation: "Paragraph 1 says shutters rattle upward.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Which simile describes tomatoes?", answer: "like polished buttons", options: ["like polished buttons", "like small sails", "like cold mist", "like green waves"], explanation: "Paragraph 2 compares tomatoes to polished buttons.", interaction: "mc", skill: "Language" },
        { prompt: "What is described as green waves?", answer: "mint", options: ["mint", "fish", "oranges", "shutters"], explanation: "Mint spills from baskets in green waves.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does the cold mist curl around?", answer: "the fishmonger's wrists", options: ["the fishmonger's wrists", "the oranges", "the shutters", "the square clock"], explanation: "Paragraph 2 gives this image.", interaction: "mc", skill: "Retrieval" },
        { prompt: "How does the structure of the passage work?", answer: "it moves from early sounds to colours to busy shoppers", options: ["it moves from early sounds to colours to busy shoppers", "it tells a mystery backwards", "it gives a list of rules", "it argues against markets"], explanation: "Each paragraph shows a later stage of the morning.", interaction: "mc", skill: "Structure" },
        { prompt: "What impression of the market is created?", answer: "lively and full of detail", options: ["lively and full of detail", "empty and frightening", "silent and dull", "formal and official"], explanation: "The sounds, colours and movement create energy.", interaction: "mc", skill: "Inference" },
        { prompt: "What are cloth bags compared to?", answer: "small sails", options: ["small sails", "polished buttons", "green waves", "ice trays"], explanation: "Paragraph 3 says bags open and close like small sails.", interaction: "mc", skill: "Language" }
      ]
    },
    {
      id: "school-garden-letter",
      title: "A Letter for a School Garden",
      topicId: "argument",
      unit: "Non-Fiction",
      passage: `1. Dear Governors, the empty patch behind the science block is not too small to matter. At the moment it grows only weeds and crisp packets. With raised beds and a water butt, it could become a school garden.

2. A garden would support science lessons, but it would also teach patience. Pupils would see that food does not appear by magic in plastic bags. They would learn to plan, share tools and notice weather in a practical way.

3. The cost need not be high. Families could donate seeds, the caretaker has spare wood and the eco-club has already offered to look after watering. Please do not leave useful ground unused.`,
      questions: [
        { prompt: "Where is the empty patch?", answer: "behind the science block", options: ["behind the science block", "inside the hall", "on the roof", "next to the bus stop"], explanation: "The first sentence gives the location.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does the patch currently grow?", answer: "weeds and crisp packets", options: ["weeds and crisp packets", "roses and apples", "tomatoes and mint", "sunflowers only"], explanation: "Paragraph 1 uses this phrase.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What could help turn it into a garden?", answer: "raised beds and a water butt", options: ["raised beds and a water butt", "a cinema screen", "a new bus route", "silver badges"], explanation: "Paragraph 1 names these items.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What lesson besides science does the writer mention?", answer: "patience", options: ["patience", "swimming", "driving", "painting walls"], explanation: "Paragraph 2 says it would teach patience.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does 'food does not appear by magic in plastic bags' mean?", answer: "pupils would understand where food really comes from", options: ["pupils would understand where food really comes from", "food bags are magical", "gardens dislike plastic", "science lessons are tricks"], explanation: "The phrase explains the value of growing food.", interaction: "mc", skill: "Inference" },
        { prompt: "How does the writer show the plan is affordable?", answer: "by listing donated seeds, spare wood and eco-club help", options: ["by listing donated seeds, spare wood and eco-club help", "by asking for expensive machines", "by cancelling science", "by selling the school"], explanation: "Paragraph 3 gives low-cost resources.", interaction: "mc", skill: "Argument" },
        { prompt: "Who has offered to help with watering?", answer: "the eco-club", options: ["the eco-club", "the governors", "bus drivers", "the fishmonger"], explanation: "Paragraph 3 says the eco-club offered.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What is the purpose of the letter?", answer: "to persuade governors to create a school garden", options: ["to persuade governors to create a school garden", "to complain about science forever", "to sell crisp packets", "to describe a forest holiday"], explanation: "The writer argues for using the empty patch.", interaction: "mc", skill: "Purpose" }
      ]
    },
    {
      id: "the-ink-door",
      title: "The Ink Door",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. The door appeared in Asha's exercise book during maths. At first it was only a rectangle of ink in the margin. Then a handle formed, followed by a keyhole no wider than a pin.

2. Asha tried to rub it out, but the rubber passed over the drawing as if it were printed beneath the paper. When the teacher turned to the board, the tiny handle twisted.

3. From behind the ink door came a smell of rain, warm bread and something burning. Asha bent closer. The door opened a crack, and a line of golden light ran across her fractions.`,
      questions: [
        { prompt: "Where does the door appear?", answer: "in Asha's exercise book", options: ["in Asha's exercise book", "on the classroom wall", "inside a cupboard", "under the desk"], explanation: "The first sentence gives the location.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What subject is Asha in when it appears?", answer: "maths", options: ["maths", "music", "history", "PE"], explanation: "The passage says it appears during maths.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What forms after the rectangle?", answer: "a handle and a keyhole", options: ["a handle and a keyhole", "a window and roof", "a face and crown", "a river and bridge"], explanation: "Paragraph 1 describes the handle and keyhole forming.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why is Asha unable to rub it out?", answer: "the rubber passes over it as if it is beneath the paper", options: ["the rubber passes over it as if it is beneath the paper", "she has no rubber", "the teacher stops her", "the book is wet"], explanation: "Paragraph 2 explains what happens.", interaction: "mc", skill: "Inference" },
        { prompt: "Which sense is used in paragraph 3?", answer: "smell", options: ["smell", "taste only", "hearing only", "touch only"], explanation: "A smell of rain, bread and burning comes from the door.", interaction: "mc", skill: "Language" },
        { prompt: "What crosses Asha's fractions?", answer: "a line of golden light", options: ["a line of golden light", "a black spider", "a blue river", "a chalk mark"], explanation: "The final sentence says this.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What mood is created?", answer: "magical and suspenseful", options: ["magical and suspenseful", "ordinary and dull", "angry and realistic", "comic and noisy"], explanation: "The impossible door and sensory details create suspense.", interaction: "mc", skill: "Mood" },
        { prompt: "How does the extract make the reader want to continue?", answer: "it ends just as the door opens", options: ["it ends just as the door opens", "it explains the whole mystery", "it returns to normal lessons", "it has no problem"], explanation: "The ending leaves the reader wanting to know what is beyond the door.", interaction: "mc", skill: "Structure" }
      ]
    },
    {
      id: "plastic-free-week",
      title: "Plastic-Free Week",
      topicId: "rhetoric",
      unit: "Non-Fiction",
      passage: `1. Next week, our class will try a plastic-free challenge. Nobody expects perfection. The aim is to notice how often single-use plastic appears in ordinary routines: snack wrappers, bottles, bags, straws and packaging around things that already have packaging.

2. Why bother for only one week? Because noticing is the first step to changing. Because one bottle avoided is still one bottle avoided. Because habits become easier when people try them together.

3. Bring a reusable bottle. Choose unpackaged fruit. Put lunch in a container that can come home again. At the end of the week, we will count what we avoided, not to boast, but to learn where the next change should begin.`,
      questions: [
        { prompt: "What challenge will the class try?", answer: "a plastic-free challenge", options: ["a plastic-free challenge", "a spelling race", "a football tournament", "a sleep study"], explanation: "The first sentence states the challenge.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Does the writer expect perfection?", answer: "no", options: ["no", "yes", "only from teachers", "the passage does not say"], explanation: "Paragraph 1 says nobody expects perfection.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Which item is not listed as single-use plastic?", answer: "glass plate", options: ["glass plate", "snack wrappers", "bottles", "straws"], explanation: "Glass plate is not in the list.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What repeated word begins three sentences in paragraph 2?", answer: "Because", options: ["Because", "Plastic", "Week", "Bring"], explanation: "The paragraph repeats Because.", interaction: "mc", skill: "Language" },
        { prompt: "What is the effect of the repetition?", answer: "it builds a persuasive rhythm of reasons", options: ["it builds a persuasive rhythm of reasons", "it makes the text uncertain", "it hides the main point", "it shows the writer forgot punctuation"], explanation: "Repetition links the reasons and adds force.", interaction: "mc", skill: "Rhetoric" },
        { prompt: "Which action is suggested?", answer: "bring a reusable bottle", options: ["bring a reusable bottle", "buy more straws", "throw away lunch boxes", "wrap fruit twice"], explanation: "Paragraph 3 gives this instruction.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why will the class count what they avoided?", answer: "to learn where the next change should begin", options: ["to learn where the next change should begin", "to boast", "to punish people", "to cancel lunch"], explanation: "The final sentence explains the reason.", interaction: "mc", skill: "Purpose" },
        { prompt: "What is the main message?", answer: "small shared changes can help people build better habits", options: ["small shared changes can help people build better habits", "plastic is never useful", "one week changes nothing at all", "fruit should be banned"], explanation: "The challenge focuses on noticing and shared habits.", interaction: "mc", skill: "Summary" }
      ]
    },
    {
      id: "beneath-the-stage",
      title: "Beneath the Stage",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. During rehearsals, Maya heard music from beneath the stage. It was not the school piano; that stood locked beside the curtains. This music was thinner, older and full of pauses, as if someone were remembering the tune while playing it.

2. She lifted a loose floorboard behind the scenery flats. Cold air breathed through the gap. Below, steps led into darkness, and on the first step lay a programme from a play performed fifty years ago.

3. Maya should have called a teacher. Instead, she folded the programme into her pocket and climbed down. The music stopped at once, and a voice from the dark asked, "Are they clapping yet?"`,
      questions: [
        { prompt: "Where does Maya hear music coming from?", answer: "beneath the stage", options: ["beneath the stage", "from the playground", "inside the piano", "from the roof"], explanation: "The first sentence gives the source.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why is it not the school piano?", answer: "the school piano is locked beside the curtains", options: ["the school piano is locked beside the curtains", "the piano is outside", "Maya is playing it", "the piano has disappeared"], explanation: "Paragraph 1 explains why.", interaction: "mc", skill: "Retrieval" },
        { prompt: "How is the music described?", answer: "thinner, older and full of pauses", options: ["thinner, older and full of pauses", "loud, modern and fast", "silent and cheerful", "angry and electronic"], explanation: "These adjectives appear in paragraph 1.", interaction: "mc", skill: "Language" },
        { prompt: "What does Maya lift?", answer: "a loose floorboard", options: ["a loose floorboard", "a curtain", "a piano lid", "a ticket machine"], explanation: "Paragraph 2 says she lifts a loose floorboard.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What is on the first step?", answer: "a programme from a play performed fifty years ago", options: ["a programme from a play performed fifty years ago", "a torch", "a gold coin", "a pair of shoes"], explanation: "Paragraph 2 states this detail.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does 'Cold air breathed through the gap' suggest?", answer: "the space below feels alive and eerie", options: ["the space below feels alive and eerie", "someone opened a freezer", "Maya is outside", "the stage is warm"], explanation: "The personification creates an eerie atmosphere.", interaction: "mc", skill: "Inference" },
        { prompt: "Why does the final question create mystery?", answer: "it suggests someone from the old play may still be waiting", options: ["it suggests someone from the old play may still be waiting", "it explains the rehearsal schedule", "it proves the teacher is joking", "it ends the performance"], explanation: "The old programme and voice connect past and present.", interaction: "mc", skill: "Structure" },
        { prompt: "What does Maya's choice to climb down show?", answer: "curiosity overcomes caution", options: ["curiosity overcomes caution", "she dislikes drama", "she is trying to leave school", "she wants applause"], explanation: "She knows she should call a teacher but investigates anyway.", interaction: "mc", skill: "Character" }
      ]
    },
    {
      id: "floating-farm",
      title: "The Floating Farm",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. In a crowded harbour, a floating farm rises and falls with the tide. Its vegetable beds sit on wide platforms, and rainwater is stored in tanks beneath the deck.

2. The idea began after storms flooded fields outside the city. Farmers wanted a way to grow food close to customers without depending on land that might be underwater. The first floating farm was small, but it produced herbs, lettuce and strawberries.

3. Floating farms will not replace ordinary farms. They need careful engineering and calm water. However, they show how cities can adapt when space is limited and weather becomes less predictable.`,
      questions: [
        { prompt: "Where is the floating farm?", answer: "in a crowded harbour", options: ["in a crowded harbour", "on a mountain", "inside a supermarket", "under a school"], explanation: "Paragraph 1 gives the location.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What happens to the farm with the tide?", answer: "it rises and falls", options: ["it rises and falls", "it disappears", "it flies", "it turns into a boat"], explanation: "The first sentence states this.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Where is rainwater stored?", answer: "in tanks beneath the deck", options: ["in tanks beneath the deck", "inside the lettuce", "on the roof only", "in paper bags"], explanation: "Paragraph 1 explains the storage.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why did the idea begin?", answer: "storms flooded fields outside the city", options: ["storms flooded fields outside the city", "farmers disliked vegetables", "the harbour was empty", "customers stopped eating"], explanation: "Paragraph 2 gives the reason.", interaction: "mc", skill: "Cause and Effect" },
        { prompt: "Which crop is not mentioned?", answer: "potatoes", options: ["potatoes", "herbs", "lettuce", "strawberries"], explanation: "Potatoes are not listed.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What limitation is mentioned?", answer: "floating farms need careful engineering and calm water", options: ["floating farms need careful engineering and calm water", "they cannot grow food", "they need mountain snow", "they are always enormous"], explanation: "Paragraph 3 gives this limitation.", interaction: "mc", skill: "Retrieval" },
        { prompt: "How is the final paragraph balanced?", answer: "it says floating farms have limits but can still be useful", options: ["it says floating farms have limits but can still be useful", "it only praises them", "it only rejects them", "it gives no opinion"], explanation: "The paragraph includes both limitation and value.", interaction: "mc", skill: "Structure" },
        { prompt: "What is the main purpose of the passage?", answer: "to explain an unusual farming idea", options: ["to explain an unusual farming idea", "to sell boat tickets", "to tell a fairy tale", "to complain about strawberries"], explanation: "The text explains how and why floating farms work.", interaction: "mc", skill: "Purpose" }
      ]
    },
    {
      id: "mirror-lake",
      title: "Mirror Lake",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. The lake behind the hotel reflected everything except people. Clouds floated in it. Pine trees leaned over it. The moon left a silver path across it at night. But when Lena stood on the bank, the water showed only reeds where her reflection should have been.

2. Her cousin laughed and threw a pebble. Rings spread across the surface, breaking the moon path into pieces. For one second, Lena saw a face beneath the ripples. It was hers, but older, with wet hair and frightened eyes.

3. Then the lake became smooth again. From somewhere among the reeds came a whisper: "You came back."`,
      questions: [
        { prompt: "What does the lake not reflect?", answer: "people", options: ["people", "clouds", "pine trees", "the moon"], explanation: "The first sentence says it reflects everything except people.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Where is the lake?", answer: "behind the hotel", options: ["behind the hotel", "inside a cave", "on the roof", "under the school"], explanation: "Paragraph 1 gives the location.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does Lena see where her reflection should be?", answer: "reeds", options: ["reeds", "a boat", "her cousin", "a lantern"], explanation: "The water shows only reeds.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does her cousin throw?", answer: "a pebble", options: ["a pebble", "a stick", "a key", "a coin"], explanation: "Paragraph 2 states this action.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What appears beneath the ripples?", answer: "an older version of Lena's face", options: ["an older version of Lena's face", "a fish", "a hotel sign", "a pine cone"], explanation: "The face is hers, but older.", interaction: "mc", skill: "Inference" },
        { prompt: "What mood does the extract create?", answer: "unsettling and mysterious", options: ["unsettling and mysterious", "comic and playful", "formal and calm", "bright and ordinary"], explanation: "The missing reflection, older face and whisper create unease.", interaction: "mc", skill: "Mood" },
        { prompt: "Why is 'You came back' mysterious?", answer: "it suggests Lena has a hidden connection to the lake", options: ["it suggests Lena has a hidden connection to the lake", "it explains the hotel rules", "it is a joke by her cousin", "it describes the weather"], explanation: "The whisper implies a past Lena does not understand.", interaction: "mc", skill: "Inference" },
        { prompt: "How does the structure create suspense?", answer: "it moves from a strange rule to a frightening glimpse and a whisper", options: ["it moves from a strange rule to a frightening glimpse and a whisper", "it begins with the answer", "it explains the whole mystery", "it gives a list of hotel rooms"], explanation: "Each paragraph increases the mystery.", interaction: "mc", skill: "Structure" }
      ]
    },
    {
      id: "breaktime-bell",
      title: "Should Break Be Longer?",
      topicId: "argument",
      unit: "Non-Fiction",
      passage: `1. Ten minutes is barely enough time to reach the playground, eat a snack and speak to a friend. By the time pupils have begun to relax, the bell orders them back inside.

2. A longer morning break would not waste learning time; it could protect it. Pupils who have moved, talked and eaten properly return to lessons with better focus. Teachers also benefit when the class is not restless five minutes into the next task.

3. Of course, the timetable is crowded. But adding five minutes to break and trimming transitions between lessons would be a sensible trial. We measure test scores carefully. We should measure energy and attention just as carefully.`,
      questions: [
        { prompt: "How long is the current break?", answer: "ten minutes", options: ["ten minutes", "five minutes", "thirty minutes", "one hour"], explanation: "The opening says ten minutes.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What three things does the writer say pupils need time for?", answer: "reach the playground, eat a snack and speak to a friend", options: ["reach the playground, eat a snack and speak to a friend", "sleep, swim and shop", "clean windows, cook lunch and draw maps", "write tests, mark books and drive home"], explanation: "Paragraph 1 lists these actions.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What is the writer's main argument?", answer: "morning break should be longer", options: ["morning break should be longer", "break should be removed", "lessons should be cancelled", "snacks should be banned"], explanation: "The text argues for a longer break.", interaction: "mc", skill: "Argument" },
        { prompt: "Why might longer break protect learning time?", answer: "pupils may return with better focus", options: ["pupils may return with better focus", "teachers can avoid lessons", "the bell will be louder", "homework will disappear"], explanation: "Paragraph 2 connects movement, food and talk with focus.", interaction: "mc", skill: "Inference" },
        { prompt: "Who else benefits besides pupils?", answer: "teachers", options: ["teachers", "shop owners", "bus drivers", "visitors"], explanation: "Paragraph 2 says teachers also benefit.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What counterargument is acknowledged?", answer: "the timetable is crowded", options: ["the timetable is crowded", "pupils hate snacks", "teachers dislike attention", "the playground is too colourful"], explanation: "Paragraph 3 begins with this concern.", interaction: "mc", skill: "Argument" },
        { prompt: "What trial is suggested?", answer: "add five minutes to break and trim transitions", options: ["add five minutes to break and trim transitions", "add one hour to lunch", "remove every lesson", "start school at midnight"], explanation: "Paragraph 3 gives the proposed trial.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does the final sentence suggest?", answer: "energy and attention are important enough to measure", options: ["energy and attention are important enough to measure", "test scores do not exist", "breaks should be random", "bells are unfair"], explanation: "The writer compares attention with test scores to show importance.", interaction: "mc", skill: "Inference" }
      ]
    },
    {
      id: "wildlife-bridge",
      title: "The Wildlife Bridge",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. The new bridge over the motorway was not built for cars or people. It was built for deer, foxes, badgers and insects. From above, it looks like a strip of meadow stitched across six lanes of traffic.

2. Before the bridge, animals tried to cross the road at night. Many did not survive. The bridge gives them a safer route between the woods on either side, with soil deep enough for grasses and small shrubs.

3. Cameras show that animals were cautious at first. For several weeks, only birds and mice used it. Then came foxes, then deer. The bridge did not force nature to move; it quietly invited it.`,
      questions: [
        { prompt: "Who was the bridge built for?", answer: "wildlife such as deer, foxes, badgers and insects", options: ["wildlife such as deer, foxes, badgers and insects", "cars only", "train passengers", "shop customers"], explanation: "Paragraph 1 lists the animals.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does the bridge look like from above?", answer: "a strip of meadow stitched across traffic", options: ["a strip of meadow stitched across traffic", "a glass tower", "a silver tunnel", "a car park"], explanation: "Paragraph 1 uses this image.", interaction: "mc", skill: "Language" },
        { prompt: "What problem existed before the bridge?", answer: "animals tried to cross the motorway and many died", options: ["animals tried to cross the motorway and many died", "cars could not find the road", "the woods disappeared", "insects blocked traffic lights"], explanation: "Paragraph 2 explains the danger.", interaction: "mc", skill: "Cause and Effect" },
        { prompt: "What does the bridge connect?", answer: "woods on either side of the motorway", options: ["woods on either side of the motorway", "two schools", "a harbour and a cinema", "two train stations"], explanation: "Paragraph 2 gives the connection.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What used the bridge first?", answer: "birds and mice", options: ["birds and mice", "deer and foxes", "badgers and cars", "people and buses"], explanation: "Paragraph 3 says only birds and mice used it at first.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does 'cautious' mean?", answer: "careful and not fully confident", options: ["careful and not fully confident", "angry and loud", "fast and careless", "brightly coloured"], explanation: "The animals use the bridge slowly over time.", interaction: "mc", skill: "Vocabulary" },
        { prompt: "Why is the final sentence effective?", answer: "it suggests the bridge works gently with animal behaviour", options: ["it suggests the bridge works gently with animal behaviour", "it says nature can read signs", "it proves traffic is quiet", "it blames birds"], explanation: "The sentence personifies the bridge as an invitation.", interaction: "mc", skill: "Inference" },
        { prompt: "What is the purpose of the passage?", answer: "to explain how a bridge helps wildlife cross safely", options: ["to explain how a bridge helps wildlife cross safely", "to advertise motorway driving", "to tell a fantasy about insects", "to argue against woods"], explanation: "The passage explains the bridge and its impact.", interaction: "mc", skill: "Purpose" }
      ]
    },
    {
      id: "museum-of-lost-things",
      title: "The Museum of Lost Things",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. The museum had no sign, only a bell that rang when someone nearby remembered something they had lost. Niko found it by accident after thinking about his blue scarf, the one that had vanished on a train two winters ago.

2. Inside, shelves stretched into shadows. There were umbrellas, gloves, keys, toy soldiers, single earrings and hundreds of scarves folded by colour. A woman at the desk looked up. "Objects are easy," she said. "Lost moments are upstairs."

3. Niko should have asked about the scarf. Instead, he thought of the last afternoon with his grandmother, when she had taught him to whistle through a blade of grass. Somewhere above him, a door clicked open.`,
      questions: [
        { prompt: "What rings near the museum?", answer: "a bell", options: ["a bell", "a phone", "a clock", "a whistle"], explanation: "The first sentence mentions a bell.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What had Niko lost?", answer: "a blue scarf", options: ["a blue scarf", "a toy soldier", "a key", "an umbrella"], explanation: "Paragraph 1 names his lost scarf.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Where did the scarf vanish?", answer: "on a train", options: ["on a train", "in a museum", "under a bed", "at school"], explanation: "Paragraph 1 says it vanished on a train.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Which objects are listed inside the museum?", answer: "umbrellas, gloves, keys and more", options: ["umbrellas, gloves, keys and more", "cars and boats", "paintings only", "books and cakes"], explanation: "Paragraph 2 lists many lost objects.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does the woman mean by 'Lost moments are upstairs'?", answer: "the museum can hold memories as well as objects", options: ["the museum can hold memories as well as objects", "time is sold on the roof", "objects are forbidden upstairs", "Niko should leave"], explanation: "The phrase suggests the museum deals with memories too.", interaction: "mc", skill: "Inference" },
        { prompt: "What memory does Niko think about?", answer: "his grandmother teaching him to whistle through grass", options: ["his grandmother teaching him to whistle through grass", "buying a toy soldier", "losing a key", "reading a museum sign"], explanation: "Paragraph 3 gives this memory.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why does the door clicking open create suspense?", answer: "it suggests the museum is responding to Niko's memory", options: ["it suggests the museum is responding to Niko's memory", "it means the museum is closing", "it proves the scarf is blue", "it explains the train"], explanation: "The door opens after he thinks of a lost moment.", interaction: "mc", skill: "Structure" },
        { prompt: "What theme is suggested?", answer: "memories can feel as important as possessions", options: ["memories can feel as important as possessions", "umbrellas are always lost", "trains are magical", "signs are unnecessary"], explanation: "Niko shifts from the scarf to a precious memory.", interaction: "mc", skill: "Theme" }
      ]
    },
    {
      id: "silent-fireworks",
      title: "Silent Fireworks",
      topicId: "rhetoric",
      unit: "Non-Fiction",
      passage: `1. Fireworks can be beautiful, but beauty should not have to sound like panic. Every year, loud fireworks frighten pets, wake babies and disturb people who find sudden noise painful or upsetting.

2. Silent fireworks are not completely silent, but they are far quieter. They still create colour, pattern and celebration without the sharp explosions that echo between houses. Several towns now use them for public displays.

3. We should do the same. A celebration that includes more people and harms fewer animals is not less exciting; it is more thoughtful. The sky can sparkle without shaking every window below it.`,
      questions: [
        { prompt: "What does the writer say fireworks can be?", answer: "beautiful", options: ["beautiful", "invisible", "silent always", "boring always"], explanation: "The first sentence acknowledges their beauty.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Who or what can loud fireworks affect?", answer: "pets, babies and people upset by sudden noise", options: ["pets, babies and people upset by sudden noise", "only birds", "only drivers", "nobody"], explanation: "Paragraph 1 lists these groups.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Are silent fireworks completely silent?", answer: "no", options: ["no", "yes", "only indoors", "the passage does not say"], explanation: "Paragraph 2 says they are not completely silent.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What do silent fireworks still create?", answer: "colour, pattern and celebration", options: ["colour, pattern and celebration", "rain and wind", "traffic and smoke", "homework and tests"], explanation: "Paragraph 2 lists these effects.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What is the writer arguing for?", answer: "using silent fireworks for public displays", options: ["using silent fireworks for public displays", "banning colour", "having fireworks every day", "closing towns"], explanation: "Paragraph 3 says 'We should do the same'.", interaction: "mc", skill: "Argument" },
        { prompt: "What does 'beauty should not have to sound like panic' suggest?", answer: "celebrations should be enjoyable without frightening noise", options: ["celebrations should be enjoyable without frightening noise", "beauty is always silent", "panic is beautiful", "windows enjoy fireworks"], explanation: "The phrase contrasts visual beauty with harmful sound.", interaction: "mc", skill: "Language" },
        { prompt: "How does the writer make the idea sound fair?", answer: "by saying celebrations can include more people and harm fewer animals", options: ["by saying celebrations can include more people and harm fewer animals", "by ignoring anyone who likes fireworks", "by saying fireworks are ugly", "by blaming babies"], explanation: "The writer frames the change as thoughtful and inclusive.", interaction: "mc", skill: "Rhetoric" },
        { prompt: "What is the purpose of the passage?", answer: "to persuade readers to support quieter fireworks", options: ["to persuade readers to support quieter fireworks", "to explain how to build fireworks", "to describe a bonfire story", "to advertise windows"], explanation: "The passage argues for a change in public displays.", interaction: "mc", skill: "Purpose" }
      ]
    },
    {
      id: "coral-nursery",
      title: "The Coral Nursery",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. A coral nursery does not look like a nursery on land. There are no cots or blankets. Instead, small pieces of coral hang from underwater frames, where divers can check their growth.

2. Coral reefs are damaged by warming seas, pollution and storms. In nurseries, scientists grow stronger fragments before planting them back onto damaged reefs. The work is slow, but each healthy piece can become a home for fish and tiny sea creatures.

3. Coral restoration is not a complete solution. Reefs still need cleaner water and cooler seas. But nurseries give damaged areas a chance to recover while people tackle the larger problems.`,
      questions: [
        { prompt: "What hangs from underwater frames?", answer: "small pieces of coral", options: ["small pieces of coral", "cots and blankets", "fishing nets", "glass bottles"], explanation: "Paragraph 1 explains the nursery setup.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Who checks the coral's growth?", answer: "divers", options: ["divers", "drivers", "gardeners", "pilots"], explanation: "Paragraph 1 says divers can check the growth.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Which cause of reef damage is not mentioned?", answer: "loud music", options: ["loud music", "warming seas", "pollution", "storms"], explanation: "Loud music is not listed.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why do scientists grow coral fragments in nurseries?", answer: "to plant stronger coral back onto damaged reefs", options: ["to plant stronger coral back onto damaged reefs", "to sell blankets underwater", "to make fish leave", "to build boats"], explanation: "Paragraph 2 states the purpose.", interaction: "mc", skill: "Purpose" },
        { prompt: "What can each healthy piece of coral become?", answer: "a home for fish and tiny sea creatures", options: ["a home for fish and tiny sea creatures", "a new storm", "a blanket", "a machine"], explanation: "Paragraph 2 says this.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What limitation does the writer mention?", answer: "coral restoration is not a complete solution", options: ["coral restoration is not a complete solution", "coral cannot grow", "divers cannot swim", "reefs need more pollution"], explanation: "Paragraph 3 begins with this point.", interaction: "mc", skill: "Argument" },
        { prompt: "What larger problems still need tackling?", answer: "cleaner water and cooler seas", options: ["cleaner water and cooler seas", "more cots and blankets", "larger frames only", "fewer fish homes"], explanation: "Paragraph 3 names these wider needs.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What is the structure of the passage?", answer: "it explains the nursery, the problem, then the limits and value of the solution", options: ["it explains the nursery, the problem, then the limits and value of the solution", "it tells a personal diary", "it argues against all science", "it lists fish names only"], explanation: "The paragraphs move from description to problem to balanced conclusion.", interaction: "mc", skill: "Structure" }
      ]
    },
    {
      id: "bus-stop-library",
      title: "The Bus Stop Library",
      topicId: "nonfiction-questions",
      unit: "Non-Fiction",
      passage: `1. The bus stop library began with one shelf and a handwritten sign: Take a book, leave a book, or just borrow one for the journey. Within a month, the shelter held mysteries, picture books, cookbooks and revision guides.

2. The idea worked because it fitted into waiting time. People who would never plan a library visit found themselves reading the first page of a novel while the number 42 bus was late. Children swapped comics. Commuters left magazines for strangers.

3. Not every book returned, but enough did. More importantly, people began treating the bus stop differently. It was still a place to wait, but it had also become a tiny shared room for the street.`,
      questions: [
        { prompt: "What did the handwritten sign say?", answer: "Take a book, leave a book, or just borrow one for the journey", options: ["Take a book, leave a book, or just borrow one for the journey", "Do not read here", "Buy a ticket first", "Only adults may borrow"], explanation: "The sign is quoted in paragraph 1.", interaction: "mc", skill: "Retrieval" },
        { prompt: "How long did it take for the shelter to hold many types of books?", answer: "within a month", options: ["within a month", "after ten years", "by the next hour", "the passage does not say"], explanation: "Paragraph 1 says within a month.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Which type of book is not listed?", answer: "atlas", options: ["atlas", "mysteries", "picture books", "revision guides"], explanation: "Atlas is not in the list.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why did the idea work?", answer: "it fitted into waiting time", options: ["it fitted into waiting time", "buses stopped running", "books became free everywhere", "nobody wanted libraries"], explanation: "Paragraph 2 states this reason.", interaction: "mc", skill: "Inference" },
        { prompt: "What does the late number 42 bus example show?", answer: "people read when books are available during ordinary moments", options: ["people read when books are available during ordinary moments", "all buses are unreliable", "novels are only one page", "bus stops are libraries by law"], explanation: "The example shows reading can happen during waiting time.", interaction: "mc", skill: "Inference" },
        { prompt: "Did every book return?", answer: "no", options: ["no", "yes", "only cookbooks", "the passage does not say"], explanation: "Paragraph 3 says not every book returned.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does 'a tiny shared room for the street' suggest?", answer: "the bus stop became a small community space", options: ["the bus stop became a small community space", "a room was built inside a bus", "the street became private", "books made the shelter bigger"], explanation: "The phrase shows the bus stop gained a community purpose.", interaction: "mc", skill: "Language" },
        { prompt: "What is the main idea?", answer: "a simple book shelf changed how people used a public place", options: ["a simple book shelf changed how people used a public place", "bus stops should close", "revision guides are mysteries", "people dislike sharing"], explanation: "The passage focuses on a small idea changing behaviour.", interaction: "mc", skill: "Summary" }
      ]
    },
    {
      id: "starling-code",
      title: "The Starling Code",
      topicId: "fiction-questions",
      unit: "Literature",
      passage: `1. Every evening, the starlings gathered above the flats and wrote messages in the sky. Most people saw only a twisting cloud of birds. Leila saw letters.

2. Her notebook was full of translations: rain soon, fox below, window open. The messages were never wrong. So when the flock curved into three words she had never seen before, Leila's pencil froze.

3. DO NOT SLEEP, the birds wrote. Then they scattered, and every light in the flats went out at once.`,
      questions: [
        { prompt: "Where do the starlings gather?", answer: "above the flats", options: ["above the flats", "inside the library", "under the bridge", "on a train"], explanation: "The first sentence gives the location.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What do most people see?", answer: "a twisting cloud of birds", options: ["a twisting cloud of birds", "clear letters", "a fox", "a notebook"], explanation: "Paragraph 1 contrasts most people with Leila.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does Leila see?", answer: "letters", options: ["letters", "numbers", "maps", "coins"], explanation: "The passage says Leila saw letters.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What is in Leila's notebook?", answer: "translations of the birds' messages", options: ["translations of the birds' messages", "homework answers", "bus times", "shopping lists"], explanation: "Paragraph 2 gives examples of translations.", interaction: "mc", skill: "Retrieval" },
        { prompt: "What does 'Leila's pencil froze' suggest?", answer: "she is shocked or frightened", options: ["she is shocked or frightened", "the pencil turns to ice", "she is bored", "the notebook is full"], explanation: "The phrase shows her sudden fear or surprise.", interaction: "mc", skill: "Inference" },
        { prompt: "What warning do the birds write?", answer: "DO NOT SLEEP", options: ["DO NOT SLEEP", "RAIN SOON", "FOX BELOW", "WINDOW OPEN"], explanation: "Paragraph 3 gives the warning.", interaction: "mc", skill: "Retrieval" },
        { prompt: "Why is the ending dramatic?", answer: "the warning is followed by every light going out", options: ["the warning is followed by every light going out", "Leila finishes her homework", "the birds sing gently", "the sun rises"], explanation: "The blackout makes the warning feel urgent.", interaction: "mc", skill: "Structure" },
        { prompt: "What genre does the extract most suggest?", answer: "mystery or supernatural fiction", options: ["mystery or supernatural fiction", "sports report", "recipe", "formal letter"], explanation: "Birds writing warnings in the sky creates a supernatural mystery.", interaction: "mc", skill: "Genre" }
      ]
    }
  ]);
})();
