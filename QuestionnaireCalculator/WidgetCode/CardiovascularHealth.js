/*! ©2017 BYU Independent Study !*/
var cardioHealthTestObj={testId:"cardio-health-test",summaryId:"cardio-health-summary",explanationIds:["low-risk","moderate-risk","high-risk","extremely-high-risk"],liveSummary:!1,liveExplanationMatch:!1,resultsTriggerId:"cardio-health-total",resultsTriggerEvent:"click",explanationMatchClass:"text-match-highlight",explanationMissClass:"text-miss-transparent",summaryFunction:function(t,a){"use strict";var e,i=a.getElementsByTagName("INPUT"),r=0;for(e=0;e<i.length;e++)i[e].checked&&(r+=parseInt(i[e].value,10));return{contents:'<span class="text-match-highlight"><b>Your Score</b>: '+r.toString()+"</span>",total:r}},explanationMatchFunction:function(t,a){"use strict";return"low-risk"===a&&t.total<20||("moderate-risk"===a&&t.total>=20&&t.total<=29||("high-risk"===a&&t.total>=30&&t.total<=45||("extremely-high-risk"===a&&t.total>45||void 0)))}};init_IS_questionnaireCalculator(cardioHealthTestObj);