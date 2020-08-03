import React from 'react';
import PropTypes from 'prop-types';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import moment from 'moment';

import styles from './styles';

import formatPrice from '../../utils/formatPrice';

export default function Report({ patient, procedures }) {
  const totalPrice = procedures.length
    ? formatPrice(
        procedures
          .map(p => parseFloat(p.price))
          .reduce((sumTotal, item) => sumTotal + item)
      )
    : 'R$ 00,00';

  const totalHours = procedures.length
    ? procedures
        .map(p => +p.duration)
        .reduce((sumTotal, item) => sumTotal + item)
    : '0';

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.titleWrapper}>
          <Text styles={styles.pageTitle}>Relatório de atendimento</Text>
        </View>
        <View style={styles.patientSection}>
          <View style={styles.sectionTitle}>
            <Text>Paciente</Text>
          </View>
          <View style={styles.sectionRow}>
            <View style={styles.leftGroup}>
              <Text style={styles.sectionLabel}>Nome</Text>
              <Text style={styles.sectionValue}>{patient.name}</Text>
            </View>
            <View>
              <Text style={styles.sectionLabel}>Data de nascimento</Text>
              <Text style={styles.sectionValue}>
                {moment(patient.birth).format('DD/MM/YYYY')}
              </Text>
            </View>
          </View>
          <View style={styles.sectionRow}>
            <View style={styles.leftGroup}>
              <Text style={styles.sectionLabel}>Email</Text>
              <Text style={styles.sectionValue}>{patient.email}</Text>
            </View>
            <View>
              <Text style={styles.sectionLabel}>Telefone</Text>
              <Text style={styles.sectionValue}>{patient.phone}</Text>
            </View>
          </View>
        </View>
        {procedures.length ? (
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <Text>Tratamentos</Text>
            </View>
            {procedures.map(procedure => (
              <View style={styles.procedureItem}>
                <Text>- {procedure.name}</Text>
              </View>
            ))}
          </View>
        ) : null}
        <View styles={styles.patientSection}>
          <View style={styles.sectionRow}>
            <Text style={styles.endLabel}>Total a pagar:</Text>
            <Text style={styles.endValue}>{totalPrice}</Text>
          </View>
          <View style={styles.sectionRow}>
            <Text style={styles.endLabel}>Tempo total estimado:</Text>
            <Text style={styles.endValue}>{totalHours}h</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

Report.propTypes = {
  patient: PropTypes.object.isRequired,
  procedures: PropTypes.array.isRequired,
};
