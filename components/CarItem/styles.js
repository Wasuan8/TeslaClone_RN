import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer:{
        width: '100%',
        height:Dimensions.get('window').height,
    
      },
      titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center',
    
    
      },
      title:{
        fontSize:40,
        fontWeight:'500',
        color:'black',
    
      },
      subTitlesCTA:{
        textDecorationLine:'underline',


      },
      subTitles:{
        fontSize: 16,
        color:'#5c5e62'
        
      },
      image:{
        height:'100%',
        width:'100%',
        resizeMode:'cover',
        position:'absolute'
      },
      buttoncontainer:{

        position:'absolute',
        bottom: 50,
        width:'100%',

      }
     
});

export default styles;