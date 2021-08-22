import { StyleSheet } from 'react-native';


export default StyleSheet.create({
      app: {
            flex: 1,
            backgroundColor: '#1D3557',
            alignItems: 'center',
            justifyContent: 'space-around'
      },
      container: {
            flex: 0.5,
            backgroundColor: '#1D3557',
            alignItems: 'center',
            justifyContent: 'center'
      },
      text: {
            paddingTop: 50,
            color: '#F1FAEE',
            fontFamily: 'sans-serif-thin',
            fontSize: 35,
      },
      createdBy: {
            fontFamily: 'sans-serif-thin',
            color: '#0F1C2E',
            fontSize: 20
      },
      buttons: {
            flex: 0.2,
            flexDirection: 'row',
            alignContent: 'center',
            backgroundColor: '#1D3557',
            alignItems: 'center',
            width: '120%',
            justifyContent: 'space-around',
        },
      button: {
            paddingHorizontal: 20,
            borderRadius: 25,
            backgroundColor: 'rgba(242, 250, 239, 0.5)',
            justifyContent: 'center',
            textAlign: 'center',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'rgba(242, 250, 239, 0.8)'
      },
      disabledButton: {
            paddingHorizontal: 20,
            borderRadius: 25,
            color: 'red',
            backgroundColor: 'rgba(242, 250, 239, 0.1)',
            justifyContent: 'center',
            textAlign: 'center',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'rgba(242, 250, 239, 0.8)'
      },
      arrow: {
            color: 'white',
            fontSize: 50,
            marginBottom: 18
      }
});


  