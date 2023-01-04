// <reference path="crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from './crud';

const row: RowElement = { firstName: 'Mulualem', lastName: 'Mekonnen', };
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 21 };

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
