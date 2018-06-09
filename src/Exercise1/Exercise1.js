/* eslint-disable keyword-spacing */
import React, {Component} from 'react';

export class Exercise1 extends Component {
    getArray = (input) => {
        return input;
    }
    getFirstRow = (matrix) => {

        let index;
        let total_rows = matrix.length;
        let total_columns = matrix[0].length;

        let row = 0;
        let column = 0;

        const results = new Array();

        while(total_rows > 0 && total_columns > 0){

            if(total_rows === 1){
                for (index = 0; index < total_columns; index++){
                    results.push(matrix[row][column++]);
                }
                break;
            }else if(total_columns == 1){
                for(index = 0; index < total_rows; index++){
                    results.push(matrix[row++][column]);
                }
                break;
            }

            for(index = 0; index < total_columns - 1; index++){
                results.push(matrix[row][column++]);
        }

            for(index = 0; index < total_rows - 1; index++){
                results.push(matrix[row++][column]);
            }

            for(index = 0; index < total_columns - 1; index++){
                results.push(matrix[row][column--]);
            }

            for(index = 0; index < total_rows - 1; index++){
                results.push(matrix[row--][column]);
            }

            row++;
            column++;
            total_rows = total_rows-2;
            total_columns = total_columns-2;
        }

        return results;
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                Exercise1 page
            </div>
        );
    }
}

export default Exercise1;
