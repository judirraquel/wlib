import { WLibTypes } from "../types.js";
import { WLibWidget, WLibWidgetAlign } from "./widget.js";

class WLibWidgetGrid extends WLibWidget {
    constructor(args) {

        super(args);

        this.HExpand = args.HExpand ? args.HExpand : true; //Indican si las columnas deben cubrir todo el ancho del widget.
        this.VExpand = args.VExpand ? args.VExpand : true; //Indica si las filas deben cubrir todo el alto del widget.

        this.Columns = args.Columns ? args.Columns : [{ Width: 100 }, { Width: undefined }];
        this.ColumnsWidth = undefined;
        this.Rows = args.Rows ? args.Rows : [{ Height: 25 }, {Height : 30}, {Height : undefined}];
        this.RowsHeight = undefined;

        //Utilizo CellPosition para referirme a la combinación de una fila y una columna y guardar la posicion que ocupa.
        this.CellPosition = undefined; // Ejemplo [{Column : 0, Row : 0, Left : 10, Top : 10}, {...}]
        //Utilizo Cell Widget para asignarle a cada celda un widget de contenido.
        this.CellWidget = new Array (); // Ejemplo [{Column : 0, Row : 0, Widget : undefined}, {...}]

        this.Configure ();

        this.Parent.whenResize.Add (new WLibTypes.FunctionItem ({fn : function (args){

            args.Widget.Configure ();
            args.Widget.Display ();

        }, parameters : {Widget : this}}));

    }

    Display () {

        for (let i = 0; i < this.CellWidget.length; i++) {

            let Widget = this.CellWidget[i].Widget;
            let Position = this.GetCellPosition ({Column : this.CellWidget[i].Column, Row : this.CellWidget[i].Row});
            let Left = Position.Left;
            let Top = Position.Top;
            let Width = this.ColumnsWidth [this.CellWidget[i].Column];
            let Height = this.RowsHeight [this.CellWidget[i].Row];

            Widget.setX (Left);
            Widget.setY (Top);
            Widget.setW (Width);
            Widget.setH (Height);

        }

    }

    Atach (args) {

        this.CellWidget.push ({Column : args.Column, Row : args.Row, Widget : args.Widget});

    }

    Configure () {

        super.Init ();

        this.ConfigureColumns ();
        this.ConfigureRows ();
        this.ConfigurePositions ();

    }

    ConfigurePositions () {

        this.CellPosition = new Array ();

        let sum_width = 0;

        for (let i = 0; i < this.Columns.length; i++) {

            let width = this.ColumnsWidth[i];

            let sum_height = 0;

            for (let z = 0; z < this.Rows.length; z++) {
                this.CellPosition.push ({Column : i, Row : z, Left : sum_width, Top : sum_height});

                sum_height += this.RowsHeight[z];
            }

            sum_width += width;

        }

    }

    ConfigureColumns() {
        if (this.HExpand == true) {
            //Se respeta el width de las columnas que lo tengas especificado y para el resto de las columnas
            //Se toma el espacio sobrante y se reparte de manera equitativa.
            let free_width = this.Dimensions.Width - this.GetSumOfColumnsWidth();
            let free_column_width = parseInt(
                free_width / this.GetCountOfColumnsFree()
            );

            this.ColumnsWidth = new Array();

            for (let i = 0; i < this.Columns.length; i++) {
                this.ColumnsWidth.push(this.Columns[i].Width ? this.Columns[i].Width : free_column_width);
            }
        }
    }

    ConfigureRows() {
        if (this.VExpand == true) {
            //Se respeta el height de las filas que lo tengas especificado y para el resto de las filas
            //Se toma el espacio sobrante y se reparte de manera equitativa.
            let free_height = this.Dimensions.Height - this.GetSumOfRowsHeight();
            let free_row_height = parseInt(
                free_height / this.GetCountOfRowsFree()
            );

            this.RowsHeight = new Array();

            for (let i = 0; i < this.Rows.length; i++) {
                this.RowsHeight.push(this.Rows[i].Height ? this.Rows[i].Height : free_row_height);
            }
        }
    }

    GetCellPosition (args) {

        for (let i = 0; i < this.CellPosition.length; i++) {
            if (this.CellPosition[i].Row == args.Row){
                if (this.CellPosition[i].Column == args.Column){
                    return {Left : this.CellPosition[i].Left, Top : this.CellPosition[i].Top};
                }
            }
        }

        return {Left : 0, Top : 0};

    }

    GetSumOfColumnsWidth () {
        //retorna el width total ocupado por las columnas que lo tienen especificado.
        let width = 0;
        for (let i = 0; i < this.Columns.length; i++) {
            if (this.Columns[i].Width != undefined){
                width += parseInt(this.Columns[i].Width);
            }
        }

        return width;
    }

    GetCountOfColumnsFree() {
        //retorna la cantidad de columnas con ancho libre.
        let count = 0;
        for (let i = 0; i < this.Columns.length; i++) {
            if (this.Columns[i].Width == undefined) {
                count++;
            }
        }

        return count;
    }

    GetSumOfRowsHeight() {
        //retorna el width total ocupado por las columnas que lo tienen especificado.
        let height = 0;
        for (let i = 0; i < this.Rows.length; i++) {
            if (this.Rows[i].Height != undefined){
                height += parseInt(this.Rows[i].Height);
            }
        }

        return height;
    }

    GetCountOfRowsFree() {
        //retorna la cantidad de filas con alto libre.
        let count = 0;
        for (let i = 0; i < this.Rows.length; i++) {
            if (this.Rows[i].Height == undefined) {
                count++;
            }
        }

        return count;
    }

}

export { WLibWidgetGrid };
