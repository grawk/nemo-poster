'use strict';

module.exports = {
  "setup": function (nemo, callback) {
    nemo.post = function (params, action) {
      return nemo.driver.executeScript(function (params, action) {
        var body = document.querySelector('body');
        body.innerHTML = '<form method=POST id="theform" action="' + action + '">' + insertParams() + '<input type="submit"/></form>';
        var form = document.querySelector('#theform');
        form.submit();
        function insertParams() {
          var inputs = '';
          params.forEach(function (param) {
            inputs += '<input type="hidden" name="' + param.name + '" value="' + param.value + '"/>\n';
          });
          return inputs;
        }
      }, params, action);
    };
    callback(null);
  }
};