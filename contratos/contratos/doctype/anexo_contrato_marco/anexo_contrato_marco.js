// Copyright (c) 2018, LiberOrbis and contributors
// For license information, please see license.txt

frappe.ui.form.on('Anexo Contrato Marco', {
	refresh: function(frm) {

	},
        planti_acm: function(frm) {
		frappe.call({
			"method": "frappe.client.get",
			args: {
				doctype: "Texto Anexos Contrato Marco",
				name: frm.doc.planti_acm
			},
			callback: function(data) {
				frappe.model.set_value(frm.doctype,
				frm.docname,"txt_acm",data.message.texto_ane_contrato)
			}
		})
	}
});
