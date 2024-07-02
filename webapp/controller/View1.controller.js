sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("smarttablenorthwind.controller.View1", {
        onInit: function () {

        },
        onDelete:function(oEvent){
            var oModel=this.getView().byId("SmartTable").getModel();
            oModel.setUseBatch(false)
            var items=this.getView().byId("idTable").getSelectedItems()
            
            items.forEach(val => {
                var id=val.getBindingContext().getProperty("ID");
                oModel.remove("/Products("+id+")")
                
            });
        }
    });
});
