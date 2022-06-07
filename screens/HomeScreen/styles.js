import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterValue: {
    fontSize: 91,
    fontWeight: '800',
    color: '#a60028',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 50,
    marginTop: 30,
  },
  button: {
    backgroundColor: '#a60028',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 26,
    color: 'white',
    fontWeight: '600',
  },
});
