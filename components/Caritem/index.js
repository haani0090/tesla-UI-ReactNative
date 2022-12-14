import React,{useState} from 'react';
import{ View, Text,ImageBackground,Image,TouchableOpacity} from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox, faFan, faKey, faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu';


const Cartem = () => {

    const [locked, setlocked] = useState(true); 
    const clickLock = () => {
        if(locked){
            setlocked(false);
        }else{ 
            setlocked(true);
        }
    }

    return (
        <View style={styles.carContainer}>
    <ImageBackground
                source={require("../../assets/background.png")}
                style={styles.backgroundImage}
            />
            <View style ={styles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={ faCog } size={24}/>
                </TouchableOpacity>
            <Text style={styles.headerTitle}>hAni</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={ faToolbox } size={24}/>
                </TouchableOpacity>
            </View> 
            {/* Milegae */}
            <View style={styles.batterySection}> 
            <Image
            source={require("../../assets/battery.png")}
            style={styles.batteryImage} 
            />
            {/* Status */}
            <Text style={styles.batteryText}> 190 mi</Text>
            </View>
            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>
            </View>
            {/* control icons */}
           <View style={styles.controls}>
                <TouchableOpacity>
            <View style={styles.controlsButton}>
                    <FontAwesomeIcon style={styles.icon} icon={ faFan } size={24}/>
            </View>
                </TouchableOpacity>
                <TouchableOpacity>
            <View  style={styles.controlsButton}>
                    <FontAwesomeIcon style={styles.icon} icon={ faKey } size={24}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {clickLock}
            >
            <View  style={styles.controlsButton}>
                    <FontAwesomeIcon style={styles.icon} icon={locked ? faLock : faUnlockAlt } size={24}/>
            </View>
            </TouchableOpacity>
           </View>
           <Menu/>
        </View>
    )
}

export default Cartem;
