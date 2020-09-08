/*
 * Example plugin template
 */

jsPsych.plugins["distbuilder"] = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {
    // display question
    var html = '<div id="jspsych-distbuilder">'+trial.question+'</div>';

    // data saving
    var trial_data = {
      // parameter_name: 'parameter value'
      "question": trial.question
    };

    // end trial
    jsPsych.finishTrial(trial_data);
  };

  return plugin;
})();
