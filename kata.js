$(document).ready(function() {
  $("#getKata").on("click", function(){
//arrays created from CodeWars Javascript challenges - easy made up of kyu 1na 2, medium kyu 3 and hard kyu 4
var easyArr = ["tiny-three-pass-compiler","6-by-6-skyscrapers","mystery-function-number-2","simple-interactive-interpreter","metaprogramming-lisp-style-generic-functions","functional-sql","functional-binary-trees","evaluate-mathematical-expression","break-the-pieces","robby-the-robot","befunge-interpreter","my-smallest-code-interpreter-aka-brainf-star-star-k","whitespace-interpreter","binary-genetic-algorithms","image-processing","ascii85-encoding-and-decoding","the-builder-of-things","4-by-4-skyscrapers","decode-the-morse-code-for-real"];
    
   var mediumArr = ["did-you-mean-dot-dot-dot","bit-wise-number-2-shift-iness","imperfect-network-number-2-out-of-order-messages","hard-time-bomb","finding-an-appointment","sudoku-solver","the-captains-distance-request","can-you-get-the-loop","functional-lists","battleship-field-validator","complex-csv-parser","help-the-general-decode-secret-enemy-messages","monads-the-maybe-monad","make-a-spiral","alphabetic-anagrams","escape-the-mines","vigenere-autokey-cipher-helper","gps-navigation","morse-encoding","diffuse-the-bombs","star-catalog-matching","last-digit-of-a-huge-number","brainscrambler-esoteric-programming-number-3","n-parasitic-numbers-ending-in-n","base64-encoding","conways-game-of-life-unlimited-edition","boggle-word-checker","molecule-to-atoms","point-in-polygon-1","myjinxin-katas-number-003-crossword-puzzle","how-many-are-smaller-than-me-ii","multiplying-numbers-as-strings","esolang-interpreters-number-3-custom-paintf-star-star-k-interpreter"];
    
  var hardArr = ["strip-url-params","name-your-space,range-extraction","uribuilder","adding-big-numbers","strip-comments","roman-numerals-helper","pete-the-baker-part-2","the-observed-pin","imperfect-network-number-1-duplicate-messages","codewars-style-ranking-system","permutations","objectify-a-url-query-string","human-readable-duration-format","nesting-structure-comparison","karnaughs-detonating-timer-a-k-map-primer","sudoku-solution-validator","arithmetic-expressions-evaluator","a-simple-tic-tac-toe-class","connect-four-who-won","chinese-numeral-encoder","parseint-reloaded","sum-of-intervals","remove-zeros","how-low-can-you-go","default-arguments","matrix-determinant","algebraic-lists","word-char-and-line-count","advanced-events","design-a-simple-automaton-finite-state-machine","reverse-polish-notation-calculator","hamming-numbers","dependency-injection","instant-runoff-voting","determining-if-a-graph-has-a-solution","explosive-sum","counting-change-combinations","es5-generators-i","lru-cache","undo-slash-redo","a-simplistic-tcp-finite-state-machine-fsm","float-to-binary-conversion","monads-the-list-monad","simple-memory-manager","decimal-to-any-rational-or-irrational-base-converter","algebraic-data-types","hello-w-dot-dot-dot-wait-what","pyramid-slide-down","binary-multiple-of-3","fancy-schmancy-sort","polydivisible-numbers","factorial-tail","set-the-card-game","total-increasing-or-decreasing-numbers-up-to-a-power-of-10","hash-hacker","largest-numeric-palindrome","fluent-calculator-1","simple-image-processing-part-i-edges-feature-growing-and-shrinking","better-add-floats","catching-car-mileage-numbers","pascals-triangle","sum-strings-as-numbers","vigenere-cipher-helper","skrzat","next-bigger-number-with-the-same-digits","large-factorials","infix-to-postfix-converter","born-to-be-chained","coordinates-validator","simplifying-multilinear-polynomials","decode-the-morse-code-advanced","next-smaller-number-with-the-same-digits","snail","text-align-justify","take-it-or-leave-it-interview-strategy","vending-machine","abc-esoteric-programming-number-2","esolang-interpreters-number-2-custom-smallfuck-interpreter","base-conversion","roman-numerals-decoder","pick-peaks","functional-streams","roman-numerals-encoder","unflatten-a-list-harder-than-easy","strings-mix","ranking-poker-hands","recover-a-secret-string-from-random-triplets","sum-by-factors","breadcrumb-generator","ten-pin-bowling","square-into-squares-protect-trees","longest-common-subsequence","magnet-particules-in-boxes","how-many-numbers-iii","guess-the-digits-and-expression","t-dot-t-t-number-2-equal-to-24","helpers-for-a-3dgame-i-biggest-triangle-in-a-sphere","shortest-code-virus-in-apple","roboscript-number-3-implement-the-rs2-specification","twice-linear","validate-sudoku-with-size-nxn","simple-fun-number-27-rectangel-rotation","getting-along-with-integer-partitions","create-a-funnel","valid-braces,ip-validation"];
 
    var codeWarsUrl = `https://www.codewars.com/api/v1/code-challenges/`;

    //return a random challenge name depending on level of difficulty selrcted by user.
    
function getChallengeName(){
     if (document.getElementById('easy').checked) {var challengeNum = 
       Math.floor(Math.random() * easyArr.length+1); 
              var challengeName  = easyArr[challengeNum];                                    
       return challengeName;
     } 
    else if (document.getElementById('medium').checked) {
      var challengeNum = Math.floor(Math.random() * mediumArr.length+1); 
  var challengeName  = mediumArr[challengeNum];
      
      return challengeName;
     }
  else if (document.getElementById('hard').checked) {
       var challengeNum = Math.floor(Math.random() * hardArr.length+1);
    var challengeName  = hardArr[challengeNum];  
    
    return challengeName;
  }    
     }
    //put funtion value into a variable so it can be used for the get.json   
    var returnName = getChallengeName();
   
    //return challenge decription adn suthor name using CodeWars API
$.getJSON(codeWarsUrl+returnName, function(data) {
    let kataList = data["description"];
  let authorList = data["createdBy"]["username"];  let authorUrl = data["createdBy"]["url"];
 
  $("#kataHolder").html(data["description"]);
 $("#kataAuthor").html(authorList);
  });         
  });
  });
 