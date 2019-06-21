import opViewProgress from '../src/index';
import assert from 'assert';
import jsdom from 'jsdom-global';

jsdom();

const rect = {
    top: 50,
    height: 100
};

const el = {
    getBoundingClientRect() {
        return rect;
    }
};

const progress = new opViewProgress(el);

describe('View progress', () => {
    describe('Check if number', () => {
        it('should return be a number', () => {
            assert.equal(typeof progress.value, 'number');
        });
    });

    describe('Check if < -1 when below the viewport', () => {
        it('should be < -1', () => {
            rect.top = window.innerHeight * 2;
            progress.tick();
            assert.equal(progress.value < -1, true);
        });
    });

    describe('Check if > 1 when above the viewport', () => {
        it('should be > 1', () => {
            rect.top = -window.innerHeight * 2;
            progress.tick();
            assert.equal(progress.value > 1, true);
        });
    });

    describe('Check if ~= 0 when in the middle', () => {
        it('should be ~= 0', () => {
            rect.top = window.innerHeight/2 - rect.height/2;
            progress.tick();
            assert.equal(progress.value < 0.01, true);
        });
    });
});