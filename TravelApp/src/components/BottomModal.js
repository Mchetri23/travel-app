import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import CrossIcon from '../assets/crossIcon';

const BottomModal = ({visible, onClose, styles, children, checked}) => {

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      {/* <View style={styles.modalView}> */}
      <Pressable
        style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
        onPress={onClose}>
        <TouchableOpacity
          style={[
            styles?.modalView,

            {borderTopLeftRadius: 15, borderTopRightRadius: 15},
          ]}
          // onPress={() => {}}
          activeOpacity={1}>
          {checked && <TouchableOpacity
            style={{
              position: 'absolute',
              top: -50,
              alignSelf: 'center',
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#fff',
              alignItems:'center',
              justifyContent:'center'
            }} onPress={onClose}>
            <CrossIcon width={25} height={25}/>
          </TouchableOpacity>}
          <View style={[styles?.line]} />

          {children}
        </TouchableOpacity>
      </Pressable>
      {/* </View> */}
    </Modal>
  );
};

export default BottomModal;
