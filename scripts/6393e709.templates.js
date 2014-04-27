angular.module('surveyApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/closing.html',
    "<div class=\"closing-view base-view\">\n" +
    "  <div class=\"closing-content\">\n" +
    "    <h1>{{data.count > 1 ? 'Choices' : 'Choice'}} Submitted</h1>\n" +
    "    <p>\n" +
    "      Thanks for your {{data.count > 1 ? 'choices' : 'choice'}}. You chose\n" +
    "      <span ng-repeat=\"item in data.selected\"><span class=\"selected-shade\">{{item.title}}{{$index === data.count - 1 ? '.' : ($index < data.count - 2 ? ',' : '')}}</span>{{$index === data.count - 2 ? ' and ' : ''}}</span>Want more information? Enter your email address below.\n" +
    "    </p>\n" +
    "    <div class=\"form-frame\">\n" +
    "      <form ng-submit=\"methods.submit()\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <input ng-model=\"data.email\" type=\"email\" required class=\"form-control\" placeholder=\"Email Address\">\n" +
    "          <span class=\"input-group-btn\">\n" +
    "            <button type=\"submit\" class=\"btn btn-lg email-submit-btn\"><i class=\"email-icon\"></i> Submit</button>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"back-link-frame\">\n" +
    "  <a href=\"#/\" class=\"back-link\">\n" +
    "    <i class=\"back-icon\"></i> Change selected options\n" +
    "  </a>\n" +
    "</div>\n"
  );


  $templateCache.put('views/main.html',
    "<div class=\"choice-view base-view\">\n" +
    "  <h1>Industry Analyzer</h1>\n" +
    "  <h2>Select Up To 4 Industries To Compare</h2>\n" +
    "  <p class=\"note\">(you can change these at any time)</p>\n" +
    "  <form ng-submit=\"methods.submit()\">\n" +
    "    <div class=\"row\" ng-repeat=\"group in data.industries\">\n" +
    "      <div ng-repeat=\"industry in group\" class=\"col-sm-3\">\n" +
    "        <button\n" +
    "          role=\"option\"\n" +
    "          aria-label=\"Select {{industry.title}}\"\n" +
    "          type=\"button\"\n" +
    "          btn-checkbox\n" +
    "          ng-model=\"industry.selected\"\n" +
    "          ng-disabled=\"methods.isDisabled(industry)\"\n" +
    "          tabindex=\"{{methods.isDisabled(industry) ? -1 : ($parent.$index * 4) + $index + 1}}\"\n" +
    "          class=\"industry-choice\"\n" +
    "          ng-class=\"{disabled: methods.isDisabled(industry), wiggobble: industry.selected}\"\n" +
    "          ng-change=\"methods.checkSelection(industry)\">\n" +
    "          <div class=\"industry-icon icon-{{industry.slug}}\"></div>\n" +
    "          <p>{{industry.title}}</p>\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"btn-frame\">\n" +
    "      <button\n" +
    "        type=\"submit\"\n" +
    "        ng-disabled=\"!methods.getSelected().length\"\n" +
    "        ng-class=\"{disabled: !methods.getSelected().length}\"\n" +
    "        class=\"submit-btn btn btn-lg\">\n" +
    "        Submit Choices\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('views/success.html',
    "<div class=\"success-view base-view\" ng-switch=\"isLoading\">\n" +
    "  <div class=\"loading-frame\" ng-switch-when=\"true\">\n" +
    "    <h2>Finding the best commerce solution... Just for you</h2>\n" +
    "    <div class=\"bubble-loader\">\n" +
    "      <div class=\"1\"></div>\n" +
    "      <div class=\"2\"></div>\n" +
    "      <div class=\"3\"></div>\n" +
    "      <div class=\"4\"></div>\n" +
    "      <div class=\"5\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"shop-frame bounce-in\" ng-switch-when=\"false\">\n" +
    "    <h2>The best commerce solution for you is...</h2>\n" +
    "    <div class=\"success-image-frame\">\n" +
    "      <a href=\"http://shopify.com\" target=\"_blank\">\n" +
    "        <img alt=\"Shopify\" src=\"images/shopify-icon.png\">\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <h1>Shopify</h1>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
