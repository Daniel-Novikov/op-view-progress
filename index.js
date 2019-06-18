class opViewProgress {
    value;

    constructor(el) {
        this.el = el;
        this.tick();
    }

    tick() {
        const rect = this.el.getBoundingClientRect();
        const { top: t, height: h } = rect;
        const { innerHeight: wh } = window;
        this.value = (t + h) / (wh + h)
    }
}

export { opViewProgress };