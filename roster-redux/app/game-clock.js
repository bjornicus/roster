
export default function() {
    // Private vars
    var startAt = 0;    // Time of last start / resume. (0 if not running)
    var lapTime = 0;    // Time on the clock when last stopped in milliseconds

    var now = function() {
            return (new Date()).getTime()/1000; 
        }; 

    this.isRunning = function() {
        return startAt != 0;
    };

    // Public methods
    // Start or resume
    this.start = function() {
        startAt = startAt ? startAt : now();
    };

    // Stop or pause
    this.pause = function() {
        // If running, update elapsed time otherwise keep it
        lapTime = startAt ? lapTime + now() - startAt : lapTime;
        startAt = 0; // Paused
    };

    // Reset
    this.reset = function() {
        lapTime = startAt = 0;
    };

    // Duration
    this.time = function() {
        return (lapTime + (startAt ? now() - startAt : 0)); 
    };
};