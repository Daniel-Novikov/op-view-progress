class opViewProgress {
    constructor(el) {
        this.el = el;
        this.tick();
    }

    tick = () => {
        const rect = this.el.getBoundingClientRect();
        const { top: t, height: h } = rect;
        const { innerHeight: wh } = window;
        this.value = 1 - ((t + h) / (wh + h)) * 2;
    }
}

export default opViewProgress;
