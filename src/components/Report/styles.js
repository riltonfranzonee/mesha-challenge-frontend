import { StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: `/Roboto-Regular.ttf`,
    },
    {
      src: `/Roboto-Bold.ttf`,
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
  },

  pageTitle: {
    fontWeight: 'bold',
  },

  titleWrapper: {
    width: '100%',
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  patientSection: {
    margin: 10,
    padding: '10 10 0 10',
    width: '100%',
  },

  sectionTitle: {
    marginBottom: 10,
    paddingBottom: 3,
    borderBottom: '1px solid black',
  },

  sectionLabel: {
    fontSize: 12,
    fontStyle: 'bold',
    marginBottom: 2,
  },

  sectionValue: {
    fontSize: 12,
  },

  sectionRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  leftGroup: {
    marginRight: 20,
    minWidth: 200,
  },

  procedureItem: {
    marginBottom: 10,
    fontSize: 13,
    textTransform: 'capitalize',
  },

  endLabel: {
    fontSize: 13,
    margin: '0 10 0 15',
  },

  endValue: {
    fontSize: 13,
  },
});

export default styles;
