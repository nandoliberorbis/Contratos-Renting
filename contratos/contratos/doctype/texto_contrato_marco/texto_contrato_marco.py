# -*- coding: utf-8 -*-
# Copyright (c) 2018, LiberOrbis and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils.jinja import validate_template

class TextoContratoMarco(Document):
        def validate(self):
                if self.texto_contrato:
                        validate_template(self.texto_contrato)

@frappe.whitelist()
def get_texto_contrato_marco(template_name, doc):
        if isinstance(doc, basestring):
                doc = json.loads(doc)

        texto_contrato_marco = frappe.get_doc("Texto Contrato Marco", template_name)

        if texto_contrato_marco.texto_contrato:
                return frappe.render_template(texto_contrato_marco.texto_contrato, doc)
