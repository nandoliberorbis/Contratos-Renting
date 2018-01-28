// Copyright (c) 2018, LiberOrbis and contributors
// For license information, please see license.txt

frappe.ui.form.on('Contrato Marco', {
	refresh: function(frm) {

	},
        planti_cm: function(frm) {
                frappe.call({
                        "method": "frappe.client.get",
                        args: {
                                doctype: "Texto Contrato Marco",
                                name: frm.doc.planti_cm
                        },
                        callback: function(data) {
                                frappe.model.set_value(frm.doctype,
                                frm.docname,"txt_cm",data.message.texto_contrato)
                        }
                })
//        this.get_txt_cm();
        }

});
