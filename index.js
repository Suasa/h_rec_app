//ボタンを押すごとに画面が切り替わる関数
$(function () {

    $(".btn").on("click", function () {
      $(this).closest("div").css("display", "none");
      id = $(this).attr("href");
      $(id).addClass("fit").fadeIn("slow").show();
    });

      var answers =[];

      // 潜在目的変数
      // 音楽
      var Classical_music = 0;
      var Pop = 0;
      var Rock = 0;
      var Metal_or_Hardrock = 0;
      var Hiphop_Rap = 0;
      var Techno_Trance = 0;
      var Opera = 0;
      // 映画
      var Horror = 0;
      var Comedy = 0;
      var Romantic = 0;
      var Sci_fi = 0;
      var Animated = 0;
      var Documentary = 0;
      var Action = 0;
      // 学問
      var Mathematics = 0;
      var Physics = 0;
      var Chemistry = 0;
      var Biology = 0;

      var Geography = 0;
      var History = 0;
      var Economy_Management = 0;
      var Law = 0;
      var Politics = 0;
      var Foreign_languages = 0;
      var Psychology = 0;

      // 一般
      var Dancing = 0;
      var Musical_instruments = 0;
      var Passive_sport = 0;
      var Shopping = 0;
      var Theatre = 0;
      var Internet = 0;
      var PC = 0;
      var Art_exhibitions = 0;
      var Pets = 0;

      // 目的変数
      // 音楽
      var recommended_Classical_music = 0;
      var recommended_Pop = 0;
      var recommended_Rock = 0;
      var recommended_Metal_or_Hardrock = 0;
      var recommended_Hiphop_Rap = 0;
      var recommended_Techno_Trance = 0;
      var recommended_Opera = 0;
      // 映画
      var recommended_Horror = 0;
      var recommended_Comedy = 0;
      var recommended_Romantic = 0;
      var recommended_Sci_fi = 0;
      var recommended_Animated = 0;
      var recommended_Documentary = 0;
      var recommended_Action = 0;
      // 学問
      var recommended_Mathematics = 0;
      var recommended_Physics = 0;
      var recommended_Chemistry = 0;
      var recommended_Biology = 0;

      var recommended_Geography = 0;
      var recommended_History = 0;
      var recommended_Economy_Management = 0;
      var recommended_Law = 0;
      var recommended_Politics = 0;
      var recommended_Foreign_languages = 0;
      var recommended_Psychology = 0;

      // 一般
      var recommended_Dancing = 0;
      var recommended_Musical_instruments = 0;
      var recommended_Passive_sport = 0;
      var recommended_Shopping = 0;
      var recommended_Theatre = 0;
      var recommended_Internet = 0;
      var recommended_PC = 0;
      var recommended_Art_exhibitions = 0;
      var recommended_Pets = 0;

    $(".btn").each(function(){
      $(this).on('click',function(){
        var value = $(this).data("value");
         answers.push(value);

         //説明変数
         var Daily_events = answers[1];
         var Prioritising_workload = answers[2];
         var Writing_notes = answers[3];
         var Workaholism = answers[4];
         var Thinking_ahead = answers[5];
         var Final_judgement = answers[6];
         var Reliability = answers[7];
         var Keeping_promises = answers[8];
         var Loss_of_interest = answers[9];
         var Friends_versus_money = answers[10];

         var Funniness = answers[11];
         var Fake = answers[12];
         var Criminal_damage = answers[13];
         var Decision_making = answers[14];
         var Elections = answers[15];
         var Self_criticism = answers[16];
         var Judgment_calls = answers[17];
         var Hypochondria = answers[18];
         var Empathy = answers[19];
         var Eating_to_survive = answers[20];

         var Compassion_to_animals = answers[21];
         var Borrowed_stuff = answers[22];
         var Loneliness = answers[23];
         var Cheating_in_school = answers[24];
         var Health = answers[25];
         var Changing_the_past = answers[26];
         var God = answers[27];
         var Dreams = answers[28];
         var Charity = answers[29];
         var Number_of_friends = answers[30];

         var Waiting = answers[31];
         var New_environment = answers[32];
         var Mood_swings = answers[33];
         var Appearence_and_gestures = answers[34];
         var Socializing = answers[35];
         var Achievements = answers[36];
         var Responding_to_a_serious_letter = answers[37];
         var Children = answers[38];
         var Assertiveness = answers[39];
         var Getting_angry = answers[40];

         var Knowing_the_right_people = answers[41];
         var Public_speaking = answers[42];
         var Unpopularity = answers[43];
         var Life_struggles = answers[44];
         var Happiness_in_life = answers[45];
         var Energy_levels = answers[46];
         var Small___big_dogs = answers[47];
         var Personality = answers[48];
         var Finding_lost_valuables = answers[49];
         var Getting_up = answers[50];

         var Interests_or_hobbies = answers[51];
         var Parents_advice = answers[52];
         var Questionnaires_or_polls = answers[53];
         var Finances = answers[54];
         var Shopping_centres = answers[55];
         var Branded_clothing = answers[56];
         var Entertainment_spending = answers[57];
         var Spending_on_looks = answers[58];
         var Spending_on_gadgets = answers[59];
         var Spending_on_healthy_eating = answers[60];

         //順序ロジットモデルの回帰結果式

         Classical_music = 0.31452*Workaholism + 0.39902*Charity + 0.23285*Judgment_calls - 0.26139*Energy_levels + 0.23452*Interests_or_hobbies + 0.27738*Decision_making - -0.17236*Prioritising_workload + 0.20031*Knowing_the_right_people - 0.22226*Socializing - 0.18703*Public_speaking - 0.15102*Getting_angry + 0.13426*God - 0.18462*Number_of_friends + 0.13722*Funniness - 0.22640*Personality;
         Pop = 0.30897*Shopping_centres + 0.25009*Health + 0.21763*Reliability - 0.21318*Spending_on_healthy_eating + 0.15105*Empathy + 0.18669*Spending_on_looks - 0.20610*Entertainment_spending + 0.14743*Loss_of_interest + 0.25548*Happiness_in_life + 0.10264*God - 0.14264*Prioritising_workload + 0.12540*Life_struggles;
         Rock = - 0.18513*Spending_on_looks + 0.20617*Entertainment_spending + 0.21206*Loneliness - 0.15005*Branded_clothing + 0.12812*Responding_to_a_serious_letter - 0.12144*Life_struggles + 0.12906*Getting_up - 0.13165*Eating_to_survive - 0.21897*Dreams;
         Metal_or_Hardrock = - 0.1771*Shopping_centres + 0.2424*Small___big_dogs -0.1748*Spending_on_looks - 0.1318*God - 0.2200*Mood_swings + 0.2537*Hypochondria - 0.1525*Children + 0.1781*Responding_to_a_serious_letter - 0.1831*Health - 0.1445*Branded_clothing + 0.1256*Criminal_damage - 0.1434*Loss_of_interest + 0.1647*Questionnaires_or_polls - 0.1479*Socializing + 0.1444*Entertainment_spending + 0.1395*Thinking_ahead - 0.2903*Happiness_in_life +0.1921*Energy_levels;
         Hiphop_Rap = 0.24430*Spending_on_looks + 0.16679*Cheating_in_school + 0.29411*Personality +0.17476*Socializing +0.15396*Small___big_dogs +0.14982*Changing_the_past -0.11001*Finding_lost_valuables +0.15148*Number_of_friends +0.09992*Loss_of_interest -0.15586*Mood_swings;
         Techno_Trance = 0.14408*Criminal_damage + 0.11791*Cheating_in_school + 0.20074*Appearence_and_gestures +0.13857*Interests_or_hobbies - 0.17660*Finding_lost_valuables + 0.11706*Spending_on_gadgets + 0.14393*Empathy - 0.14910*Hypochondria;
         Opera = 0.35644*Charity + 0.22595*Workaholism -0.12777*Shopping_centres +0.10278*Elections -0.25744*Personality +0.18126*Interests_or_hobbies +0.18740*Knowing_the_right_people +0.23322*Parents_advice -0.20285*Energy_levels -0.17049*Health -0.12022*Branded_clothing +0.15420*Assertiveness -0.15637*Socializing -0.13841*Getting_angry;
         // 映画
         Horror = 0.15532*Criminal_damage - 0.11255*God -0.18745*Self_criticism +0.16971*Changing_the_past -0.18183*Getting_angry +0.25184*Compassion_to_animals -0.13567*Finding_lost_valuables -0.13112*Life_struggles -0.17304*Loss_of_interest +0.19908*Socializing -0.23070*Happiness_in_life +0.16863*Reliability -0.14285*Shopping_centres;
         Comedy = 0.4190*Funniness - 0.2873*Fake + 0.1959*Shopping_centres +0.1951*Judgment_calls + 0.1937*Borrowed_stuff -0.1481*Finding_lost_valuables +0.1812*Public_speaking -0.1799*Responding_to_a_serious_letter +0.1597*Life_struggles -0.1943*Mood_swings +0.1255*Criminal_damage;
         Romantic = 0.46553*Life_struggles + 0.40027*Shopping_centres +0.15551*Writing_notes +0.21235*Children +0.13407*God +0.21597*Keeping_promises +0.17315*Health -0.13712*Criminal_damage -0.10703*Elections +0.17590*Achievements;
         Sci_fi = -0.20788*Life_struggles +0.28120*Spending_on_gadgets -0.25359*Spending_on_looks +0.22102*Waiting +0.17494*Loneliness +0.11713*Criminal_damage +0.19864*Funniness +0.17945*Interests_or_hobbies -0.22075*Judgment_calls -0.16099*Prioritising_workload +0.15213*Finances -0.14509*Friends_versus_money +0.16258*Empathy;
         Animated = 0.14739*Children +0.23081*Questionnaires_or_polls +0.19392*Getting_up +0.20977*Funniness -0.17327*Hypochondria -0.18036*Daily_events +0.11835*Writing_notes +0.18708*Shopping_centres -0.16115*Branded_clothing +0.17534*Spending_on_healthy_eating +0.23279*Dreams +0.14215*Empathy +0.23028*Mood_swings -0.16594*Thinking_ahead +0.14751*Borrowed_stuff -0.20226*Socializing;
         Documentary = 0.36101*Workaholism - 0.18674*Shopping_centres +0.28584*Interests_or_hobbies +0.16759*Self_criticism -0.19408*Mood_swings -0.23253*Number_of_friends +0.23628*Decision_making +0.17558*New_environment +0.17669*Charity +0.17123*Funniness -0.16564*Public_speaking -0.16426*Socializing +0.16172*Compassion_to_animals -0.19811*Energy_levels +0.12573*Cheating_in_school -0.12019*Getting_up;
         Action = -0.3176*Life_struggles +0.2786*Spending_on_gadgets +0.2331*Criminal_damage -0.2802*Mood_swings +0.2481*Responding_to_a_serious_letter +0.2268*Borrowed_stuff -0.1673*Workaholism +0.1890*Funniness -0.1299*Getting_up -0.1754*Children +0.1394*God -0.1416*Friends_versus_money;
         // 学問
         Mathematics = -0.21722*Cheating_in_school -0.11566*Life_struggles -0.26162*Spending_on_looks +0.25903*Spending_on_gadgets +0.31778*Happiness_in_life -0.21382*Compassion_to_animals +0.19779*Responding_to_a_serious_letter +0.15415*Prioritising_workload +0.19410*Keeping_promises +0.16353*Waiting -0.16513*Number_of_friends;
         Physics = -0.16469*Life_struggles -0.25325*Cheating_in_school +0.16314*Workaholism -0.34666*Spending_on_looks +0.22888*Spending_on_gadgets +0.17844*Responding_to_a_serious_letter -0.21985*Daily_events +0.29062*Happiness_in_life +0.14821*Thinking_ahead +0.15997*Spending_on_healthy_eating -0.14876*Compassion_to_animals +0.13797*Funniness +0.18741*Charity -0.18253*Number_of_friends +0.14757*Interests_or_hobbies;
         Chemistry = 0.25250*Workaholism -0.19287*Cheating_in_school -0.18677*Daily_events -0.20708*Number_of_friends +0.22960*Energy_levels +0.15820*Charity;
         Biology = 0.14325*Life_struggles +0.22116*Workaholism +0.26482*Charity +0.15044*Questionnaires_or_polls -0.16341*Daily_events +0.24837*Appearence_and_gestures +0.13443*Decision_making -0.17682*Reliability;

         Geography = 0.26784*Daily_events +0.29887*Charity +0.12275*Interests_or_hobbies +0.18284*Workaholism +0.15141*Knowing_the_right_people -0.12403*Unpopularity -0.13007*Shopping_centres;
         History = 0.3370*Daily_events +0.2748*Interests_or_hobbies -0.2195*Shopping_centres +0.2553*Charity +0.1726*Workaholism +0.1779*Small___big_dogs -0.2841*Happiness_in_life -0.1646*Eating_to_survive +0.1501*Compassion_to_animals -0.1338*Public_speaking -0.1811*Waiting +0.1519*Questionnaires_or_polls -0.1741*Loneliness -0.1428*Getting_angry;
         Economy_Management = 0.26852*Daily_events +0.21919*Knowing_the_right_people +0.25892*Happiness_in_life +0.24558*Reliability -0.19406*Decision_making +0.13584*Shopping_centres +0.16316*Thinking_ahead -0.15251*Empathy -0.21180*Fake +0.15617*Unpopularity -0.17458*Energy_levels;
         Law = 0.36445*Daily_events +0.27427*Charity -0.24271*Decision_making +0.25541*Thinking_ahead +0.17444*Knowing_the_right_people -0.19383*Loneliness +0.16923*Eating_to_survive -0.13864*Public_speaking +0.10333*Elections +0.16554*Achievements;
         Politics = 0.76316*Daily_events +0.27892*Elections -0.15232*Public_speaking +0.26911*Charity -0.15391*Empathy +0.17615*Knowing_the_right_people -0.22687*Shopping_centres +0.25021*Appearence_and_gestures -0.16351*Reliability -0.17971*Loneliness;
         Foreign_languages = 0.20338*Workaholism +0.31380*Judgment_calls +0.23001*Socializing +0.15254*Finding_lost_valuables +0.16088*Shopping_centres +0.17680*Daily_events -0.24787*Personality +0.13476*Writing_notes -0.22955*Borrowed_stuff;
         Psychology = 0.25081*Empathy +0.25032*Judgment_calls +0.17226*Charity +0.29364*Appearence_and_gestures -0.19739*Getting_angry +0.19189*Fake +0.14171*Questionnaires_or_polls +0.19443*Spending_on_healthy_eating +0.13444*Daily_events -0.14247*Health -0.16920*Energy_levels +0.11687*God;

         // 一般
         Dancing = 0.2875*Life_struggles +0.2653*Socializing +0.1290*God +0.1381*Interests_or_hobbies +0.1554*Writing_notes +0.1804*Shopping_centres -0.1762*Responding_to_a_serious_letter +0.1767*Charity +0.1796*Energy_levels +0.1922*Judgment_calls;
         Musical_instruments = 0.3926*Interests_or_hobbies +0.1495*Writing_notes +0.1491*Questionnaires_or_polls -0.2599*Personality -0.1826*Public_speaking +0.1116*Final_judgement +0.1691*Eating_to_survive +0.2104*Funniness -0.1399*Branded_clothing +0.1668*Charity -0.1911*Responding_to_a_serious_letter +0.1121*Elections -0.2121*Reliability;
         Passive_sport = -0.31325*Getting_angry +0.18250*Cheating_in_school +0.15900*Interests_or_hobbies -0.16416*Workaholism -0.21597*Mood_swings +0.16479*Self_criticism +0.17350*Health -0.12477*Writing_notes +0.18321*Parents_advice +0.13853*Changing_the_past;
         Shopping = 1.0673*Shopping_centres +0.6970*Spending_on_looks +0.3143*Life_struggles -0.1717*Spending_on_gadgets +0.1947*Appearence_and_gestures -0.2464*Entertainment_spending -0.1942*Finances -0.2488*Dreams -0.1106*Responding_to_a_serious_letter -0.1373*Small___big_dogs -0.1805*Interests_or_hobbies +0.1833*Energy_levels +0.1563*Hypochondria -0.1513*Self_criticism;
         Theatre = 0.34140*Life_struggles +0.23741*Workaholism +0.16791*Elections +0.26027*Judgment_calls +0.20028*Friends_versus_money -0.10806*Criminal_damage -0.31444*Personality +0.13786*Spending_on_looks -0.13938*Eating_to_survive -0.17265*Getting_angry -0.14557*Thinking_ahead +0.18967*Parents_advice +0.14055*Compassion_to_animals -0.16819*Loneliness;
         Internet = 0.38362*Spending_on_gadgets -0.27628*Small___big_dogs -0.24594*Charity +0.18788*Daily_events +0.19800*Judgment_calls +0.15554*Funniness -0.19611*Socializing +0.16041*New_environment +0.27144*Personality +0.23717*Loneliness +0.12117*Getting_up +0.14416*Branded_clothing;
         PC = 0.49959*Spending_on_gadgets -0.24458*Life_struggles -0.35632*Spending_on_looks +0.18434*Funniness -0.24816*Mood_swings -0.13219*God -0.18339*Small___big_dogs +0.23113*Interests_or_hobbies +0.16002*Eating_to_survive +0.16435*Daily_events -0.13792*Finding_lost_valuables -0.13069*Loss_of_interest +0.13339*Responding_to_a_serious_letter +0.16405*Borrowed_stuff;
         Art_exhibitions = 0.33762*Charity +0.24440*Life_struggles +0.17642*Workaholism +0.25401*Interests_or_hobbies +0.28149*Judgment_calls -0.41508*Personality -0.23392*Getting_angry -0.19307*Finances +0.25776*Fake +0.16497*Friends_versus_money +0.21656*Socializing +0.20057*Hypochondria -0.16326*Funniness +0.12478*Finding_lost_valuables +0.11425*Writing_notes;
         Pets = 0.62197*Compassion_to_animals + 0.18252*Shopping_centres - 0.15240*Unpopularity + 0.14630*Questionnaires_or_polls + 0.12867*Spending_on_gadgets - 0.16794*Knowing_the_right_people + 0.14128*Prioritising_workload + 0.16576*Achievements

         console.log(answers);

         // Classical_musicの判定
         if(isNaN(Classical_music)){
           console.log("Classical_music:" + Classical_music);
           console.log("Classical_musicを判定中");
         }else if(Classical_music <= -1.0996){
           recommended_Classical_music = 1;
         }else if((Classical_music > -1.0996) && (Classical_music <= 0.5067)){
           recommended_Classical_music = 2;
         }else if((Classical_music > 0.5067) && (Classical_music <= 1.8979)){
           recommended_Classical_music = 3;
         }else if((Classical_music > 1.8979) && (Classical_music <= 3.2011)){
           recommended_Classical_music = 4;
         }else if(Classical_music > 3.2011){
           recommended_Classical_music = 5;
         }else{
           recommended_Classical_music = "Error";
         };

         // Popの判定
         if(isNaN(Pop)){
           console.log("Pop:" + Pop);
           console.log("Popを判定中");
         }else if(Pop <= 0.1856){
           recommended_Pop = 1;
         }else if((Pop > 0.1856) && (Pop <= 1.8017)){
           recommended_Pop = 2;
         }else if((Pop > 1.8017) && (Pop <= 3.2384)){
           recommended_Pop = 3;
         }else if((Pop > 3.2384) && (Pop <= 4.7656)){
           recommended_Pop = 4;
         }else if(Pop > 4.7656){
           recommended_Pop = 5;
         }else{
           recommended_Pop = "Error";
         };

         // Rockの判定
         if(isNaN(Rock)){
           console.log("Rock:" + Rock);
           console.log("Rockを判定中");
         }else if(Rock <= -3.5068){
           recommended_Rock = 1;
         }else if((Rock > -3.5068) && (Rock <= -2.0722)){
           recommended_Rock = 2;
         }else if((Rock > -2.0722) && (Rock <= -0.8439)){
           recommended_Rock = 3;
         }else if((Rock > -0.8439) && (Rock <= 0.4746)){
           recommended_Rock = 4;
         }else if(Rock > 0.4746){
           recommended_Rock = 5;
         }else{
           recommended_Rock= "Error";
         };

         // Metal_or_Hardrockの判定
         if(isNaN(Metal_or_Hardrock)){
           console.log("Metal_or_Hardrock:" + Metal_or_Hardrock);
           console.log("Metal_or_Hardrockを判定中");
         }else if(Metal_or_Hardrock <= -1.9858){
            recommended_Metal_or_Hardrock = 1;
         }else if((Metal_or_Hardrock > -1.9858) && (Metal_or_Hardrock <= -0.9367)){
            recommended_Metal_or_Hardrock = 2;
         }else if((Metal_or_Hardrock > -0.9367) && (Metal_or_Hardrock <= -0.0936)){
            recommended_Metal_or_Hardrock = 3;
         }else if((Metal_or_Hardrock > -0.0936) && (Metal_or_Hardrock <= 0.9694)){
            recommended_Metal_or_Hardrock = 4;
         }else if(Metal_or_Hardrock > 0.9694){
            recommended_Metal_or_Hardrock = 5;
         }else{
            recommended_Metal_or_Hardrock = "Error";
         };

         // Hiphop_Rapの判定
         if(isNaN(Hiphop_Rap)){
           console.log("Hiphop_Rap:" + Hiphop_Rap);
           console.log("Hiphop_Rapを判定中");
         }else if(Hiphop_Rap <= 1.9848){
            recommended_Hiphop_Rap = 1;
         }else if((Hiphop_Rap > 1.9848) && (Hiphop_Rap <= 3.1084)){
            recommended_Hiphop_Rap = 2;
         }else if((Hiphop_Rap > 3.1084) && (Hiphop_Rap <= 4.1227)){
            recommended_Hiphop_Rap = 3;
         }else if((Hiphop_Rap > 4.1227) && (Hiphop_Rap <= 5.5705)){
            recommended_Hiphop_Rap = 4;
         }else if(Hiphop_Rap > 5.5705){
            recommended_Hiphop_Rap = 5;
         }else{
            recommended_Hiphop_Rap = "Error";
         };

         // Techno_Tranceの判定
         if(isNaN(Techno_Trance)){
           console.log("Techno_Trance:" + Techno_Trance);
           console.log("Techno_Tranceを判定中");
         }else if(Techno_Trance <= 1.9629){
            recommended_Techno_Trance = 1;
         }else if((Techno_Trance > 1.9629) && (Techno_Trance <= 2.8995)){
            recommended_Techno_Trance= 2;
         }else if((Techno_Trance > 2.8995) && (Techno_Trance <= 3.9183)){
            recommended_Techno_Trance= 3;
         }else if((Techno_Trance > 3.9183) && (Techno_Trance <= 5.1138)){
            recommended_Techno_Trance= 4;
         }else if(Techno_Trance > 5.1138){
            recommended_Techno_Trance= 5;
         }else{
            recommended_Techno_Trance= "Error";
         };

         // Operaの判定
         if(isNaN(Opera)){
           console.log("Opera:" + Opera);
           console.log("Operaを判定中");
         }else if(Opera <= 0.1009){
          recommended_Opera= 1;
         }else if((Opera > 0.1009) && (Opera <= 1.5083)){
          recommended_Opera= 2;
         }else if((Opera > 1.5083) && (Opera <= 2.6007)){
          recommended_Opera= 3;
         }else if((Opera > 2.6007) && (Opera <= 3.8023)){
          recommended_Opera= 4;
         }else if(Opera > 3.8023){
          recommended_Opera= 5;
         }else{
          recommended_Opera= "Error";
         };

          // Horrorの判定
          if(isNaN(Horror)){
            console.log("Horror:" + Horror);
            console.log("Horrorを判定中");
          }else if(Horror <= -1.3970){
           recommended_Horror = 1;
          }else if((Horror > -1.3970) && (Horror <= -0.3388)){
           recommended_Horror= 2;
          }else if((Horror > -0.3388) && (Horror <= 0.7212)){
           recommended_Horror= 3;
          }else if((Horror > 0.7212) && (Horror <= 1.7677)){
           recommended_Horror= 4;
          }else if(Horror > 1.7677){
           recommended_Horror= 5;
          }else{
           recommended_Horror= "Error";
          };

          // Comedyの判定
          if(isNaN(Comedy)){
            console.log("Comedy:" + Comedy);
            console.log("Comedyを判定中");
          }else if(Comedy <= -2.4637){
           recommended_Comedy= 1;
          }else if((Comedy > -2.4637) && (Comedy <= 0.3621)){
           recommended_Comedy= 2;
          }else if((Comedy > 0.3621) && (Comedy <= 1.9718)){
           recommended_Comedy= 3;
          }else if((Comedy > 1.9718) && (Comedy <= 3.7672)){
           recommended_Comedy= 4;
          }else if(Comedy > 3.7672){
           recommended_Comedy= 5;
          }else{
           recommended_Comedy= "Error";
          };

          // Romanticの判定
          if(isNaN(Romantic)){
            console.log("Romantic:" + Romantic);
            console.log("Romanticを判定中");
          }else if(Romantic <= 3.1468){
           recommended_Romantic= 1;
          }else if((Romantic > 3.1468) && (Romantic <= 4.9626)){
           recommended_Romantic= 2;
          }else if((Romantic > 4.9626) && (Romantic <= 6.5197)){
           recommended_Romantic= 3;
          }else if((Romantic > 6.5197) && (Romantic <= 8.0046)){
           recommended_Romantic= 4;
          }else if(Romantic > 8.0046){
           recommended_Romantic= 5;
          }else{
           recommended_Romantic= "Error";
          };

          // Sci_fiの判定
          if(isNaN(Sci_fi)){
            console.log("Sci_fi:" + Sci_fi);
            console.log("Sci_fiを判定中");
          }else if(Sci_fi <= -1.4417){
           recommended_Sci_fi= 1;
          }else if((Sci_fi > -1.4417) && (Sci_fi <= -0.0423)){
           recommended_Sci_fi= 2;
          }else if((Sci_fi > -0.0423) && (Sci_fi <= 1.1551)){
           recommended_Sci_fi= 3;
          }else if((Sci_fi > 1.1551) && (Sci_fi <= 2.3968)){
           recommended_Sci_fi= 4;
          }else if(Sci_fi > 2.3968){
           recommended_Sci_fi= 5;
          }else{
           recommended_Sci_fi= "Error";
          };

          // の判定
          if(isNaN(Animated)){
            console.log("Animated:" + Animated);
            console.log("Animatedを判定中");
          }else if(Animated <= 1.3072){
           recommended_Animated= 1;
          }else if((Animated > 1.3072) && (Animated <= 2.8634)){
           recommended_Animated= 2;
          }else if((Animated > 2.8634) && (Animated <= 3.9883)){
           recommended_Animated= 3;
          }else if((Animated > 3.9883) && (Animated <= 5.0983)){
           recommended_Animated= 4;
          }else if(Animated > 5.0983){
           recommended_Animated= 5;
          }else{
           recommended_Animated= "Error";
          };

          // Documentaryの判定
          if(isNaN(Documentary)){
            console.log("Documentary:" + Documentary);
            console.log("Documentaryを判定中");
          }else if(Documentary <= -2.3315){
           recommended_Documentary= 1;
          }else if((Documentary > -2.3315) && (Documentary <= -0.5477)){
           recommended_Documentary= 2;
          }else if((Documentary > -0.5477) && (Documentary <= 0.9684)){
           recommended_Documentary= 3;
          }else if((Documentary > 0.9684) && (Documentary <= 2.5110)){
           recommended_Documentary= 4;
          }else if(Documentary > 2.5110){
           recommended_Documentary= 5;
          }else{
           recommended_Documentary= "Error";
          };

          // Actionの判定
          if(isNaN(Action)){
            console.log("Action:" + Action);
            console.log("Actionを判定中");
          }else if(Action <= -3.7121){
           recommended_Action= 1;
          }else if((Action > -3.7121) && (Action <= -2.0475)){
           recommended_Action= 2;
          }else if((Action > -2.0475) && (Action <= -0.8432)){
           recommended_Action= 3;
          }else if((Action > -0.8432) && (Action <= 0.6670)){
           recommended_Action= 4;
          }else if(Action > 0.6670){
           recommended_Action= 5;
          }else{
           recommended_Action= "Error";
          };

          // Mathematicsの判定
          if(isNaN(Mathematics)){
            console.log("Mathematics:" + Mathematics);
            console.log("Mathematicsを判定中");
          }else if(Mathematics <= 0.0774){
           recommended_Mathematics= 1;
          }else if((Mathematics > 0.0774) && (Mathematics <= 0.9929)){
           recommended_Mathematics= 2;
          }else if((Mathematics > 0.9929) && (Mathematics <= 2.1436)){
           recommended_Mathematics= 3;
          }else if((Mathematics > 2.1436) && (Mathematics <= 3.1813)){
           recommended_Mathematics= 4;
          }else if(Mathematics > 3.1813){
           recommended_Mathematics= 5;
          }else{
           recommended_Mathematics= "Error";
          };

          // Physicsの判定
          if(isNaN(Physics)){
            console.log("Physics:" + Physics);
            console.log("Physicsを判定中");
          }else if(Physics <= 0.4298){
           recommended_Physics= 1;
          }else if((Physics > 0.4298) && (Physics <= 1.6362)){
           recommended_Physics= 2;
          }else if((Physics > 1.6362) && (Physics <= 2.5696)){
           recommended_Physics= 3;
          }else if((Physics > 2.5696) && (PhysicsPhysics <= 3.8289)){
           recommended_Physics= 4;
          }else if(Physics > 3.8289){
           recommended_Physics= 5;
          }else{
           recommended_Physics= "Error";
          };

          // の判定
          if(isNaN(Chemistry)){
            console.log("Chemistry:" + Chemistry);
            console.log("Chemistryを判定中");
          }else if(Chemistry <= 0.5331){
           recommended_Chemistry= 1;
          }else if((Chemistry > 0.5331) && (Chemistry <= 1.7085)){
           recommended_Chemistry= 2;
          }else if((Chemistry > 1.7085) && (Chemistry <= 2.2634)){
           recommended_Chemistry= 3;
          }else if((Chemistry > 2.2634) && (Chemistry <= 2.9540)){
           recommended_Chemistry= 4;
          }else if(Chemistry > 2.9540){
           recommended_Chemistry= 5;
          }else{
           recommended_Chemistry= "Error";
          };

          // Biologyの判定
          if(isNaN(Biology)){
            console.log("Biology:" + Biology);
            console.log("Biologyを判定中");
          }else if(Biology <= 1.2464){
           recommended_Biology= 1;
          }else if((Biology > 1.2464) && (Biology <= 2.5312)){
           recommended_Biology= 2;
          }else if((Biology > 2.5312) && (Biology <= 3.5491)){
           recommended_Biology= 3;
          }else if((Biology > 3.5491) && (Biology <= 4.3307)){
           recommended_Biology= 4;
          }else if(Biology > 4.3307){
           recommended_Biology= 5;
          }else{
           recommended_Biology= "Error";
          };

          // の判定
          if(isNaN(Geography)){
            console.log("Geography:" + Geography);
            console.log("Geographyを判定中");
          }else if(Geography <= 0.1981){
           recommended_Geography= 1;
          }else if((Geography > 0.1981) && (Geography <= 1.4744)){
           recommended_Geography= 2;
          }else if((Geography > 1.4744) && (Geography <= 2.7755)){
           recommended_Geography= 3;
          }else if((Geography > 2.7755) && (Geography <= 3.9434)){
           recommended_Geography= 4;
          }else if(Geography > 3.9434){
           recommended_Geography= 5;
          }else{
           recommended_Geography= "Error";
          };

         // の判定
         if(isNaN(History)){
           console.log("History:" + History);
           console.log("Historyを判定中");
         }else if(History <= -1.5024){
          recommended_History= 1;
         }else if((History > -1.5024) && (History <= -0.0418)){
          recommended_History= 2;
         }else if((History > -0.0418) && (History <= 1.3349)){
          recommended_History= 3;
         }else if((History > 1.3349) && (History <= 2.5385)){
          recommended_History= 4;
         }else if(History > 2.5385){
          recommended_History= 5;
         }else{
          recommended_History= "Error";
         };

         // Economy_Managementの判定
         if(isNaN(Economy_Management)){
           console.log("Economy_Management:" + Economy_Management);
           console.log("Economy_Managementを判定中");
         }else if(Economy_Management <= 1.3050){
          recommended_Economy_Management= 1;
         }else if((Economy_Management > 1.3050) && (Economy_Management <= 2.4798)){
          recommended_Economy_Management= 2;
         }else if((Economy_Management > 2.4798) && (Economy_Management <= 3.4762)){
          recommended_Economy_Management= 3;
         }else if((Economy_Management > 3.4762) && (Economy_Management <= 4.5268)){
          recommended_Economy_Management= 4;
         }else if(Economy_Management > 4.5268){
          recommended_Economy_Management= 5;
         }else{
          recommended_Economy_Management= "Error";
         };

         // の判定
         if(isNaN(Law)){
           console.log("Law:" + Law);
           console.log("Lawを判定中");
         }else if(Law <= 1.5072){
          recommended_Law= 1;
         }else if((Law > 1.5072) && (Law <= 2.7587)){
          recommended_Law= 2;
         }else if((Law > 2.7587) && (Law <= 3.9122)){
          recommended_Law= 3;
         }else if((Law > 3.9122) && (Law <= 5.1200)){
          recommended_Law= 4;
         }else if(Law > 5.1200){
          recommended_Law= 5;
         }else{
          recommended_Law= "Error";
         };

         // Politicsの判定
         if(isNaN(Politics)){
           console.log("Politics:" + Politics);
           console.log("Politicsを判定中");
         }else if(Politics <= 0.9018){
          recommended_Politics= 1;
         }else if((Politics > 0.9018) && (Politics <= 2.4014)){
          recommended_Politics= 2;
         }else if((Politics > 2.4014) && (Politics <= 3.8046)){
          recommended_Politics= 3;
         }else if((Politics > 3.8046) && (Politics <= 5.2148)){
          recommended_Politics= 4;
         }else if(Politics > 5.2148){
          recommended_Politics= 5;
         }else{
          recommended_Politics= "Error";
         };

         // Foreign_languagesの判定
         if(isNaN(Foreign_languages)){
           console.log("Foreign_languages:" + Foreign_languages);
           console.log("Foreign_languagesを判定中");
         }else if(Foreign_languages <= 0.0684){
          recommended_Foreign_languages= 1;
         }else if((Foreign_languages > 0.0684) && (Foreign_languages <= 1.4956)){
          recommended_Foreign_languages= 2;
         }else if((Foreign_languages > 1.4956) && (Foreign_languages <= 2.9439)){
          recommended_Foreign_languages= 3;
         }else if((Foreign_languages > 2.9439) && (Foreign_languages <= 4.3367)){
          recommended_Foreign_languages= 4;
         }else if(Foreign_languages > 4.3367){
          recommended_Foreign_languages= 5;
         }else{
          recommended_Foreign_languages= "Error";
         };
         // Psychologyの判定
         if(isNaN(Psychology)){
           console.log("Psychology:" + Psychology);
           console.log("Psychologyを判定中");
         }else if(Psychology <= 1.8487){
          recommended_Psychology= 1;
         }else if((Psychology > 1.8487) && (Psychology <= 3.4240)){
          recommended_Psychology= 2;
         }else if((Psychology > 3.4240) && (Psychology <= 4.6303)){
          recommended_Psychology= 3;
         }else if((Psychology > 4.6303) && (Psychology <= 5.9976)){
          recommended_Psychology= 4;
         }else if(Psychology > 5.9976){
          recommended_Psychology= 5;
         }else{
          recommended_Psychology= "Error";
         };
         // Danceの判定
         if(isNaN(Dancing)){
           console.log("Dancing:" + Dancing);
           console.log("Dancingを判定中");
         }else if(Dancing <= 4.3445){
          recommended_Dancing= 1;
         }else if((Dancing > 4.3445) && (Dancing <= 5.3138)){
          recommended_Dancing= 2;
         }else if((Dancing > 5.3138) && (Dancing <= 6.2538)){
          recommended_Dancing= 3;
         }else if((Dancing > 6.2538) && (Dancing <= 7.0684)){
          recommended_Dancing= 4;
         }else if(Dancing > 7.0684){
          recommended_Dancing= 5;
         }else{
          recommended_Dancing= "Error";
         };

        // Musical_instrumentsの判定
        if(isNaN(Musical_instruments)){
          console.log("Musical_instruments:" + Musical_instruments);
          console.log("Musical_instrumentsを判定中");
        }else if(Musical_instruments <= 0.9896){
         recommended_Musical_instruments= 1;
        }else if((Musical_instruments > 0.9896) && (Musical_instruments <= 1.6878)){
         recommended_Musical_instruments= 2;
        }else if((Musical_instruments > 1.6878) && (Musical_instruments <= 2.4143)){
         recommended_Musical_instruments= 3;
        }else if((Musical_instruments > 2.4143) && (Musical_instruments <= 3.1240)){
         recommended_Musical_instruments= 4;
        }else if(Musical_instruments > 3.1240){
         recommended_Musical_instruments= 5;
        }else{
         recommended_Musical_instruments= "Error";
        };

        // Passive_sportの判定
        if(isNaN(Passive_sport)){
          console.log("Passive_sport:" + Passive_sport);
          console.log("Passive_sportを判定中");
        }else if(Passive_sport <= -0.1668){
         recommended_Passive_sport= 1;
        }else if((Passive_sport > -0.1668) && (Passive_sport <= 0.7979)){
         recommended_Passive_sport= 2;
        }else if((Passive_sport > 0.7979) && (Passive_sport <= 1.8158)){
         recommended_Passive_sport= 3;
        }else if((Passive_sport > 1.8158) && (Passive_sport <= 2.7455)){
         recommended_Passive_sport= 4;
        }else if(Passive_sport > 2.7455){
         recommended_Passive_sport= 5;
        }else{
         recommended_Passive_sport= "Error";
        };

       // Shoppingの判定
       if(isNaN(Shopping)){
         console.log("Shopping:" + Shopping);
         console.log("Shoppingを判定中");
       }else if(Shopping <= 2.9454){
        recommended_Shopping= 1;
       }else if((Shopping > 2.9454) && (Shopping <= 5.1664)){
        recommended_Shopping= 2;
       }else if((Shopping > 5.1664) && (Shopping <= 7.1124)){
        recommended_Shopping= 3;
       }else if((Shopping > 7.1124) && (Shopping <= 9.0068)){
        recommended_Shopping= 4;
       }else if(Shopping > 9.0068){
        recommended_Shopping= 5;
       }else{
        recommended_Shopping= "Error";
       };

        // Theatreの判定
        if(isNaN(Theatre)){
          console.log("Theatre:" + Theatre);
          console.log("Theatreを判定中");
        }else if(Theatre <= 1.4930){
         recommended_Theatre= 1;
        }else if((Theatre > 1.4930) && (Theatre <= 2.9535)){
         recommended_Theatre= 2;
        }else if((Theatre > 2.9535) && (Theatre <= 4.2292)){
         recommended_Theatre= 3;
        }else if((Theatre > 4.2292) && (Theatre <= 5.2765)){
         recommended_Theatre= 4;
        }else if(Theatre > 5.2765){
         recommended_Theatre= 5;
        }else{
         recommended_Theatre= "Error";
        };

        // Internetの判定
        if(isNaN(Internet)){
          console.log("Internet:" + Internet);
          console.log("Internetを判定中");
        }else if(Internet <= -2.8017){
         recommended_Internet= 1;
        }else if((Internet > -2.8017) && (Internet <= -1.2317)){
         recommended_Internet= 2;
        }else if((Internet > -1.2317) && (Internet <= 0.8958)){
         recommended_Internet= 3;
        }else if((Internet > 0.8958) && (Internet <= 2.4559)){
         recommended_Internet= 4;
        }else if(Internet > 2.4559){
         recommended_Internet= 5;
        }else{
         recommended_Internet= "Error";
        };

        // PCの判定
        if(isNaN(PC)){
          console.log("PC:" + PC);
          console.log("PCを判定中");
        }else if(PC <= -2.2622){
         recommended_PC= 1;
        }else if((PC > -2.2622) && (PC <= -0.7843)){
         recommended_PC= 2;
        }else if((PC > -0.7843) && (PC <= 0.4335)){
         recommended_PC= 3;
        }else if((PC > 0.4335) && (PC <= 1.9065)){
         recommended_PC= 4;
        }else if(PC > 1.9065){
         recommended_PC= 5;
        }else{
         recommended_PC= "Error";
        };

        // Art_exhibitionsの判定
        if(isNaN(Art_exhibitions)){
          console.log("Art_exhibitions:" + Art_exhibitions);
          console.log("Art_exhibitionsを判定中");
        }else if(Art_exhibitions <= 2.6317){
         recommended_Art_exhibitions= 1;
        }else if((Art_exhibitions > 2.6317) && (Art_exhibitions <= 3.9237)){
         recommended_Art_exhibitions= 2;
        }else if((Art_exhibitions > 3.9237) && (Art_exhibitions <= 5.2200)){
         recommended_Art_exhibitions= 3;
        }else if((Art_exhibitions > 5.2200) && (Art_exhibitions <= 6.3410)){
         recommended_Art_exhibitions= 4;
        }else if(Art_exhibitions > 6.3410){
         recommended_Art_exhibitions= 5;
        }else{
         recommended_Art_exhibitions= "Error";
        };

       // Petsの判定
       if(isNaN(Pets)){
         console.log("Pets:" + Pets);
         console.log("Petsを判定中");
       }else if(Pets <= 1.6219){
         recommended_Pets = 1;
       }else if((Pets > 1.6219) && (Pets <= 2.3429)){
         recommended_Pets = 2;
       }else if((Pets > 2.3429) && (Pets <= 3.1356)){
         recommended_Pets = 3;
       }else if((Pets > 3.1356) && (Pets <= 3.9017)){
         recommended_Pets = 4;
       }else if(Pets > 3.9017){
         recommended_Pets = 5;
       }else{
         recommended_Pets = "Error";
       };

      });
    });

    $('.end').on('click',function(){
        // console.log("Classical_music: " + Classical_music);
        // console.log("recommended_Classical_music: " + recommended_Classical_music);
        // console.log("Pop: " + Pop);
        // console.log("recommended_Pop: " + recommended_Pop);
        // console.log("Rock: " + Rock);
        // console.log("recommended_Rock: " + recommended_Rock);
        // console.log("Metal_or_Hardrock: " + Metal_or_Hardrock);
        // console.log("recommended_Metal_or_Hardrock: " + recommended_Metal_or_Hardrock);
        // console.log("Hiphop_Rap: " + Hiphop_Rap);
        // console.log("recommended_Hiphop_Rap: " + recommended_Hiphop_Rap);
        // console.log("Techno_Trance: " + Techno_Trance);
        // console.log("recommended_Techno_Trance: " + recommended_Techno_Trance);
        // console.log("Opera: " + Opera);
        // console.log("recommended_Opera: " + recommended_Opera);
        //
        // console.log("Pets: " + Pets);
        // console.log("recommended_Pets: " + recommended_Pets);

        $("#Classical_music").text("クラシック音楽: " + recommended_Classical_music);
        $("#Pop").text("ポップス: " + recommended_Pop);
        $("#Rock").text("ロック: " + recommended_Rock);
        $("#Metal_or_Hardrock").text("メタル ハードロック: " + recommended_Metal_or_Hardrock);
        $("#Hiphop_Rap").text("ヒップホップ ラップ: " + recommended_Hiphop_Rap);
        $("#Techno_Trance").text("テクノミュージック: " + recommended_Techno_Trance);
        $("#Opera").text("オペラ: " + recommended_Opera);

        $("#Horror").text("ホラー映画: " + recommended_Horror);
        $("#Comedy").text("コメディ映画: " + recommended_Comedy);
        $("#Romantic").text("ロマンス映画: " + recommended_Romantic);
        $("#Sci_fi").text("SF映画: " + recommended_Sci_fi);
        $("#Animated").text("アニメ映画: " + recommended_Animated);
        $("#Documentary").text("ドキュメンタリー映画: " + recommended_Documentary);
        $("#Action").text("アクション映画: " + recommended_Action);

        $("#Mathematics").text("数学: " + recommended_Mathematics);
        $("#Physics").text("物理学: " + recommended_Physics);
        $("#Chemistry").text("化学: " + recommended_Chemistry);
        $("#Biology").text("生物学: " + recommended_Biology);

        $("#Geography").text("地理: " + recommended_Geography);
        $("#History").text("歴史: " + recommended_History);
        $("#Economy_Management").text("経済 経営: " + recommended_Economy_Management);
        $("#Law").text("法律: " + recommended_Law);
        $("#Politics").text("政治: " + recommended_Politics);
        $("#Foreign_languages").text("外国語: " + recommended_Foreign_languages);
        $("#Psychology").text("心理学: " + recommended_Psychology);

        $("#Dancing").text("ダンス: " + recommended_Dancing);
        $("#Musical_instruments").text("楽器: " + recommended_Musical_instruments);
        $("#Passive_sport").text("レジャースポーツ: " + recommended_Passive_sport);
        $("#Shopping").text("ショッピング: " + recommended_Shopping);
        $("#Theatre").text("映画観賞: " + recommended_Theatre);
        $("#Internet").text("インターネット: " + recommended_Internet);
        $("#PC").text("ソフトウェア: " + recommended_PC);
        $("#Art_exhibitions").text("美術展: " + recommended_Art_exhibitions);
        $("#Pets").text("ペット: " + recommended_Pets);

        $('#results').css("display","")
    })

    // let filterA =0; //box配列の0 ~ 2までを格納
    // let filterB =0;　//box配列の3 ~ 5までを格納
    // let filterC =0;　//box配列の6 ~ 8までを格納

    // $('.end').on('click',function(){
    //   if(filterA > filterB){
    //     $('#answer_01').css("display","")
    //   }else if(filterB > filterA) {
    //     $('#answer_02').css("display","")
    //   } else if(filterC > filterA){
    //     $('#answer_03').css("display","")
    //   } else if(filterA == filterB || filterA == filterC){
    //     $('#answer_04').css("display","")
    //   } else{
    //     $('#answer_05').css("display","")
    //   }
    // })

    // if(Pets <= 1.6219){
    //   recommended_Pets = 1
    // }else if((Pets > 1.6219) && (Pets <= 2.3429)){
    //   recommended_Pets = 2
    // }else if(( Pets > 2.3429) && (Pets <= 3.1356)){
    //   recommended_Pets = 3
    // }else if(( Pets > 3.1356) && (Pets <= 3.9017)){
    //   recommended_Pets = 4
    // }else if( Pets > 3.9017){
    //   recommended_Pets = 5
    // }else{
    //   recommended_Pets = "判定中"
    // }

    // if(Pets <= 1.6219){
    //   $("#Pets").text("おすすめ度=1: " + Pets);
    // }else if((Pets > 1.6219) && (Pets <= 2.3429)){
    //   $("#Pets").text("おすすめ度=2: " + Pets);
    // }else if(( Pets > 2.3429) && (Pets <= 3.1356)){
    //   $("#Pets").text("おすすめ度=3: " + Pets);
    // }else if(( Pets > 3.1356) && (Pets <= 3.9017)){
    //   $("#Pets").text("おすすめ度=4: " + Pets);
    // }else if( Pets > 3.9017){
    //   $("#Pets").text("おすすめ度=5: " + Pets);
    // }else{
    //   $("#Pets").text("失敗しました");
    //   console.log(typeof Pets);
    // }
    // $("#Pets").text("Pets=" + Pets);

    // var q1 = answers[0];
    // var q2 = answers[1];
    // var q3 = answers[2];
    // var q4 = answers[3];
    // var q5 = answers[4];
    // var q6 = answers[5];
    // var q7 = answers[6];
    // var q8 = answers[7];
    // $("#q1").text("質問1の答え: " + q1);
    // $("#q2").text("質問2の答え: " + q2);
    // $("#q3").text("質問3の答え: " + q3);
    // $("#q4").text("質問4の答え: " + q4);
    // $("#q5").text("質問5の答え: " + q5);
    // $("#q6").text("質問6の答え: " + q6);
    // $("#q7").text("質問7の答え: " + q7);
    // $("#q8").text("質問8の答え: " + q8);
});
