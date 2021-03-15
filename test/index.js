const assert = require('assert');
const {describe, beforeEach} = require("mocha");
const {mocker, summarize} = require('../src');

describe('mocker', () => {
    describe('users mocker', () => {
        const usersData = [{id: 1, login: 'mickey'}, {id: 2, login: 'billy77'}, {id: 3, login: 'coooool123'}];
        let getUsers;

        beforeEach(() => {
            getUsers = mocker(usersData);
        });

        it('should return users data', async () => {
            const resultData = await getUsers();
            assert.deepStrictEqual(resultData, usersData);
        });

        it('should return users data in asynchronous way', () => {
            const resultData = getUsers();
            assert.notDeepStrictEqual(resultData, usersData);
        });
    });
});

describe('summarize', () => {
    it('should return 9 for given promises', async () => {
        const promise1 = Promise.resolve(9);
        const res = await summarize(promise1);
        assert.strictEqual(res, 9);
    });

    it('should return 6 for given promises', async () => {
        const promise1 = Promise.resolve(2);
        const promise2 = Promise.resolve(4);
        const res = await summarize(promise1, promise2);
        assert.strictEqual(res, 6);
    });

    it('should return 11 for given promises', async () => {
        const promise1 = Promise.resolve(3);
        const promise2 = new Promise(resolve => resolve(9));
        const res = await summarize(promise1, promise2);
        assert.strictEqual(res, 12);
    });

    it('should return 16 for given promises', async () => {
        const promise1 = Promise.resolve(10);
        const promise2 = new Promise(resolve => resolve(5));
        const promise3 = new Promise(resolve => {setTimeout(() => {resolve(1)}, 300)});
        const res = await summarize(promise1, promise2, promise3);
        assert.strictEqual(res, 16);
    });
});