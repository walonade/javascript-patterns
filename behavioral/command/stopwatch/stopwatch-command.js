class StopwatchCommand {
    constructor(stopwatch) {
        this.stopwatch = stopwatch;
    }
}

class StartStopwatchCommand extends StopwatchCommand {
    execute() {
        this.stopwatch.start();
    }
}

class PauseStopwatchCommand extends StopwatchCommand {
    execute() {
        this.stopwatch.pause();
    }
}

class StopStopwatchCommand extends StopwatchCommand {
    execute() {
        this.stopwatch.stop();
    }
}