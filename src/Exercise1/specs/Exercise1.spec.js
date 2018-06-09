import React from 'react';
import {shallow} from 'enzyme';
import Exercise1 from '../Exercise1';

describe('Exercise1', () => {
    let component;
    let instance;

    beforeEach(() => {
        component = shallow(<Exercise1/>);
        instance = component.instance();
    });

    describe('on instance', () => {

        it('example 1', () => {
            const matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];
            const result = instance.getFirstRow(matrix);
            expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
        });

        it('example 2', () => {
            const matrix = [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]
            ];
            const result = instance.getFirstRow(matrix);
            expect(result).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
        });

        it('example 3', () => {
            const matrix = [
                [1, 2, 3, 4, 5, 6],
                [7, 8, 9, 10, 11, 12],
                [13, 14, 15, 16, 17, 18]
            ];
            const result = instance.getFirstRow(matrix);
            expect(result).toEqual([1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]);
        });


    });
});
