import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { RnSigmaDevice } from '@socure-inc/react-native-device-risk';
import { SDKConfig } from './config';

export default function App() {
  var [resultText, setResultText] = useState('Results will be shown here.');
  const [isSending, setSendingData] = useState(false);

  // Initialize the SDK
  const initializeSDK = async () => {
    try {
      setResultText('Initializing the SDK...');

      const sigmaDeviceOptions = {
        advertisingID: SDKConfig.advertisingID,
        omitLocationData: SDKConfig.omitLocationData,
        useSocureGov: SDKConfig.useSocureGov,
        configBaseUrl: SDKConfig.configBaseUrl,
      };

      const res = await RnSigmaDevice.initializeSDK(
        SDKConfig.SDKKey,
        sigmaDeviceOptions,
      );
      setResultText('Session Token :: ' + res.sessionToken);
      console.log('Session Token :: ' + res.sessionToken);
    } catch (error) {
      Alert.alert('Failed', `${error}`);
    }
  };

  useEffect(() => {
    console.log('initializing the SDK');
    initializeSDK();
  }, []);

  const onSendData = async () => {
    try {
      setSendingData(true);
      setResultText('Uploading data ...');
      const res = await RnSigmaDevice.getSessionToken();
      setResultText('Session Token :: ' + res.sessionToken);
    } catch (error) {
      Alert.alert('Failed', `${error}`);
    } finally {
      setSendingData(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SigmaDeviceRisk</Text>
      <TouchableOpacity style={styles.actionButton} onPress={onSendData}>
        <Text style={styles.actionButtonLabel}>Upload device data</Text>
      </TouchableOpacity>
      {isSending && (
        <View style={styles.sendingContainer}>
          <ActivityIndicator color="#000" size="large" />
        </View>
      )}
      <Text style={styles.title}>Result</Text>
      <Text style={styles.resultContainer} selectable={true}>
        {resultText}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 8,
  },
  actions: {
    flex: 0.5,
  },
  actionButton: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    width: '90%',
    backgroundColor: '#ff8000',
    marginTop: 30,
  },
  sendingContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
  },
  actionButtonLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  resultContainer: {
    width: '90%',
    marginTop: 30,
    fontSize: 16,
  },
});
