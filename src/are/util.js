
//begin-------------------ARE.Util---------------------begin

ARE.Util = __class.extend({
    "statics": {
        "random": function(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }
    }
});

//end-------------------ARE.Util---------------------end
