/*! ©2017 BYU Independent Study !*/
var cellPhoneTestObj={testId:"cell-phone-test",summaryId:"cell-phone-summary",explanationIds:["normal","need-to-correct","addiction"],liveSummary:!1,liveExplanationMatch:!1,resultsTriggerId:"cell-phone-total",resultsTriggerEvent:"click",explanationMatchClass:"text-match-highlight",explanationMissClass:"text-miss-transparent",summaryFunction:function(t,e){"use strict";var a,n=e.getElementsByTagName("INPUT"),l=0;for(a=0;a<n.length;a++)n[a].checked&&(l+=1);return{contents:'<span class="text-match-highlight"><b>Total Checked</b>: '+l.toString()+"</span>",total:l}},explanationMatchFunction:function(t,e){"use strict";return"normal"===e&&t.total<=1||("need-to-correct"===e&&t.total>=2&&t.total<=3||("addiction"===e&&t.total>=4||void 0))}};init_IS_questionnaireCalculator(cellPhoneTestObj);