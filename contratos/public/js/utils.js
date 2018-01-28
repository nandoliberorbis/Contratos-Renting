// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt
frappe.provide("erpnext.utils");

$.extend(erpnext.utils, {
	get_txt_cm: function(tc_name, doc, callback) {
		if(tc_name) {
			return frappe.call({
				method: 'contratos.contratos.doctype.texto_contrato_marco.texto_contrato_marco.get_texto_contrato_marco',
				args: {
					template_name: tc_name,
					doc: doc
				},
				callback: function(r) {
					callback(r)
				}
			});
		}
	},

});
