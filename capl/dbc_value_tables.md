# Value table (enum) del DBC

Valori enumerati disponibili per segnale (modalita' 'Fisico + enum'):
imposta come valore fisico il numero corrispondente all'enum voluto.

### idx 0 - AIRBAG1.AirBagFailSts (0x257)
- `0` = Fail_Not_Present_Lamp_Off
- `1` = Fail_Not_Present_Lamp_Flashing
- `2` = Fail_Present_Lamp_On
- `3` = Not_Used

### idx 1 - AIRBAG1.PsngrBagChargeSts (0x257)
- `0` = Active
- `1` = Not_Active
- `2` = Not_Present
- `3` = SNA

### idx 2 - AIRBAG1.SBR1RowCentralSeatBuckleFailSts (0x257)
- `0` = Fail_Not_Present
- `1` = Fail_Present
- `3` = SNA

### idx 3 - AIRBAG1.SBR1RowCentralSeatConfigSts (0x257)
- `0` = Seat_Not_Checked
- `1` = Seat_Checked

### idx 4 - AIRBAG1.SBR1RowCentralSeatPPDFailSts (0x257)
- `0` = Fail_Not_Present
- `1` = Fail_Present
- `3` = SNA

### idx 5 - AIRBAG1.SBR1RowCentralSeatSts (0x257)
- `0` = Seat_Belt_Fasten
- `1` = Seat_Belt_Not_Fasten
- `2` = Seat_Safe
- `3` = Seat_Not_Safe
- `7` = SNA

### idx 6 - AIRBAG1.SBR1RowDriverSeatConfigSts (0x257)
- `0` = Seat_Not_Checked
- `1` = Seat_Checked

### idx 7 - AIRBAG1.SBR1RowDriverSeatFailSts (0x257)
- `0` = Fail_Not_Present
- `1` = Fail_Present
- `3` = SNA

### idx 8 - AIRBAG1.SBR1RowDriverSeatSts (0x257)
- `0` = Seat_Belt_Fasten
- `1` = Seat_Belt_Not_Fasten
- `3` = SNA

### idx 9 - AIRBAG1.SBR1RowPsngrSeatBuckleFailSts (0x257)
- `0` = Fail_Not_Present
- `1` = Fail_Present
- `3` = SNA

### idx 10 - AIRBAG1.SBR1RowPsngrSeatConfigSts (0x257)
- `0` = Seat_Not_Checked
- `1` = Seat_Checked

### idx 11 - AIRBAG1.SBR1RowPsngrSeatPPDFailSts (0x257)
- `0` = Fail_Not_Present
- `1` = Fail_Present
- `3` = SNA

### idx 12 - AIRBAG1.SBR1RowPsngrSeatSts (0x257)
- `0` = Seat_Belt_Fasten
- `1` = Seat_Belt_Not_Fasten
- `2` = Seat_Safe
- `3` = Seat_Not_Safe
- `7` = SNA

### idx 13 - AIRBAG1.SBR2RowCentral1SeatConfigSts (0x257)
- `0` = Seat_Not_Checked
- `1` = Seat_Checked

### idx 14 - AIRBAG1.SBR2RowCentral1SeatSts (0x257)
- `0` = Seat_Belt_Fasten
- `1` = Seat_Belt_Not_Fasten
- `3` = SNA

### idx 15 - AIRBAG1.SBR2RowCentralSeatConfigSts (0x257)
- `0` = Seat_Not_Checked
- `1` = Seat_Checked

### idx 16 - AIRBAG1.SBR2RowCentralSeatSts (0x257)
- `0` = Seat_Belt_Fasten
- `1` = Seat_Belt_Not_Fasten
- `3` = SNA

### idx 17 - AIRBAG1.SBR2RowLeftSeatConfigSts (0x257)
- `0` = Seat_Not_Checked
- `1` = Seat_Checked

### idx 18 - AIRBAG1.SBR2RowLeftSeatSts (0x257)
- `0` = Seat_Belt_Fasten
- `1` = Seat_Belt_Not_Fasten
- `3` = SNA

### idx 19 - AIRBAG1.SBR2RowRightSeatConfigSts (0x257)
- `0` = Seat_Not_Checked
- `1` = Seat_Checked

### idx 20 - AIRBAG1.SBR2RowRightSeatSts (0x257)
- `0` = Seat_Belt_Fasten
- `1` = Seat_Belt_Not_Fasten
- `3` = SNA

### idx 21 - AIRBAG1.SBR3RowCentralSeatConfigSts (0x257)
- `0` = Seat_Not_Checked
- `1` = Seat_Checked

### idx 22 - AIRBAG1.SBR3RowCentralSeatSts (0x257)
- `0` = Seat_Belt_Fasten
- `1` = Seat_Belt_Not_Fasten
- `3` = SNA

### idx 23 - AIRBAG1.SBR3RowLeftSeatConfigSts (0x257)
- `0` = Seat_Not_Checked
- `1` = Seat_Checked

### idx 24 - AIRBAG1.SBR3RowLeftSeatSts (0x257)
- `0` = Seat_Belt_Fasten
- `1` = Seat_Belt_Not_Fasten
- `3` = SNA

### idx 25 - AIRBAG1.SBR3RowRightSeatConfigSts (0x257)
- `0` = Seat_Not_Checked
- `1` = Seat_Checked

### idx 26 - AIRBAG1.SBR3RowRightSeatSts (0x257)
- `0` = Seat_Belt_Fasten
- `1` = Seat_Belt_Not_Fasten
- `3` = SNA

### idx 28 - AIRBAG2.DrvSbltUnFltr (0x5A7)
- `0` = Seat belt fastened/Buckled
- `1` = Seatbelt not fastened/Unbuckled
- `2` = Seatbelt shorted low/LOW 
- `3` = Seatbelt shorted high/HIGH 
- `7` = Signal not available/SNA

### idx 30 - AIRBAG3.SBR1RowCentralSeatPPDSts (0x255)
- `0` = Initialization
- `1` = Not_Present
- `2` = Present
- `3` = SNA

### idx 31 - AIRBAG3.SBR1RowPsngrSeatPPDSts (0x255)
- `0` = Initialization
- `1` = Not_Present
- `2` = Present
- `3` = SNA

### idx 33 - AIRBAG4.DPDSensorFailSts (0x42C)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 34 - AIRBAG4.DPDSensorSts (0x42C)
- `0` = Initialization
- `1` = Not_Present
- `2` = Present
- `3` = SNA

### idx 52 - BATTERY_INFO.BCMSAMFailSts (0x41A)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 59 - BCM_CODE_TRM_REQUEST.TxpAuthRequest (0xF7)
- `0` = Transponder_Authentication_Request
- `1` = Not_Active

### idx 60 - BCM_CODE_TRM_REQUEST.TxpReadRequest (0xF7)
- `0` = Transponder_Reading_Request
- `1` = Not_Active

### idx 61 - BCM_COMMAND.BCMFpsCommand (0xFA)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 62 - BCM_COMMAND.BCMFpsConfirm (0xFA)
- `0` = Actuate
- `1` = Do_Not_Actuate

### idx 63 - BCM_COMMAND.BCMFpsFailSts (0xFA)
- `0` = Fail_not_Present
- `1` = Fail_Present

### idx 64 - BCM_COMMAND.BrakePedalSwitchNCFailSts (0xFA)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 65 - BCM_COMMAND.BrakePedalSwitchNCSts (0xFA)
- `0` = Not_Active
- `1` = Active

### idx 66 - BCM_COMMAND.BrakePedalSwitchNOFailSts (0xFA)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 67 - BCM_COMMAND.BrakePedalSwitchNOSts (0xFA)
- `0` = Not_Active
- `1` = Active

### idx 68 - BCM_COMMAND.CmdIgn_FailSts (0xFA)
- `0` = Fail_Not_Present
- `1` = Fail_Present
- `3` = SNA

### idx 69 - BCM_COMMAND.CmdIgnSts (0xFA)
- `0` = Initialization
- `1` = IGN_LK
- `2` = ACC
- `3` = RUN
- `4` = START
- `7` = SNA

### idx 71 - BCM_COMMAND.EmergencySts (0xFA)
- `0` = Not_Active
- `1` = Active

### idx 72 - BCM_COMMAND.EngineOffRequest (0xFA)
- `0` = Not_Active
- `1` = Active

### idx 73 - BCM_COMMAND.KeyInIgnSts (0xFA)
- `0` = KEY_DEF
- `1` = KEY_NOT_IN_IGN
- `2` = KEY_IN_IGN
- `3` = SNA

### idx 75 - BCM_COMMAND.OperationalModeSts (0xFA)
- `0` = Initialization
- `1` = Ignition_Off_WithoutKey
- `2` = Ignition_Off
- `3` = Ignition_Acc
- `4` = Ignition_On
- `5` = Ignition_Pre_Start
- `6` = Ignition_Start
- `7` = Ignition_Cranking
- `8` = Ignition_On_EngOn
- `9` = Ignition_Pre_Acc
- `10` = Ignition_Pre_Off
- `11` = Automatic_Cranking
- `12` = Automatic_Stop
- `13` = Key_Authenticated
- `14` = Not_Used
- `15` = SNA

### idx 76 - BCM_COMMAND.ShutOffProcedure (0xFA)
- `0` = Default
- `1` = Procedure_Started
- `2` = Procedure_Aborted
- `3` = Procedure_Completed

### idx 77 - BCM_COMMAND.StartRelayBCMFault (0xFA)
- `0` = Not_Present
- `1` = Present

### idx 78 - BCM_COMMAND.StartRelayBCMSts (0xFA)
- `0` = OFF
- `1` = ON

### idx 79 - BCM_COMMAND.TurnIndicatorSts (0xFA)
- `0` = Center
- `1` = Right
- `2` = Left
- `3` = SNA

### idx 81 - BCM_MINICRYPT_ACK.MinicryptReceptionSts (0xF5)
- `0` = Not_Received
- `1` = Received

### idx 82 - BH_IGW1.StopStartClimateInfo (0x5A6)
- `0` = SPST_ON
- `1` = CABIN_HI
- `2` = CABIN_LO
- `3` = MAX_AC
- `4` = FT_DEFROST
- `5` = EBL
- `7` = SNA

### idx 83 - BH_IGW2.AHP_EnblReq (0x5A4)
- `0` = False
- `1` = True
- `2` = Not_Used
- `3` = SNA

### idx 84 - BH_IGW2.PreCondCabinSts (0x5A4)
- `0` = Off
- `1` = On
- `2` = SPR
- `3` = SNA

### idx 85 - BH_IGW3.ChargeNow (0x4B0)
- `0` = No_Charge
- `1` = Charge_Now

### idx 86 - BH_IGW3.ChargeNow_TBM (0x4B0)
- `0` = No_Charge
- `1` = Charge_Now

### idx 87 - BODY1.AVASFailSts (0x2EC)
- `0` = Fail_Not_Present
- `1` = QVPM_Fail
- `2` = Front_Speaker_Fail
- `3` = Rear_Speaker_Fail
- `4` = Plausibility_Fail
- `5` = MissingMsg_Fail

### idx 88 - BODY1.FrontWiperMoveSts (0x2EC)
- `0` = Stop
- `1` = Moving

### idx 89 - BODY10.LockUnlockVehicleSts (0x5BE)
- `0` = All_Door_Unlocked
- `1` = Driver_Door_Unlocked
- `2` = Locked
- `3` = Passenger_Door_Unlocked
- `4` = Driver_And_Passenger_Doors_Unlocked
- `5` = Rear_Door_Unlocked
- `6` = Front_Door_Unlocked

### idx 90 - BODY16.Timer_off_W (0xA1)
- `1023` = SNA

### idx 91 - BODY16.Timer_on_W (0xA1)
- `1023` = SNA

### idx 92 - BODY2.CmdIgn_FailSts (0x384)
- `0` = Fail_Not_Present
- `1` = Fail_Present
- `3` = SNA

### idx 93 - BODY2.CmdIgnSts (0x384)
- `0` = Initialization
- `1` = IGN_LK
- `3` = ACC
- `4` = RUN
- `5` = START
- `7` = SNA

### idx 94 - BODY2.DriveStyleSts (0x384)
- `0` = Normal
- `1` = City
- `2` = Sport_Fun
- `3` = Winter_Race
- `4` = Eco
- `5` = TracPlus
- `6` = Trekking
- `7` = Auto
- `8` = Snow
- `9` = Sand
- `10` = Mud
- `11` = Rock
- `12` = Race
- `13` = Sand_Mud
- `14` = Low
- `31` = SNA

### idx 95 - BODY2.DsuRequest (0x384)
- `0` = Normal
- `1` = Sport_Winter

### idx 96 - BODY2.EcoModeSts (0x384)
- `0` = Not_Active
- `1` = Active

### idx 97 - BODY2.EVAP_TEMP_P1C (0x384)
- `2047` = SNA

### idx 98 - BODY2.ExternalTemperature (0x384)
- `511` = SNA

### idx 99 - BODY2.ExternalTemperatureFailSts (0x384)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 100 - BODY2.Fuel_Lid_Request (0x384)
- `0` = NOT_Active
- `1` = Active

### idx 101 - BODY2.HDCFnRqstSts (0x384)
- `0` = Open
- `1` = Closed
- `3` = SNA

### idx 102 - BODY2.HighBeamOutputSts (0x384)
- `0` = OFF
- `1` = ON

### idx 103 - BODY2.Int_Relay_FailSts (0x384)
- `0` = Fail_Not_Present
- `1` = Fail_Present
- `3` = SNA

### idx 104 - BODY2.LDWRequestSts (0x384)
- `0` = NOT Pressed
- `1` = Pressed

### idx 105 - BODY2.LowBeamSts (0x384)
- `0` = OFF
- `1` = ON

### idx 106 - BODY2.LowFuelWarningSts (0x384)
- `0` = OFF
- `1` = ON

### idx 107 - BODY2.ParkBrakeSts (0x384)
- `0` = OFF
- `1` = ON

### idx 108 - BODY2.PowerModeSts (0x384)
- `0` = Standard_Power
- `1` = Logistic_Mode_ON
- `2` = Logistic_Mode_PR
- `3` = LogisticModeON_and_EngineON

### idx 109 - BODY2.Selection_SystemFailSts (0x384)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 110 - BODY2.SportAvailable (0x384)
- `0` = False
- `1` = True

### idx 111 - BODY3.AdditionalHeaterNotAvailable (0x545)
- `0` = Additional_Heater _Available
- `1` = Additional_Heater _Not_Available

### idx 112 - BODY3.BatteryChargeSts (0x545)
- `15` = SNA

### idx 113 - BODY3.ChkFuelLevelSts (0x545)
- `0` = Fault_Not_Present
- `1` = Chk_Code_1
- `2` = Chk_Code_2
- `3` = Chk_Code_3
- `4` = Chk_Code_4
- `5` = Not_Used
- `6` = Not_Used
- `7` = Not_Used

### idx 115 - BODY3.FpsNotAvailable (0x545)
- `0` = FPS_Available
- `1` = FPS_Not_Available

### idx 116 - BODY3.FrontWiperReq (0x545)
- `0` = OFF
- `1` = INT
- `2` = LOW
- `3` = HIGH
- `4` = AUTO
- `5` = MIST

### idx 117 - BODY3.FuelLevel (0x545)
- `255` = SNA

### idx 118 - BODY3.FuelLevelFailSts (0x545)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 119 - BODY3.InternalLightLevel (0x545)
- `0` = Level_1
- `1` = Level_2
- `2` = Level_3
- `3` = Level_4
- `4` = Level_5
- `5` = Level_6
- `6` = Level_7
- `7` = Level_8
- `8` = Level_9
- `9` = Level_10
- `10` = Level_11
- `11` = Level_12
- `12` = Level_13
- `13` = Level_14
- `14` = Level_15
- `15` = Level_16

### idx 120 - BODY3.InternalLightSts (0x545)
- `0` = Not_Active
- `1` = Active

### idx 121 - BODY3.NotFilteredFuelLevel (0x545)
- `255` = SNA

### idx 122 - BODY4.BonnetFailSts (0x4B1)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 123 - BODY4.BonnetSts (0x4B1)
- `0` = Closed
- `1` = Open

### idx 124 - BODY4.BrakeFluidLevelSts (0x4B1)
- `0` = OK
- `1` = Low_Level

### idx 125 - BODY4.CompressorACReqSts (0x4B1)
- `0` = Not_Active
- `1` = Active

### idx 126 - BODY4.DriverDoorFailSts (0x4B1)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 127 - BODY4.DriverDoorSts (0x4B1)
- `0` = Closed
- `1` = Open

### idx 128 - BODY4.FHeatedWindowLoadSts (0x4B1)
- `0` = OFF
- `1` = ON

### idx 129 - BODY4.FOBSearchRequest (0x4B1)
- `0` = NO_ACTION
- `1` = REQUEST_SEARCH
- `2` = RESULT_RECEIVED
- `3` = RESERVED

### idx 130 - BODY4.LHRDoorSts (0x4B1)
- `0` = Closed
- `1` = Open

### idx 131 - BODY4.PreCond_InhibitSts (0x4B1)
- `0` = INHIBIT_DEFAULT
- `1` = TIME_OUT_RUN
- `2` = TIME_OUT_CUST_MODE
- `3` = DRV_DOOR_AJAR
- `4` = PASS_DOOR_AJAR
- `5` = LR_DOOR_AJAR
- `6` = RR_DOOR_AJAR
- `7` = HOOD_AJAR
- `8` = TRUNK_LIFTGATE
- `9` = START_COUNTER
- `10` = FAIL_COUNTER
- `11` = VTA_ALARM
- `12` = PANIC_MODE
- `13` = POWER_LOSS
- `14` = PC_OFF_RQ
- `15` = PC_DISABLED_PREV
- `16` = IGN_SNA
- `17` = LOGISTIC_MODE
- `18` = KEY_IN_IGN
- `19` = BRAKE_PRESSED
- `20` = HAZARD_LAMP_ON
- `21` = NOT_IN_PARK
- `22` = VEH_SPEED_HIGH
- `23` = INVALID_SKIM_KEY
- `24` = IGN_NOT_LOCK
- `25` = REMOTE_START_RQ
- `26` = VEH_UNLOCKED
- `27` = ESL_LOCKED
- `28` = CLIMATE_NOT_OK
- `31` = SNA

### idx 132 - BODY4.PreCondActvSts (0x4B1)
- `0` = Precondition_Not_Active
- `1` = Precondition_Active

### idx 133 - BODY4.PsngrDoorSts (0x4B1)
- `0` = Closed
- `1` = Open

### idx 134 - BODY4.RemSt_InhibitSts (0x4B1)
- `0` = INHIBIT_DEFAUILT
- `1` = TIME_OUT_RUN
- `2` = TIME_OUT_CUST_MODE
- `3` = KEY_IN_RUN
- `4` = DRV_DOOR_AJAR
- `5` = PASS_DOOR_AJAR
- `6` = LR_DOOR_AJAR
- `7` = RR_DOOR_AJAR
- `8` = START_COUNTER
- `9` = FAIL_COUNTER
- `10` = LOW_RPM_SHUTDOWN
- `11` = KEY_IN_IGN
- `12` = BRAKE_PRESSED
- `13` = HAZARD_LAMP_ON
- `14` = NOT_IN_PARK
- `15` = VEH_SPEED_HIGH
- `16` = HOOD_AJAR
- `17` = TRUNK_LIFTGATE
- `18` = VTA_ALARM
- `19` = PANIC_MODE
- `20` = BATT_VOLT_HIGH
- `21` = BATT_VOLT_LOW
- `22` = POWER_LOSS
- `23` = MIL_ON
- `24` = OIL_PRESSURE_LOW
- `25` = COOLANT_TEMP_HIGH
- `26` = RPM_HIGH
- `27` = CRANK_NO_START
- `28` = REMOTE_OFF_RQ
- `29` = RS_DISABLED_PREV
- `30` = NOT_CONFIGURED
- `31` = NO_HOOD_SWITCH
- `32` = NO_AUTO_TRANS
- `33` = NOT_ENABLED
- `34` = INVALID_SKIM_KEY
- `35` = IGN_SNA
- `36` = IGN_NOT_LOCK
- `37` = GLOW_PLUG_TIMEOUT
- `38` = LOW_FUEL
- `39` = ETC_LAMP_ON
- `40` = LOGISTIC_MODE
- `41` = COLD_START_LAMP_FLASH
- `44` = FAIL_HCSS 
- `45` = VEH_UNLOCKED
- `46` = ESL_LOCKED
- `47` = PROPULSION_NOT_OK
- `48` = EPB_NO_RESP
- `49` = UNLOCK_RQ
- `62` = ACV_OFF_RQ
- `63` = SNA

### idx 135 - BODY4.RemStActvSts (0x4B1)
- `0` = Remote Start Not Active
- `1` = Remote Start Active

### idx 136 - BODY4.RHatchSts (0x4B1)
- `0` = Closed
- `1` = Open

### idx 137 - BODY4.RHeatedWindowLoadSts (0x4B1)
- `0` = OFF
- `1` = ON

### idx 138 - BODY4.RHRDoorSts (0x4B1)
- `0` = Closed
- `1` = Open

### idx 139 - BODY4.SpSt_Pad1 (0x4B1)
- `0` = Button Unpressed
- `1` = Button Pressed
- `2` = Short to Ground
- `3` = Short to Power
- `4` = Indeterminate
- `7` = SNA

### idx 140 - BODY4.TheftAlarmStatus (0x4B1)
- `0` = VTA_DISARM
- `1` = VTA_PREARM
- `2` = VTA_ARM
- `3` = VTA_LGT
- `4` = VTA_LGT_HORN
- `5` = VTA_TAMP
- `6` = VTA_ITM_Alarm
- `7` = SNA

### idx 141 - BODY7.BonnetAjarRawValSts (0x419)
- `0` = Default
- `1` = FL_SSA
- `2` = FL_SSB
- `3` = FL_SSC
- `4` = FL_SSD
- `5` = FL_SSE
- `6` = OPEN_SSA
- `7` = OPEN_SSB
- `8` = CLOSED_SSA
- `9` = CLOSED_SSB
- `10` = FH_SSA
- `11` = FH_SSB
- `12` = FH_SSC
- `13` = FH_SSD
- `14` = FH_SSE
- `15` = SNA

### idx 143 - BODY7.DriverDoor2AjarRawValSts (0x419)
- `0` = Default
- `1` = FL_SSA
- `2` = FL_SSB
- `3` = FL_SSC
- `4` = FL_SSD
- `5` = FL_SSE
- `6` = OPEN_SSA
- `7` = OPEN_SSB
- `8` = CLOSED_SSA
- `9` = CLOSED_SSB
- `10` = FH_SSA
- `11` = FH_SSB
- `12` = FH_SSC
- `13` = FH_SSD
- `14` = FH_SSE
- `15` = SNA

### idx 144 - BODY7.DriverDoor2AjarXtionSts (0x419)
- `1` = NONE
- `2` = TRNS
- `3` = SNA

### idx 145 - BODY7.DriverDoorAjarRawValSts (0x419)
- `0` = Default
- `1` = FL_SSA
- `2` = FL_SSB
- `3` = FL_SSC
- `4` = FL_SSD
- `5` = FL_SSE
- `6` = OPEN_SSA
- `7` = OPEN_SSB
- `8` = CLOSED_SSA
- `9` = CLOSED_SSB
- `10` = FH_SSA
- `11` = FH_SSB
- `12` = FH_SSC
- `13` = FH_SSD
- `14` = FH_SSE
- `15` = SNA

### idx 146 - BODY7.DriverDoorAjarXtionSts (0x419)
- `1` = NONE
- `2` = TRNS
- `3` = SNA

### idx 147 - BODY7.DriveStyleSts (0x419)
- `0` = Normal
- `1` = City
- `2` = Sport_Fun
- `3` = Winter_Race
- `4` = Eco
- `5` = TracPlus
- `6` = Trekking
- `7` = Auto
- `8` = Snow
- `9` = Sand
- `10` = Mud
- `11` = Rock
- `12` = Race
- `13` = Sand_Mud
- `31` = SNA

### idx 148 - BODY7.DRV_DR_UNLOCKING (0x419)
- `0` = Not_Active
- `1` = Active

### idx 149 - BODY7.FUEL_VOLT (0x419)
- `255` = SNA

### idx 151 - BODY7.PsngrDoorAjarRawValSts (0x419)
- `0` = Default
- `1` = FL_SSA
- `2` = FL_SSB
- `3` = FL_SSC
- `4` = FL_SSD
- `5` = FL_SSE
- `6` = OPEN_SSA
- `7` = OPEN_SSB
- `8` = CLOSED_SSA
- `9` = CLOSED_SSB
- `10` = FH_SSA
- `11` = FH_SSB
- `12` = FH_SSC
- `13` = FH_SSD
- `14` = FH_SSE
- `15` = SNA

### idx 152 - BODY7.PsngrDoorAjarXtionSts (0x419)
- `1` = NONE
- `2` = TRNS
- `3` = SNA

### idx 153 - BPCM_CHARGER_1.HV_Charging_ChargeLevelDisplay (0x240)
- `0` = Default_NoLevel
- `1` = Level_1_AC
- `2` = Level_2_AC
- `3` = Level_3_AC
- `4` = Level_1_DC
- `5` = Level_2_DC
- `6` = PlugInNotDet
- `7` = PPI_1_NoDrive
- `8` = PPI_2_OK_Drive
- `15` = SNA

### idx 158 - BRAKE_TRANSM1.BrkBstrVac (0x1F1)
- `255` = SNA

### idx 159 - BRAKE_TRANSM1.BrkTrq (0x1F1)
- `4095` = SNA

### idx 160 - BRAKE_TRANSM1.GrMax_Rq_BSM (0x1F1)
- `0` = Passive
- `1` = G1
- `2` = G2
- `3` = G3
- `4` = G4
- `5` = G5
- `6` = G6
- `7` = G7
- `8` = G8
- `9` = G9

### idx 161 - BRAKE1.ABSActive (0x101)
- `0` = Not_active
- `1` = Active

### idx 162 - BRAKE1.Brake_MaxRegen_Ready (0x101)
- `0` = Not_ready
- `1` = Ready

### idx 163 - BRAKE1.BrakeInterventionSts (0x101)
- `0` = No_active_brake_intervention
- `1` = Active_brake_intervention

### idx 164 - BRAKE1.BSMShiftInterference (0x101)
- `0` = Shift_allowed
- `1` = Shift_not_allowed
- `3` = SNA

### idx 166 - BRAKE1.ESCActive (0x101)
- `0` = Not_active
- `1` = Active

### idx 167 - BRAKE1.MasterCylinderPressure (0x101)
- `1023` = SNA

### idx 169 - BRAKE1.PrefillActive (0x101)
- `0` = Not_Active
- `1` = Active

### idx 170 - BRAKE1.VehicleSpeedVSOSig (0x101)
- `8191` = SNA

### idx 171 - BRAKE1.VehicleSpeedVSOSigFailSts (0x101)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 172 - BRAKE1.VehicleStandStillSts (0x101)
- `0` = True
- `1` = False
- `3` = SNA

### idx 173 - BRAKE10.BrkPdl_Stat (0x1FA)
- `0` = UPSTOP
- `1` = PSD
- `2` = NDEF2
- `3` = SNA

### idx 176 - BRAKE3.BrakeTravelSts (0x103)
- `255` = SNA

### idx 177 - BRAKE3.BSM_Comm_Fail_CANC2 (0x103)
- `0` = No_Fault
- `1` = LoC_CANC2
- `3` = BusFailure_CANC2

### idx 179 - BRAKE3.HillHolderActive (0x103)
- `0` = Not_Active
- `1` = Active

### idx 181 - BRAKE3.MuSplit (0x103)
- `0` = MuSplitOFF
- `1` = MuSplitON
- `3` = SNA

### idx 182 - BRAKE3.OverSteering (0x103)
- `63` = SNA

### idx 183 - BRAKE3.UnderSteering (0x103)
- `63` = SNA

### idx 184 - BRAKE4.AEB_InterventionType (0x1F5)
- `0` = None
- `1` = ACC
- `2` = AEB_P_standard
- `3` = AEB_P_extended
- `4` = EBA
- `5` = AEB_L
- `7` = SNA

### idx 185 - BRAKE4.ExternalBrkRequestsDisabled (0x1F5)
- `0` = Enabled
- `1` = Diasbled
- `2` = Not_Used
- `3` = SNA

### idx 186 - BRAKE4.VehicleStandStillSts (0x1F5)
- `0` = True
- `1` = False
- `3` = SNA

### idx 188 - BRAKE6.ACC_Wheel_Torque_Enabled_BSM (0x1F2)
- `0` = Not Enabled
- `1` = Enabled

### idx 189 - BRAKE6.Brk_Jrk_Resp (0x1F2)
- `0` = Not_Executed
- `1` = Executed

### idx 190 - BRAKE6.Brk_Thermdl (0x1F2)
- `0` = Normal_Temperature
- `1` = High_Temperature

### idx 191 - BRAKE6.BTM_Warning (0x1F2)
- `0` = No_Warning
- `1` = Propulsion_Threshold
- `2` = Warm_Warning
- `3` = Hot_Warning
- `7` = Unavailable

### idx 194 - BRAKE7.ASRActive (0x418)
- `0` = Not_active
- `1` = Active

### idx 196 - BRAKE7.HNGActive (0x418)
- `0` = Not_Active
- `1` = Active

### idx 198 - BRAKE7.MSRActive (0x418)
- `0` = Not_Active
- `1` = Active

### idx 199 - BRAKE7.TravelDistance (0x418)
- `255` = SNA

### idx 200 - BRAKE8.ABSFailSts (0x4AF)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 201 - BRAKE8.ACCEngaged (0x4AF)
- `0` = Not_Engaged
- `1` = Engaged

### idx 202 - BRAKE8.BSM_BLC_Active (0x4AF)
- `0` = Not_Active
- `1` = Active

### idx 203 - BRAKE8.BSMSysSts (0x4AF)
- `0` = Normal mode
- `1` = Diagnosis mode
- `2` = Alternative mode
- `3` = SNA

### idx 204 - BRAKE8.CMMIntervention (0x4AF)
- `0` = No_intervention
- `1` = Intervention

### idx 206 - BRAKE8.EBDFailSts (0x4AF)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 207 - BRAKE8.ERMActive (0x4AF)
- `0` = Not_Active
- `1` = Active

### idx 208 - BRAKE8.ESCFailSts (0x4AF)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 209 - BRAKE8.ESCIntervention (0x4AF)
- `0` = No_intervention
- `1` = Intervention_blinking_lamp

### idx 210 - BRAKE8.FunctionFailSts (0x4AF)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 211 - BRAKE8.FunctionIntervention (0x4AF)
- `0` = No_intervention
- `1` = Intervention_blinking_lamp

### idx 212 - BRAKE8.FunctionSts (0x4AF)
- `0` = Not_Active
- `1` = Active

### idx 213 - BRAKE8.HillHolderFailSts (0x4AF)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 215 - BRAKE8.RollsModeAct (0x4AF)
- `0` = Not_active
- `1` = Active

### idx 216 - BRAKE8.TPMActivitySts (0x4AF)
- `0` = TPM_Enabled
- `1` = TPM_Disabled

### idx 217 - BRAKE8.TSCActive (0x4AF)
- `0` = Not_Active
- `1` = Active

### idx 218 - BRAKE8.TyreInflationState_LHF_Tyre (0x4AF)
- `0` = Normal_Tyre_Pressure
- `1` = Under_Inflated_Tyre
- `2` = Significantly_Under_Inflated_Tyre
- `3` = Over_Inflated_Tyre

### idx 219 - BRAKE8.TyreInflationState_LHR_Tyre (0x4AF)
- `0` = Normal_Tyre_Pressure
- `1` = Under_Inflated_Tyre
- `2` = Significantly_Under_Inflated_Tyre
- `3` = Over_Inflated_Tyre

### idx 220 - BRAKE8.TyreInflationState_RHF_Tyre (0x4AF)
- `0` = Normal_Tyre_Pressure
- `1` = Under_Inflated_Tyre
- `2` = Significantly_Under_Inflated_Tyre
- `3` = Over_Inflated_Tyre

### idx 221 - BRAKE8.TyreInflationState_RHR_Tyre (0x4AF)
- `0` = Normal_Tyre_Pressure
- `1` = Under_Inflated_Tyre
- `2` = Significantly_Under_Inflated_Tyre
- `3` = Over_Inflated_Tyre

### idx 222 - BRAKE8.TyrePressureSystemFailSts (0x4AF)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 223 - BRAKE9.HDCAutoDisabled (0x5AD)
- `0` = HDCAutoDisabled_ON
- `1` = HDCAutoDisabled_OFF

### idx 224 - BRAKE9.HDCAutoDisabledBrakes (0x5AD)
- `0` = HDCAutoDisabledBrakes_ON
- `1` = HDCAutoDisabledBrakes_OFF

### idx 225 - BRAKE9.HDCDisabled (0x5AD)
- `0` = HDCDisabled_ON
- `1` = HDCDisabled_OFF

### idx 226 - BRAKE9.HDCEnabled (0x5AD)
- `0` = HDCEnabled_ON
- `1` = HDCEnabled_OFF

### idx 227 - BRAKE9.HDCIntervention (0x5AD)
- `0` = HDCIntervention_ON
- `1` = HDCIntervention_OFF

### idx 228 - BRAKE9.HDCUserFdBck (0x5AD)
- `0` = On
- `1` = Off
- `2` = Blink
- `3` = SNA

### idx 229 - BRAKE9.PowerModeSts_BSM (0x5AD)
- `0` = Standard Power
- `1` = Logistic Mode ON
- `2` = Logistic_Mode_PR
- `3` = Not_Used

### idx 231 - BSM_YRS_DATA.InternalError_BSM (0xFE)
- `0` = No_int_processing_error_detected
- `1` = Int_processing_error_detected

### idx 232 - BSM_YRS_DATA.LatAcceleration_BSM (0xFE)
- `4095` = SNA

### idx 233 - BSM_YRS_DATA.LatAccelerationFailSts_BSM (0xFE)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 234 - BSM_YRS_DATA.LongAcceleration_BSM (0xFE)
- `4095` = SNA

### idx 235 - BSM_YRS_DATA.LongAccelerationFailSts_BSM (0xFE)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 237 - BSM_YRS_DATA.Slope (0xFE)
- `255` = SNA

### idx 238 - BSM_YRS_DATA.YawRate_BSM (0xFE)
- `4095` = SNA

### idx 239 - BSM_YRS_DATA.YawRateFailSts_BSM (0xFE)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 240 - C2_IGW1.SPMControlSts (0x5AB)
- `0` = Not_Active
- `1` = Active_ParallelParking
- `2` = Active_PerpendicularParking
- `3` = Active_OutParking

### idx 241 - C2_IGW3.ACC_CameraBlinded (0x5A0)
- `0` = Fail_Present
- `1` = Fail_not_present

### idx 242 - C2_IGW3.ACC_CameraBlocked (0x5A0)
- `0` = Fail_Present
- `1` = Fail_not_present

### idx 243 - C2_IGW3.ACC_RadarBlinded (0x5A0)
- `0` = Fail_Present
- `1` = Fail_not_present

### idx 244 - C2_IGW3.ACC_SetSpeedKPH (0x5A0)
- `255` = SNA

### idx 245 - C2_IGW3.ACC_SetSpeedMPH (0x5A0)
- `255` = SNA

### idx 246 - C2_IGW3.ACC_StopStart_Req (0x5A0)
- `0` = Autostop_Not_Allowed
- `1` = Autostop_Allowed

### idx 247 - C2_IGW3.ACCFailSts (0x5A0)
- `0` = Fail_not_present
- `1` = Fail_Present

### idx 248 - C2_IGW3.ACCSystemSts (0x5A0)
- `0` = OFF
- `1` = Enabled
- `2` = Engaged
- `3` = Engaged_BrakeOnly
- `4` = Override
- `5` = Cancel

### idx 249 - C2_IGW3.AEBFailSts (0x5A0)
- `0` = Fail_Present
- `1` = Fail_not_present

### idx 250 - C2_IGW3.CameraBlinded (0x5A0)
- `0` = Fail_Present
- `1` = Fail_not_present

### idx 251 - C2_IGW3.CameraBlocked (0x5A0)
- `0` = Fail_Present
- `1` = Fail_not_present

### idx 252 - C2_IGW3.CameraSensorAdj (0x5A0)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 253 - C2_IGW3.FCWSystemSts (0x5A0)
- `0` = Off
- `1` = On_Only_Warning
- `2` = On_Only_Braking
- `3` = On_Full

### idx 254 - C2_IGW3.HMICode_ACC (0x5A0)
- `0` = No CODE
- `1` = ACC_UNAVAILABLE_4WD_LOW
- `2` = ACC_UNAVAILABLE_HDC_ACTIVE
- `3` = ACC_UNAVAILABLE_ESC_FAULT
- `4` = ACC_UNAVAILABLE_ESC_OFF
- `5` = ACC_UNAVAILABLE_BRAKES_COOLING
- `6` = ACC_UNAVAILABLE_BELOW_MIN_SPEED
- `7` = ACC_UNAVAILABLE_ABOVE_MAX_SPEED
- `8` = ACC_UNAVAILABLE_EPB_ACTIVE
- `9` = ACC_UNAVAILABLE_SHIFT_D
- `10` = ACC_UNAVAILABLE_WRONG_GEAR
- `11` = ACC_UNAVAILABLE_HIGH_RPM
- `12` = ACC_UNAVAILABLE_LOW_RPM
- `13` = ACC_CANC_BRAKE_COOLING
- `14` = ACC_CANC_BELOW_MIN_SPEED
- `15` = ACC_CANC_ABOVE_MAX_SPEED
- `16` = ACC_CANC_EPB_ACTIVE
- `17` = ACC_CANC_ESC_OFF
- `18` = ACC_CANC_ESC_EVENT
- `19` = ACC_WARNING_CLUTCH_ENGAGED
- `20` = ACC_CANC_LOW_RPM
- `21` = ACC_CANC_HIGH_RPM
- `22` = ACC_WARNING_NEUTRAL_ENGAGED
- `23` = ACC_CANC_WRONG_GEAR
- `24` = ACC_CANC_SHIFT_D
- `25` = ACC_OFF_ESC_FAULT
- `26` = ACC_PROX_WARNING
- `27` = ACC_CAMERA_FAIL
- `28` = ACC_CAMERA BLINDED
- `29` = NCC_UNAVAILABLE_4WD_LOW
- `30` = NCC_UNAVAILABLE_HDC_ACTIVE
- `31` = NCC_UNAVAILABLE_ESC_FAULT
- `32` = NCC_UNAVAILABLE_ESC_OFF
- `33` = NCC_UNAVAILABLE_BRAKES_COOLING
- `34` = NCC_UNAVAILABLE_BELOW_MIN_SPEED
- `35` = NCC_UNAVAILABLE_ABOVE_MAX_SPEED
- `36` = NCC_UNAVAILABLE_EPB_ACTIVE
- `37` = NCC_UNAVAILABLE_SHIFT_D
- `38` = NCC_UNAVAILABLE_WRONG_GEAR
- `39` = NCC_UNAVAILABLE_HIGH_RPM
- `40` = NCC_UNAVAILABLE_LOW_RPM
- `41` = NCC_CANC_BRAKE_COOLING
- `42` = NCC_CANC_BELOW_MIN_SPEED
- `43` = NCC_CANC_ABOVE_MAX_SPEED
- `44` = NCC_CANC_EPB_ACTIVE
- `45` = NCC_CANC_ESC_OFF
- `46` = NCC_CANC_ESC_EVENT
- `47` = NCC_WARNING_CLUTCH_ENGAGED
- `48` = NCC_CANC_LOW_RPM
- `49` = NCC_CANC_HIGH_RPM
- `50` = NCC_WARNING_NEUTRAL_ENGAGED
- `51` = NCC_CANC_WRONG_GEAR
- `52` = NCC_CANC_SHIFT_D
- `53` = ACC_USER_DISABLED
- `54` = ACC_USER_ENABLED_D1
- `55` = ACC_USER_ENABLED_D2
- `56` = ACC_USER_ENABLED_D3
- `57` = ACC_USER_ENABLED_D4
- `58` = ACC_SET_D1_TARGET
- `59` = ACC_SET_D2_TARGET
- `60` = ACC_SET_D3_TARGET
- `61` = ACC_SET_D4_TARGET
- `62` = ACC_SET_D1_NO_TARGET
- `63` = ACC_SET_D2_NO_TARGET
- `64` = ACC_SET_D3_NO_TARGET
- `65` = ACC_SET_D4_NO_TARGET
- `66` = ACC_CANCEL_D1
- `67` = ACC_CANCEL_D2
- `68` = ACC_CANCEL_D3
- `69` = ACC_CANCEL_D4
- `70` = ACC_CANCEL
- `71` = ACC_ENABLED
- `72` = ACC_SET
- `73` = ACC_RESUME
- `74` = ACC_OVERRIDE
- `75` = ACC_OVERRIDE_D1
- `76` = ACC_OVERRIDE_D2
- `77` = ACC_OVERRIDE_D3
- `78` = ACC_OVERRIDE_D4
- `79` = NCC_CANCEL
- `80` = NCC_USER_ENABLED
- `81` = NCC_SET
- `82` = NCC_RESUME
- `83` = NCC_USER_DISABLED
- `84` = NCC_OVERRIDE
- `85` = ACC_UNAVAILABLE
- `86` = NCC_UNAVAILABLE
- `87` = ACC_CANCEL_CHIME
- `88` = NCC_CANCEL_CHIME
- `89` = ACC_UNAVAILABLE_ESC_EVENT
- `90` = NCC_UNAVAILABLE_ESC_EVENT
- `91` = ACC_UNAVAILABLE_CLUTCH_ENGAGED
- `92` = NCC_UNAVAILABLE_CLUTCH_ENGAGED
- `93` = ACC_FRONT_RADAR_SENSOR_PLANT_MODE
- `94` = ACC_CANC_DOOR_OPEN
- `95` = ACC_CANC_SEATBELT_UNBUCKLED
- `96` = ACC_UNAVAILABLE_DOOR_OPEN
- `97` = ACC_UNAVAILABLE_SEATBELT_UNBUCKLED
- `98` = ACC_STOP_VEHICLE_OBJECT_DETECTED
- `99` = ACC_CANC_ROAD_TOO_STEEP
- `100` = ACC_UNAVAILABLE_ROAD_TOO_STEEP
- `101` = ACC_NCC_USER_DISABLED
- `102` = FCW_ACC_RADAR_BLINDED
- `103` = ACC_RADAR_BLINDED
- `104` = ACC_PERM_FAIL
- `105` = ACC_FCW_PERM_FAIL
- `106` = NCC_FCW_PERM_FAIL
- `107` = NCC_PERM_FAIL
- `108` = FCW_PERM_FAIL
- `109` = ACC_SET_D1_TARGET_RESUME_REQ
- `110` = ACC_SET_D2_TARGET_RESUME_REQ
- `111` = ACC_SET_D3_TARGET_RESUME_REQ
- `112` = ACC_SET_D4_TARGET_RESUME_REQ
- `113` = iACC_NOT_AVAIL_SPEED_TOO_HIGH
- `114` = iACC_NOT_AVAIL_SPEED_TOO_LOW
- `115` = ACC_PROX_WARNING_LEFT
- `116` = ACC_PROX_WARNING_CENTER
- `117` = ACC_PROX_WARNING_RIGHT
- `118` = iACC_NOT_AVAILABLE_TSR_NOT_AVAILABLE
- `119` = Tight_Curve_HMICode

### idx 255 - C2_IGW3.HMICode_FCW (0x5A0)
- `0` = Idle
- `1` = Pre_Intervention_warning
- `2` = Intervention__warning
- `3` = Not_Available_warning_type1
- `4` = Not_Available_warning_4WD_Low
- `5` = ACTIVE_BRAKING_ENBL
- `6` = ACTIVE_BRAKING_DSBL
- `7` = FCW_USER_DISABLED
- `8` = FCW_RADAR_BLINDED
- `9` = FCW_CAMERA_BLINDED
- `10` = FCW_CAMERA_FAIL
- `11` = FCW_PERM_FAIL
- `12` = Pre_Intervention_warning_Left
- `13` = Pre_Intervention_warning_Right
- `14` = Pre_Intervention_warning_Center
- `15` = AEB_Off_Init
- `16` = Not_Available_warning_type2
- `17` = Cancelled_warning_type1
- `18` = Cancelled_warning_type2
- `19` = FCW_Camera_Blocked

### idx 256 - C2_IGW3.HMIDisplay_ACC (0x5A0)
- `0` = No_Code
- `1` = ACC_USER_DISABLED
- `2` = ACC_USER_ENABLED_D1
- `3` = ACC_USER_ENABLED_D2
- `4` = ACC_USER_ENABLED_D3
- `5` = ACC_USER_ENABLED_D4
- `6` = ACC_SET_D1_TARGET
- `7` = ACC_SET_D2_TARGET
- `8` = ACC_SET_D3_TARGET
- `9` = ACC_SET_D4_TARGET
- `10` = ACC_SET_D1_NO_TARGET
- `11` = ACC_SET_D2_NO_TARGET
- `12` = ACC_SET_D3_NO_TARGET
- `13` = ACC_SET_D4_NO_TARGET
- `14` = ACC_CANCEL_D1
- `15` = ACC_CANCEL_D2
- `16` = ACC_CANCEL_D3
- `17` = ACC_CANCEL_D4
- `18` = ACC_CANCEL
- `19` = ACC_ENABLED
- `20` = ACC_SET
- `21` = ACC_RESUME
- `22` = ACC_OVERRIDE
- `23` = ACC_OVERRIDE_D1
- `24` = ACC_OVERRIDE_D2
- `25` = ACC_OVERRIDE_D3
- `26` = ACC_OVERRIDE_D4
- `27` = NCC_CANCEL
- `28` = NCC_USER_ENABLED
- `29` = NCC_SET
- `30` = NCC_RESUME
- `31` = NCC_USER_DISABLED
- `32` = NCC_OVERRIDE
- `33` = ACC_SET_D1_TARGET_RESUME_REQ
- `34` = ACC_SET_D2_TARGET_RESUME_REQ
- `35` = ACC_SET_D3_TARGET_RESUME_REQ
- `36` = ACC_SET_D4_TARGET_RESUME_REQ
- `37` = ACC_OVERRIDE_D1_TARGET
- `38` = ACC_OVERRIDE_D2_TARGET
- `39` = ACC_OVERRIDE_D3_TARGET
- `40` = ACC_OVERRIDE_D4_TARGET

### idx 257 - C2_IGW3.iACCSts (0x5A0)
- `0` = Not_Active
- `1` = Active

### idx 368 - CLIMATE_SCHEDULE_TBM1.TBM_AllowClimateSchd1 (0x5EC)
- `0` = Any_Time 
- `1` = Plugged_In_Only
- `2` = Plugged_In_and_In_Charge_Schd
- `3` = SNA

### idx 369 - CLIMATE_SCHEDULE_TBM1.TBM_Climate_Cabin_Temp1 (0x5EC)
- `31` = SNA

### idx 370 - CLIMATE_SCHEDULE_TBM1.TBM_ClimateSchd1_Day (0x5EC)
- `0` = No Selection
- `1` = M
- `2` = T
- `3` = TM
- `4` = W
- `5` = WM
- `6` = WT
- `7` = WTM
- `8` = Th
- `9` = ThM
- `10` = ThT
- `11` = ThTM
- `12` = ThW
- `13` = ThWM
- `14` = ThWT
- `15` = ThWTM
- `16` = F
- `17` = FM
- `18` = FT
- `19` = FTM
- `20` = FW
- `21` = FWM
- `22` = FWT
- `23` = FWTM
- `24` = FTh
- `25` = FThM
- `26` = FThT
- `27` = FThTM
- `28` = FThW
- `29` = FThWM
- `30` = FThWT
- `31` = FThWTM
- `32` = S
- `33` = SM
- `34` = ST
- `35` = STM
- `36` = SW
- `37` = SWM
- `38` = SWT
- `39` = SWTM
- `40` = STh
- `41` = SThM
- `42` = SThT
- `43` = SThTM
- `44` = SThW
- `45` = SThWM
- `46` = SThWT
- `47` = SThWTM
- `48` = SF
- `49` = SFM
- `50` = SFT
- `51` = SFTM
- `52` = SFW
- `53` = SFWM
- `54` = SFWT
- `55` = SFWTM
- `56` = SFTh
- `57` = SFThM
- `58` = SFThT
- `59` = SFThTM
- `60` = SFThW
- `61` = SFThWM
- `62` = SFThWT
- `63` = SFThWTM
- `64` = Su
- `65` = SuM
- `66` = SuT
- `67` = SuTM
- `68` = SuW
- `69` = SuWM
- `70` = SuWT
- `71` = SuWTM
- `72` = SuTh
- `73` = SuThM
- `74` = SuThT
- `75` = SuThTM
- `76` = SuThW
- `77` = SuThWM
- `78` = SuThWT
- `79` = SuThWTM
- `80` = SuF
- `81` = SuFM
- `82` = SuFT
- `83` = SuFTM
- `84` = SuFW
- `85` = SuFWM
- `86` = SuFWT
- `87` = SuFWTM
- `88` = SuFTh
- `89` = SuFThM
- `90` = SuFThT
- `91` = SuFThTM
- `92` = SuFThW
- `93` = SuFThWM
- `94` = SuFThWT
- `95` = SuFThWTM
- `96` = SuS
- `97` = SuSM
- `98` = SuST
- `99` = SuSTM
- `100` = SuSW
- `101` = SuSWM
- `102` = SuSWT
- `103` = SuSWTM
- `104` = SuSTh
- `105` = SuSThM
- `106` = SuSThT
- `107` = SuSThTM
- `108` = SuSThW
- `109` = SuSThWM
- `110` = SuSThWT
- `111` = SuSThWTM
- `112` = SuSF
- `113` = SuSFM
- `114` = SuSFT
- `115` = SuSFTM
- `116` = SuSFW
- `117` = SuSFWM
- `118` = SuSFWT
- `119` = SuSFWTM
- `120` = SuSFTh
- `121` = SuSFThM
- `122` = SuSFThT
- `123` = SuSFThTM
- `124` = SuSFThW
- `125` = SuSFThWM
- `126` = SuSFThWT
- `127` = SuSFThWTM
- `255` = SNA

### idx 371 - CLIMATE_SCHEDULE_TBM1.TBM_ClimateSchd1_Departure_Hr (0x5EC)
- `31` = SNA

### idx 372 - CLIMATE_SCHEDULE_TBM1.TBM_ClimateSchd1_Departure_Min (0x5EC)
- `15` = SNA

### idx 373 - CLIMATE_SCHEDULE_TBM1.TBM_Enable_ClimateSchd1 (0x5EC)
- `0` = Disable_schedule1
- `1` = Enable_schedule1

### idx 374 - CLIMATE_SCHEDULE_TBM1.TBM_Submit_ClimateSchd1 (0x5EC)
- `0` = No_Change
- `1` = Change_in_schedule1

### idx 375 - CLIMATE_SCHEDULE_TBM2.TBM_AllowClimateSchd2 (0x5ED)
- `0` = Any_Time 
- `1` = Plugged_In_Only
- `2` = Plugged_In_and_In_Charge_Schd
- `3` = SNA

### idx 376 - CLIMATE_SCHEDULE_TBM2.TBM_Climate_Cabin_Temp2 (0x5ED)
- `31` = SNA

### idx 377 - CLIMATE_SCHEDULE_TBM2.TBM_ClimateSchd2_Day (0x5ED)
- `0` = No Selection
- `1` = M
- `2` = T
- `3` = TM
- `4` = W
- `5` = WM
- `6` = WT
- `7` = WTM
- `8` = Th
- `9` = ThM
- `10` = ThT
- `11` = ThTM
- `12` = ThW
- `13` = ThWM
- `14` = ThWT
- `15` = ThWTM
- `16` = F
- `17` = FM
- `18` = FT
- `19` = FTM
- `20` = FW
- `21` = FWM
- `22` = FWT
- `23` = FWTM
- `24` = FTh
- `25` = FThM
- `26` = FThT
- `27` = FThTM
- `28` = FThW
- `29` = FThWM
- `30` = FThWT
- `31` = FThWTM
- `32` = S
- `33` = SM
- `34` = ST
- `35` = STM
- `36` = SW
- `37` = SWM
- `38` = SWT
- `39` = SWTM
- `40` = STh
- `41` = SThM
- `42` = SThT
- `43` = SThTM
- `44` = SThW
- `45` = SThWM
- `46` = SThWT
- `47` = SThWTM
- `48` = SF
- `49` = SFM
- `50` = SFT
- `51` = SFTM
- `52` = SFW
- `53` = SFWM
- `54` = SFWT
- `55` = SFWTM
- `56` = SFTh
- `57` = SFThM
- `58` = SFThT
- `59` = SFThTM
- `60` = SFThW
- `61` = SFThWM
- `62` = SFThWT
- `63` = SFThWTM
- `64` = Su
- `65` = SuM
- `66` = SuT
- `67` = SuTM
- `68` = SuW
- `69` = SuWM
- `70` = SuWT
- `71` = SuWTM
- `72` = SuTh
- `73` = SuThM
- `74` = SuThT
- `75` = SuThTM
- `76` = SuThW
- `77` = SuThWM
- `78` = SuThWT
- `79` = SuThWTM
- `80` = SuF
- `81` = SuFM
- `82` = SuFT
- `83` = SuFTM
- `84` = SuFW
- `85` = SuFWM
- `86` = SuFWT
- `87` = SuFWTM
- `88` = SuFTh
- `89` = SuFThM
- `90` = SuFThT
- `91` = SuFThTM
- `92` = SuFThW
- `93` = SuFThWM
- `94` = SuFThWT
- `95` = SuFThWTM
- `96` = SuS
- `97` = SuSM
- `98` = SuST
- `99` = SuSTM
- `100` = SuSW
- `101` = SuSWM
- `102` = SuSWT
- `103` = SuSWTM
- `104` = SuSTh
- `105` = SuSThM
- `106` = SuSThT
- `107` = SuSThTM
- `108` = SuSThW
- `109` = SuSThWM
- `110` = SuSThWT
- `111` = SuSThWTM
- `112` = SuSF
- `113` = SuSFM
- `114` = SuSFT
- `115` = SuSFTM
- `116` = SuSFW
- `117` = SuSFWM
- `118` = SuSFWT
- `119` = SuSFWTM
- `120` = SuSFTh
- `121` = SuSFThM
- `122` = SuSFThT
- `123` = SuSFThTM
- `124` = SuSFThW
- `125` = SuSFThWM
- `126` = SuSFThWT
- `127` = SuSFThWTM
- `255` = SNA

### idx 378 - CLIMATE_SCHEDULE_TBM2.TBM_ClimateSchd2_Departure_Hr (0x5ED)
- `31` = SNA

### idx 379 - CLIMATE_SCHEDULE_TBM2.TBM_ClimateSchd2_Departure_Min (0x5ED)
- `15` = SNA

### idx 380 - CLIMATE_SCHEDULE_TBM2.TBM_Enable_ClimateSchd2 (0x5ED)
- `0` = Disable_schedule2
- `1` = Enable_schedule2

### idx 381 - CLIMATE_SCHEDULE_TBM2.TBM_Submit_ClimateSchd2 (0x5ED)
- `0` = No_Change
- `1` = Change_in_schedule2

### idx 382 - CLUSTER1.ElectricSteeringLamp_FailSts (0x259)
- `0` = OFF_Fail_not_present
- `1` = OFF_Fail_present
- `2` = ON_Fail_not_present
- `3` = Not_used

### idx 383 - CLUSTER1.Idle_Preset_Activation (0x259)
- `0` = Off
- `1` = ON

### idx 384 - CLUSTER1.Idle_Preset_RPM_Set (0x259)
- `511` = SNA

### idx 385 - CLUSTER1.OdometerFailSts (0x259)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 386 - CLUSTER1.PowerLimit_Requested (0x259)
- `0` = No_Change
- `1` = Level1
- `2` = Level2
- `3` = Level3
- `4` = Level4
- `5` = Level5
- `7` = SNA

### idx 387 - CLUSTER1.SpeedUnit (0x259)
- `0` = km/h
- `1` = mph

### idx 389 - CLUSTER2.AirBagLamp_FailSts (0x256)
- `0` = OFF_Fail_not_present
- `1` = OFF_Fail_present
- `2` = ON_Fail_not_present
- `3` = BLINKING_Fail_not_present

### idx 390 - CLUSTER2.DistanceUnit (0x256)
- `0` = km
- `1` = miles

### idx 391 - CLUSTER2.EPBAutoAppReqSts (0x256)
- `0` = Not_Request
- `1` = AutoApply_Disable
- `2` = AutoApply_Enable
- `3` = Not_used

### idx 392 - CLUSTER2.EPBMaintenanceReqSts (0x256)
- `0` = Not_Request
- `1` = Maintenance_Disable
- `2` = Maintenance_Enable
- `3` = Not_used

### idx 393 - CLUSTER2.FSFCWPlusActivationMode (0x256)
- `0` = Near
- `1` = Med
- `2` = Far

### idx 394 - CLUSTER2.FSFCWPlusSetting (0x256)
- `0` = Off
- `1` = Audio
- `2` = Brake
- `3` = Audio_Brake
- `4` = No_Request

### idx 395 - CLUSTER2.HHDisablingCommandSts (0x256)
- `0` = Enabled
- `1` = Disabled

### idx 396 - CLUSTER2.PassiveEntry (0x256)
- `0` = On
- `1` = Off

### idx 397 - CLUSTER2.PowerModeSts_IPC (0x256)
- `0` = Standard_Power
- `1` = Logistic_Mode_ON
- `2` = Logistic_Mode_PR
- `3` = Not_Used

### idx 398 - CLUSTER2.PsngrBagRequestSts (0x256)
- `0` = Not_Request
- `1` = Enable
- `2` = Disable
- `3` = Not_Used

### idx 399 - CLUSTER2.TPICalibrationReqSts (0x256)
- `0` = Not_Active
- `1` = Active

### idx 400 - CLUSTER5.Clock_Status (0xE0)
- `0` = Fixed
- `1` = Blinking

### idx 401 - CLUSTER5.DisplayedSpeedSign (0xE0)
- `0` = Sign_Not_Detected
- `1` = Speed_Limit_1
- `2` = Speed_Limit_2
- `3` = Speed_Limit_3
- `4` = Speed_Limit_4
- `5` = Speed_Limit_5
- `6` = Speed_Limit_6
- `7` = Speed_Limit_7
- `8` = Speed_Limit_8
- `9` = Speed_Limit_9
- `10` = Speed_Limit_10
- `11` = Speed_Limit_11
- `12` = Speed_Limit_12
- `13` = Speed_Limit_13
- `14` = Speed_Limit_14
- `15` = Speed_Limit_15
- `16` = Speed_Limit_16
- `17` = Speed_Limit_17
- `18` = Speed_Limit_18
- `19` = Speed_Limit_19
- `20` = Speed_Limit_20
- `21` = Speed_Limit_21
- `22` = Speed_Limit_22
- `23` = Speed_Limit_23
- `24` = Speed_Limit_24
- `25` = Speed_Limit_25
- `26` = Speed_Limit_26
- `27` = Speed_Limit_27
- `28` = Speed_Limit_28
- `29` = Speed_Limit_29
- `30` = Speed_Limit_30
- `31` = Speed_Limit_31
- `32` = Speed_Limit_32
- `33` = Speed_Limit_33
- `34` = Speed_Limit_34
- `35` = Speed_Limit_35
- `36` = Speed_Limit_36
- `37` = Speed_Limit_37
- `38` = Speed_Limit_38
- `39` = Speed_Limit_39
- `40` = Speed_Limit_40
- `41` = Speed_Limit_41
- `42` = Speed_Limit_42
- `43` = Speed_Limit_43
- `44` = Speed_Limit_44
- `45` = Speed_Limit_45
- `46` = Speed_Limit_46
- `47` = Speed_Limit_47
- `48` = Speed_Limit_48
- `49` = Speed_Limit_49
- `50` = Speed_Limit_50
- `51` = Speed_Limit_51
- `52` = Speed_Limit_52
- `53` = Speed_Limit_53
- `54` = Speed_Limit_54
- `55` = Speed_Limit_55
- `56` = Speed_Limit_56
- `57` = Speed_Limit_57
- `58` = Speed_Limit_58
- `59` = Speed_Limit_59
- `60` = Speed_Limit_60
- `61` = Speed_Limit_61
- `62` = Speed_Limit_62
- `63` = Speed_Limit_63
- `64` = Speed_Limit_64
- `65` = Speed_Limit_65
- `66` = Speed_Limit_66
- `67` = Speed_Limit_67
- `68` = Speed_Limit_68
- `69` = Speed_Limit_69
- `70` = Speed_Limit_70
- `71` = Speed_Limit_71
- `72` = Speed_Limit_72
- `73` = Speed_Limit_73
- `74` = Speed_Limit_74
- `75` = Speed_Limit_75
- `76` = Speed_Limit_76
- `77` = Speed_Limit_77
- `78` = Speed_Limit_78
- `79` = Speed_Limit_79
- `80` = Speed_Limit_80
- `81` = Speed_Limit_81
- `82` = Speed_Limit_82
- `83` = Speed_Limit_83
- `84` = Speed_Limit_84
- `85` = Speed_Limit_85
- `86` = Speed_Limit_86
- `87` = Speed_Limit_87
- `88` = Speed_Limit_88
- `89` = Speed_Limit_89
- `90` = Speed_Limit_90
- `91` = Speed_Limit_91
- `92` = Speed_Limit_92
- `93` = Speed_Limit_93
- `94` = Speed_Limit_94
- `95` = Speed_Limit_95
- `96` = Speed_Limit_96
- `97` = Speed_Limit_97
- `98` = Speed_Limit_98
- `99` = Speed_Limit_99
- `100` = Speed_Limit_100
- `101` = Speed_Limit_101
- `102` = Speed_Limit_102
- `103` = Speed_Limit_103
- `104` = Speed_Limit_104
- `105` = Speed_Limit_105
- `106` = Speed_Limit_106
- `107` = Speed_Limit_107
- `108` = Speed_Limit_108
- `109` = Speed_Limit_109
- `110` = Speed_Limit_110
- `111` = Speed_Limit_111
- `112` = Speed_Limit_112
- `113` = Speed_Limit_113
- `114` = Speed_Limit_114
- `115` = Speed_Limit_115
- `116` = Speed_Limit_116
- `117` = Speed_Limit_117
- `118` = Speed_Limit_118
- `119` = Speed_Limit_119
- `120` = Speed_Limit_120
- `121` = Speed_Limit_121
- `122` = Speed_Limit_122
- `123` = Speed_Limit_123
- `124` = Speed_Limit_124
- `125` = Speed_Limit_125
- `126` = Speed_Limit_126
- `127` = Speed_Limit_127
- `128` = Speed_Limit_128
- `129` = Speed_Limit_129
- `130` = Speed_Limit_130
- `131` = Speed_Limit_131
- `132` = Speed_Limit_132
- `133` = Speed_Limit_133
- `134` = Speed_Limit_134
- `135` = Speed_Limit_135
- `136` = Speed_Limit_136
- `137` = Speed_Limit_137
- `138` = Speed_Limit_138
- `139` = Speed_Limit_139
- `140` = Speed_Limit_140
- `141` = Speed_Limit_141
- `142` = Speed_Limit_142
- `143` = Speed_Limit_143
- `144` = Speed_Limit_144
- `145` = Speed_Limit_145
- `146` = Speed_Limit_146
- `147` = Speed_Limit_147
- `148` = Speed_Limit_148
- `149` = Speed_Limit_149
- `150` = Speed_Limit_150
- `151` = Speed_Limit_151
- `152` = Speed_Limit_152
- `153` = Speed_Limit_153
- `154` = Speed_Limit_154
- `155` = Speed_Limit_155
- `156` = Speed_Limit_156
- `157` = Speed_Limit_157
- `158` = Speed_Limit_158
- `159` = Speed_Limit_159
- `160` = Speed_Limit_160
- `161` = Speed_Limit_161
- `162` = Speed_Limit_162
- `163` = Speed_Limit_163
- `164` = Speed_Limit_164
- `165` = Speed_Limit_165
- `166` = Speed_Limit_166
- `167` = Speed_Limit_167
- `168` = Speed_Limit_168
- `169` = Speed_Limit_169
- `170` = Speed_Limit_170
- `171` = Speed_Limit_171
- `172` = Speed_Limit_172
- `173` = Speed_Limit_173
- `174` = Speed_Limit_174
- `175` = Speed_Limit_175
- `176` = Speed_Limit_176
- `177` = Speed_Limit_177
- `178` = Speed_Limit_178
- `179` = Speed_Limit_179
- `180` = Speed_Limit_180
- `181` = Speed_Limit_181
- `182` = Speed_Limit_182
- `183` = Speed_Limit_183
- `184` = Speed_Limit_184
- `185` = Speed_Limit_185
- `186` = Speed_Limit_186
- `187` = Speed_Limit_187
- `188` = Speed_Limit_188
- `189` = Speed_Limit_189
- `190` = Speed_Limit_190
- `191` = Speed_Limit_191
- `192` = Speed_Limit_192
- `193` = Speed_Limit_193
- `194` = Speed_Limit_194
- `195` = Speed_Limit_195
- `196` = Speed_Limit_196
- `197` = Speed_Limit_197
- `198` = Speed_Limit_198
- `199` = Speed_Limit_199
- `200` = Speed_Limit_200
- `201` = Speed_Limit_201
- `202` = Speed_Limit_202
- `203` = Speed_Limit_203
- `204` = Speed_Limit_204
- `205` = Speed_Limit_205
- `206` = Speed_Limit_206
- `207` = Speed_Limit_207
- `208` = Speed_Limit_208
- `209` = Speed_Limit_209
- `210` = Speed_Limit_210
- `211` = Speed_Limit_211
- `212` = Speed_Limit_212
- `213` = Speed_Limit_213
- `214` = Speed_Limit_214
- `215` = Speed_Limit_215
- `216` = Speed_Limit_216
- `217` = Speed_Limit_217
- `218` = Speed_Limit_218
- `219` = Speed_Limit_219
- `220` = Speed_Limit_220
- `221` = Speed_Limit_221
- `222` = Speed_Limit_222
- `223` = Speed_Limit_223
- `224` = Speed_Limit_224
- `225` = Speed_Limit_225
- `226` = Speed_Limit_226
- `227` = Speed_Limit_227
- `228` = Speed_Limit_228
- `229` = Speed_Limit_229
- `230` = Speed_Limit_230
- `231` = Speed_Limit_231
- `232` = Speed_Limit_232
- `233` = Speed_Limit_233
- `254` = Speed_Limit_Unlimited
- `255` = End_Speed_Limit

### idx 402 - CLUSTER5.Drowsy_Driver_Alert (0xE0)
- `0` = Off
- `1` = On

### idx 403 - CLUSTER5.MOIS_Enable (0xE0)
- `0` = Off
- `1` = On

### idx 404 - CLUSTER5.NewSpdZoneInd (0xE0)
- `0` = Off
- `1` = Chime
- `2` = Visual
- `3` = Visual_Chime

### idx 405 - CLUSTER5.SignCaptureMode (0xE0)
- `0` = Confirmation
- `1` = Automatic

### idx 406 - DDA_INFO.DDAFailSts (0x22D)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 407 - DDA_INFO.DDD_Setting_Avail (0x22D)
- `0` = Available
- `1` = Not_Available

### idx 408 - DDA_INFO.DDD_SystemSts (0x22D)
- `0` = OFF
- `1` = ON

### idx 409 - DDA_INFO.DM_Camera_Block (0x22D)
- `0` = Fail_Not_Present
- `1` = Present

### idx 410 - DDA_INFO.DM_Distract_DispPopupSts (0x22D)
- `0` = NO_CODE
- `1` = DISTRACTION_LEVEL1
- `2` = DISTRACTION_LEVEL2

### idx 411 - DDA_INFO.DM_Drowsiness_DispPopupSts (0x22D)
- `0` = NO_CODE
- `1` = DROWSINESS_LEVEL1
- `2` = DROWSINESS_LEVEL2

### idx 480 - ECM_EDR.BrkSw1Stat (0x736)
- `0` = OFF
- `1` = ON

### idx 481 - ECM_EDR.BrkSw2Stat (0x736)
- `0` = OFF
- `1` = ON

### idx 489 - ENGINE1.AlternatorFail (0xFC)
- `0` = Alternator_Fail
- `1` = Alternator_Not_In_Fail

### idx 491 - ENGINE1.EngineSpeed (0xFC)
- `16383` = SNA

### idx 492 - ENGINE1.EngineSpeedFailSts (0xFC)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 493 - ENGINE1.EngineSts (0xFC)
- `0` = Engine_Off
- `1` = Engine_Cranking
- `2` = Engine_On
- `3` = SNA

### idx 494 - ENGINE1.GasPedalPosition (0xFC)
- `255` = SNA

### idx 495 - ENGINE1.GasPedalPositionFailSts (0xFC)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 496 - ENGINE1.KickDownRequest (0xFC)
- `0` = No_kd_request
- `1` = Kd_request

### idx 498 - ENGINE1.NeutralSwSts (0xFC)
- `0` = Not_Neutral
- `1` = Neutral
- `2` = Not_Used
- `3` = SNA

### idx 499 - ENGINE1.PowertrainPrplsnActv (0xFC)
- `0` = Off
- `1` = Active

### idx 500 - ENGINE1.ReverseGearSts (0xFC)
- `0` = Not_Inserted
- `1` = Inserted
- `2` = Not_Used
- `3` = SNA

### idx 501 - ENGINE10.CC_SetSpdDspl_KPH (0x5A5)
- `8191` = SNA

### idx 502 - ENGINE10.CC_SetSpdDspl_MPH (0x5A5)
- `255` = SNA

### idx 503 - ENGINE10.CruiseControlLampSts (0x5A5)
- `0` = Not_inserted
- `1` = Inserted

### idx 504 - ENGINE10.CruiseControlSts (0x5A5)
- `0` = Not_inserted
- `1` = Inserted

### idx 505 - ENGINE10.ISASts (0x5A5)
- `0` = Not_Active
- `1` = Active

### idx 506 - ENGINE10.Override (0x5A5)
- `0` = Not_active
- `1` = Active

### idx 507 - ENGINE10.SpeedLimitSts (0x5A5)
- `0` = Standby
- `1` = Activated
- `2` = Not_Actuable
- `3` = Override
- `4` = Overspeed
- `5` = Deactivated
- `6` = Off
- `7` = SNA

### idx 508 - ENGINE11.EngineOilLevel (0x4B2)
- `0` = Level1
- `1` = Level2
- `2` = Level3
- `3` = Level4
- `4` = Level5
- `5` = Level6
- `6` = Level7
- `7` = Level8
- `8` = Level9
- `9` = Level10
- `10` = Level11
- `11` = Level12
- `12` = Level13
- `13` = Level14
- `31` = SNA

### idx 509 - ENGINE11.EngineOilMin (0x4B2)
- `0` = False
- `1` = True

### idx 510 - ENGINE11.EngineOilOverfill (0x4B2)
- `0` = False
- `1` = True

### idx 511 - ENGINE12.ReagentLevel (0x546)
- `127` = SNA

### idx 512 - ENGINE12.ReagentRemainDist (0x546)
- `4095` = SNA

### idx 517 - ENGINE13.TransWarmUpMin_RPM (0x41D)
- `255` = SNA

### idx 518 - ENGINE13.TransWarmUpReq (0x41D)
- `0` = WarmUp_Not_Enabled
- `1` = WarmUp_Enabled

### idx 520 - ENGINE16.RemainingTime (0x737)
- `8191` = SNA

### idx 521 - ENGINE2.ACPressure (0x41B)
- `511` = SNA

### idx 522 - ENGINE2.ACPressureFailSts (0x41B)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 524 - ENGINE20.HeavyDuty_EMSFailSts (0x5D4)
- `0` = Off
- `1` = Ready
- `2` = Not_Ready
- `3` = M1
- `4` = M2
- `5` = M3
- `6` = M4_ON
- `7` = Bulb_Check

### idx 525 - ENGINE20.IdlePreset_Availability (0x5D4)
- `0` = Available
- `1` = Not_Available

### idx 526 - ENGINE20.IdlePreset_Sts (0x5D4)
- `0` = OFF
- `1` = ON

### idx 530 - ENGINE20.OBM_SHORT_LONG_TRIP_FLAG (0x5D4)
- `0` = Long_Trip
- `1` = Short_Trip

### idx 533 - ENGINE3.EngineTorqueDriverReq (0xFF)
- `2047` = SNA

### idx 534 - ENGINE3.FpsActuated (0xFF)
- `0` = Not_Actuated
- `1` = Actuated

### idx 535 - ENGINE3.FpsNotActuable (0xFF)
- `0` = FPS_Actuable
- `1` = FPS_Not_Actuable

### idx 536 - ENGINE3.LV12PwrFreeRq (0xFF)
- `0` = Level 1 or 2 Power free Mode NOT active
- `1` = Level 1 or 2 Power free Mode Active

### idx 537 - ENGINE3.MaxEngineTorque (0xFF)
- `2047` = SNA

### idx 539 - ENGINE3.MinEngineTorque (0xFF)
- `2047` = SNA

### idx 540 - ENGINE4.CrankHold (0xFB)
- `0` = Not_Active
- `1` = Active

### idx 542 - ENGINE4.EngineFrictionTorque (0xFB)
- `511` = SNA

### idx 543 - ENGINE4.EngineTorque (0xFB)
- `2047` = SNA

### idx 544 - ENGINE4.GasPedalGradient (0xFB)
- `255` = SNA

### idx 546 - ENGINE4.StartRelayBCMCmd (0xFB)
- `0` = Not_Action
- `1` = Action

### idx 547 - ENGINE5.ActualPedalPos (0x1F0)
- `255` = SNA

### idx 548 - ENGINE5.Analog_Clutch (0x1F0)
- `255` = SNA

### idx 549 - ENGINE5.Clutch_Upstop (0x1F0)
- `0` = Partial_switch_not_active 
- `1` = Partial_switch_active

### idx 550 - ENGINE5.ClutchInterLk (0x1F0)
- `0` = Full_switch_not_active 
- `1` = Full_switch_active

### idx 553 - ENGINE5.PyroActConfirm (0x1F0)
- `0` = Actuate
- `1` = Do_Not_Actuate

### idx 554 - ENGINE5.PyroActSts (0x1F0)
- `0` = Not_Active
- `1` = Active

### idx 555 - ENGINE6.EngineWaterTemp (0x2ED)
- `255` = SNA

### idx 556 - ENGINE6.EngineWaterTempFailSts (0x2ED)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 557 - ENGINE6.FuelConsumption_GAG (0x2ED)
- `65535` = SNA

### idx 558 - ENGINE6.GearShiftIndication (0x2ED)
- `0` = No_Gearshift_Suggestion_by_ECM
- `1` = Downshift_Suggestion_by_ECM
- `2` = Upshift_Suggestion_by_ECM
- `3` = Strategy_Not_Available_ECM_Fail

### idx 559 - ENGINE7.ActualGearACC (0x2EF)
- `0` = Undetermined
- `1` = ForwardGear_1
- `2` = ForwardGear_2
- `3` = ForwardGear_3
- `4` = ForwardGear_4
- `5` = ForwardGear_5
- `6` = ForwardGear_6
- `7` = ForwardGear_7
- `8` = ForwardGear_8
- `9` = ForwardGear_9
- `10` = ReverseGear
- `11` = Neutral
- `15` = SNA

### idx 560 - ENGINE7.ActualGearGSI (0x2EF)
- `0` = Neutral
- `1` = ForwardGear_1
- `2` = ForwardGear_2
- `3` = ForwardGear_3
- `4` = ForwardGear_4
- `5` = ForwardGear_5
- `6` = ForwardGear_6
- `7` = ReverseGear
- `8` = ForwardGear_7
- `9` = ForwardGear_8
- `10` = ForwardGear_9
- `15` = SNA

### idx 561 - ENGINE7.DPFRgnMode (0x2EF)
- `0` = Regen_Not_Active
- `1` = Regen_Active

### idx 562 - ENGINE7.EngineOilTemp (0x2EF)
- `0` = Zero_Level
- `1` = First_Level
- `2` = Second_Level
- `3` = Third_Level
- `4` = Fourth_Level
- `5` = Fifth_Level
- `6` = Sixth_Level
- `7` = SNA

### idx 563 - ENGINE7.SAMInfo (0x2EF)
- `0` = SAMOFF
- `1` = Engine_OFF
- `2` = Cranking_management
- `3` = ColdEngineManagement
- `4` = PassiveBoost
- `5` = Steady_State
- `6` = RegenerativeBraking
- `7` = QuickCharge
- `8` = Auto_Shut_OFF
- `9` = Shut_OFF
- `10` = SAM_recovery
- `11` = Battery_Regeneration
- `12` = Not_Used
- `13` = Not_Used
- `14` = Not_Used
- `15` = SNA

### idx 564 - ENGINE7.StartRelayBCMFeedbackFault (0x2EF)
- `0` = False
- `1` = True

### idx 565 - ENGINE7.StartRelayECMFeedbackFault (0x2EF)
- `0` = False
- `1` = True

### idx 566 - ENGINE7.SuggestedGearGSI (0x2EF)
- `0` = Neutral
- `1` = ForwardGear_1
- `2` = ForwardGear_2
- `3` = ForwardGear_3
- `4` = ForwardGear_4
- `5` = ForwardGear_5
- `6` = ForwardGear_6
- `7` = ReverseGear
- `8` = ForwardGear_7
- `9` = ForwardGear_8
- `10` = ForwardGear_9
- `15` = SNA

### idx 567 - ENGINE9.DrivelineSts (0x226)
- `0` = Open
- `1` = Closed
- `3` = SNA

### idx 568 - ENGINE9.ECM_WARN (0x226)
- `0` = NONE
- `1` = CC_NOT_AVAIL_PLACE_SHIFTER_IN_D
- `2` = CC_NOT_AVAIL_PARKBRAKE_ENGAGED
- `3` = CC_NOT_AVAIL_STABIL_EVENT_OCCUR
- `4` = CC_NOT_AVAIL_LOW_RANGE_4WD
- `5` = CC_NOT_AVAIL_VEHICLE_SYSTEM_ERR
- `6` = SL_NOT_AVAIL_HDC_SET
- `7` = CC_CANC_PLACE_SHIFTER_IN_DRIVE
- `8` = CC_CANC_PARKBRAKE_ENGAGED
- `9` = CC_CANC_STABILITY_EVENT_OCCUR
- `10` = SL_NOT_AVAILABLE_SSC_SET
- `11` = CC_CANC_VEHICLE_SYSTEM_ERROR
- `12` = CC_OFF_ASL_ACTIVE
- `13` = ASL OFF CRUISE ACTIVE
- `14` = CC_NOT_AVAIL_BELOW_MIN_RES_SPD
- `15` = CC_CANCELLED_ESC_OFF
- `16` = CC_UNAVAILABLE_ESC_OFF
- `17` = CC_CANCELLED_BY_DRIVER
- `18` = CC_OFF
- `19` = CC_CANCELLED_RPM_DROPS_TOO_LOW
- `20` = CC_NOT_AVAIL_RPM_DROPS_TOO_LOW
- `21` = CC_CANCELLED_RPM_TOO_HIGH
- `22` = CC_NOT_AVAILABLE_RPM_TOO_HIGH
- `23` = DRIVER_CRUISE_OVERRIDE
- `24` = CC_NOT_AVAILABLE_HDC_SET
- `25` = ISA_NOT_AVAIL_TSR_NOT_AVAIL
- `26` = ISA_NOT_AVAIL_SPEED_TOO_HIGH
- `27` = ISA_NOT_AVAIL_SPEED_TOO_ LOW
- `28` = CC_NOT_AVAIL_ABOVE_MAX_SPD
- `29` = NEUTRAL_WARNING

### idx 569 - ENGINE9.EEDWS_Warning (0x226)
- `0` = No_Warning
- `1` = WarningLevel_1
- `2` = WarningLevel_2
- `3` = WarningLevel_3
- `4` = WarningLevel_4
- `5` = WarningLevel_5
- `6` = WarningLevel_6
- `7` = Not_Used1
- `8` = Not_Used2
- `9` = Not_Used3
- `10` = Not_Used4
- `11` = Not_Used5
- `12` = Not_Used6
- `13` = Not_Used7
- `14` = Not_Used8
- `15` = SNA

### idx 570 - ENGINE9.PwrLimActv (0x226)
- `0` = false
- `1` = true

### idx 571 - ENGINE9.PwrLimActvPopUp (0x226)
- `0` = false
- `1` = true

### idx 572 - ENGINE9.ReagentWarningConsReq (0x226)
- `0` = No_Warning
- `1` = WarningLevel_1
- `2` = WarningLevel_2
- `3` = WarningLevel_3
- `4` = WarningLevel_4
- `5` = WarningLevel_5
- `6` = WarningLevel_6
- `7` = WarningLevel_7
- `8` = WarningLevel_8
- `9` = WarningLevel_9
- `10` = Not_Used
- `11` = Not_Used
- `12` = Not_Used
- `13` = Not_Used
- `14` = Not_Used
- `15` = SNA

### idx 573 - ENGINE9.ReagentWarningEmissionReq (0x226)
- `0` = No warning
- `1` = WarningLevel_1
- `2` = WarningLevel_2
- `3` = WarningLevel_3
- `4` = WarningLevel_4
- `5` = WarningLevel_5
- `6` = WarningLevel_6
- `7` = WarningLevel_7
- `8` = WarningLevel_8
- `9` = WarningLevel_9
- `10` = Not_Used
- `11` = Not_Used
- `12` = Not_Used
- `13` = Not_Used
- `14` = Not_Used
- `15` = SNA

### idx 574 - ENGINE9.ReagentWarningLevelReq (0x226)
- `0` = No_Warning
- `1` = WarningLevel_1
- `2` = WarningLevel_2
- `3` = WarningLevel_3
- `4` = WarningLevel_4
- `5` = WarningLevel_5
- `6` = WarningLevel_6
- `7` = WarningLevel_7
- `8` = WarningLevel_8
- `9` = WarningLevel_9
- `10` = Not_Used
- `11` = Not_Used
- `12` = Not_Used
- `13` = Not_Used
- `14` = Not_Used
- `15` = SNA

### idx 575 - ENGINE9.ReagentWarningQualityReq (0x226)
- `0` = No_Warning
- `1` = WarningLevel_1
- `2` = WarningLevel_2
- `3` = WarningLevel_3
- `4` = WarningLevel_4
- `5` = WarningLevel_5
- `6` = WarningLevel_6
- `7` = WarningLevel_7
- `8` = WarningLevel_8
- `9` = WarningLevel_9
- `10` = Not_Used
- `11` = Not_Used
- `12` = Not_Used
- `13` = Not_Used
- `14` = Not_Used
- `15` = SNA

### idx 576 - ENGINE9.SCRsystemFault (0x226)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 577 - ENGINE9.SpStIndRq (0x226)
- `0` = Not_Active
- `1` = Active

### idx 578 - ENGINE9.SpStSwStat (0x226)
- `0` = OFF
- `1` = CONT
- `2` = BLINK
- `3` = SNA

### idx 579 - ENGINE9.SpStWarnStat (0x226)
- `0` = NONE
- `1` = PCR_Open
- `2` = START
- `3` = ACTIVE
- `4` = D_OR_SB
- `5` = D_AND_SB
- `6` = DR_INHIB
- `7` = TX_INHIB
- `8` = KEY
- `9` = BATT
- `10` = SYSFLT
- `11` = PRK_BRK_INHIB
- `12` = HOOD_INHIB
- `13` = PSG_DR_INHIB
- `14` = PARK_INHIB
- `15` = SNA

### idx 580 - EXTERNAL_LIGHTS.HighBeamSts (0x73E)
- `0` = OFF
- `1` = ON

### idx 581 - EXTERNAL_LIGHTS.LHParkingLightSts (0x73E)
- `0` = OFF
- `1` = ON

### idx 582 - EXTERNAL_LIGHTS.LHTurnLightFault (0x73E)
- `0` = False
- `1` = True

### idx 583 - EXTERNAL_LIGHTS.LHTurnSignalSts (0x73E)
- `0` = OFF
- `1` = ON

### idx 584 - EXTERNAL_LIGHTS.ParkingLightFault (0x73E)
- `0` = False
- `1` = True

### idx 585 - EXTERNAL_LIGHTS.RHParkingLightSts (0x73E)
- `0` = OFF
- `1` = ON

### idx 586 - EXTERNAL_LIGHTS.RHTurnLightFault (0x73E)
- `0` = False
- `1` = True

### idx 587 - EXTERNAL_LIGHTS.RHTurnSignalSts (0x73E)
- `0` = OFF
- `1` = ON

### idx 588 - EXTERNAL_LIGHTS.StopLightFault (0x73E)
- `0` = False
- `1` = True

### idx 589 - EXTERNAL_LIGHTS.StopLightSts (0x73E)
- `0` = OFF
- `1` = ON

### idx 591 - FCPS_DATA1.H2ConsumptionFailSts (0x433)
- `0` = FailNotPresent
- `1` = FailPresent

### idx 593 - FCPS_DATA2.FCPSAlarmFCPSNotAvailable (0x354)
- `0` = NotActive
- `1` = Active

### idx 594 - FCPS_DATA2.FCPSAlarmHydroneLVL (0x354)
- `0` = NotActive
- `1` = Active

### idx 595 - FCPS_DATA2.H2_Refuel_Sts (0x354)
- `0` = True
- `1` = False

### idx 597 - FCPS_DATA2.PowerModeSts_FCPS (0x354)
- `0` = Standard_Power
- `1` = Logistic_Mode_ON
- `2` = Logistic_Mode_PR

### idx 598 - FCPS_DATA2.RefuelIndicationType (0x354)
- `0` = NoIndication
- `1` = FCPSTextReadyForRefuelling
- `2` = FCPSTextWaitForRefuelling
- `3` = FCPSTextNoRefuellingProcedure
- `4` = FCPSTextNoRefuellingService
- `5` = FCPSTextCloseFuelFlap
- `6` = PressureIncreased

### idx 600 - GE.ElectricSteeringFailSts (0xDE)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 601 - GE.LwsAngle (0xDE)
- `65535` = SNA

### idx 602 - GE.LwsCalibration (0xDE)
- `0` = Not_calibrated
- `1` = Calibrated

### idx 603 - GE.LWSFailSts (0xDE)
- `0` = Fail_not_Present
- `1` = Fail_Present_Ignition_Latched
- `2` = Fail_Present_Recoverable
- `3` = Fail_Present_Battery_Disconnection

### idx 604 - GE.LwsSpeed (0xDE)
- `4095` = SNA

### idx 606 - GPS_POS3.GPS_POS3_Date_Day (0x768)
- `255` = SNA

### idx 607 - GPS_POS3.GPS_POS3_Date_Hour (0x768)
- `255` = SNA

### idx 608 - GPS_POS3.GPS_POS3_Date_Minutes (0x768)
- `255` = SNA

### idx 609 - GPS_POS3.GPS_POS3_Date_Month (0x768)
- `255` = SNA

### idx 610 - GPS_POS3.GPS_POS3_Date_Seconds (0x768)
- `65535` = SNA

### idx 611 - GPS_POS3.GPS_POS3_Date_Year (0x768)
- `65535` = SNA

### idx 612 - HCP_1.AHCP_Comm_Fail_CANC2 (0x2BD)
- `0` = No_Fault
- `1` = LoC_BSM
- `3` = BusFailure_CANC2

### idx 613 - HCP_1.Drive_Mode_Inhibit (0x2BD)
- `0` = False
- `1` = True

### idx 614 - HCP_1.Est_Range_Trend (0x2BD)
- `0` = Default
- `1` = Dash
- `2` = Arrow_Up
- `3` = Arrow_Down

### idx 615 - HCP_1.HCP_Sch_PreCondition_Sts (0x2BD)
- `0` = False
- `1` = True
- `3` = SNA

### idx 616 - HCP_1.HCPPopUpMessage17 (0x2BD)
- `0` = False
- `1` = True

### idx 617 - HCP_1.HEV_LMP_RQ (0x2BD)
- `0` = OFF
- `1` = ON
- `2` = BLINK
- `3` = SNA

### idx 618 - HCP_1.PSActive (0x2BD)
- `0` = Not_Active
- `1` = Active

### idx 619 - HCP_1.R134a_PressSts (0x2BD)
- `511` = SNA

### idx 620 - HCP_1.Regen_Status (0x2BD)
- `0` = Not_Available
- `1` = Level1
- `2` = Level2
- `3` = Level3
- `4` = Level4
- `5` = Level5
- `6` = Level0
- `7` = SNA

### idx 621 - HCP_1.TurtleModeSts (0x2BD)
- `0` = No_Turtle_Mode
- `1` = Turtle_Level1
- `2` = Turtle_Level2
- `3` = Turtle_Level3
- `4` = Turtle_Level4
- `7` = SNA

### idx 622 - HCP_1.VehSpd_Overridden (0x2BD)
- `0` = No_Request
- `1` = HMI_PopUp_Camel
- `2` = HMI_Telltale_Camel
- `3` = HMI_PopUp_Turtle
- `4` = HMI_Telltale_Turtle

### idx 623 - HCP_1000.Cabin_Condition_Sts (0x561)
- `0` = Default
- `1` = Rejected_not_plugged_in
- `2` = Stopped_due_to_SOC
- `3` = On
- `4` = Cabin_Set_Pt_Reached
- `5` = Off
- `6` = Failed_Other_Than_HV_Bat_Temp
- `7` = Failed_HV_Bat_Temp
- `8` = Bat_Cond _complete
- `9` = Bat_Cond_Stp_Bfr_Cmpl_HVBat_NOK
- `15` = SNA

### idx 624 - HCP_1000.CabinPreCondReqStat (0x561)
- `0` = DEFAULT
- `1` = PRE
- `2` = SPR
- `3` = PRE_OFF
- `4` = PRF
- `5` = NOT_OK
- `6` = BCC
- `7` = BCS
- `8` = STOPPED_DUE_TO_SOC
- `9` = REJECTED_NOT_PLUGGED_IN
- `15` = SNA

### idx 625 - HCP_1000.ChargingLevel (0x561)
- `0` = Default_NoLevel
- `1` = Level_1_AC
- `2` = Level_2_AC
- `3` = Level_3_AC
- `4` = Level_1_DC
- `5` = Level_2_DC
- `6` = PlugInNotDet
- `7` = PPI_1_No_Drive
- `8` = PPI_2_OK_Drive
- `15` = SNA

### idx 626 - HCP_1000.ChargingSysSts (0x561)
- `0` = NotCharging
- `1` = Charging
- `2` = ChargeInterrupted
- `3` = ChargeComplete
- `7` = SNA

### idx 627 - HCP_1000.ChrgSysFault (0x561)
- `0` = Not_Faulted
- `1` = Faulted

### idx 628 - HCP_1000.CompStat (0x561)
- `0` = NormalOperation
- `1` = DegradedOperation
- `2` = Inoperative
- `3` = Reserved1
- `4` = Reserved2
- `5` = Reserved3
- `6` = Reserved4
- `15` = SNA

### idx 629 - HCP_1000.DriveReady (0x561)
- `0` = Default
- `1` = Vehicle is allowed to shift out of park or neutral

### idx 630 - HCP_1000.EstTimeofChrg_Lv1 (0x561)
- `8191` = SNA

### idx 631 - HCP_1000.EstTimeofChrg_Lv2 (0x561)
- `2047` = SNA

### idx 632 - HCP_1000.HtrCoreInletTemp (0x561)
- `255` = SNA

### idx 633 - HCP_1000.HVBatCntctrStat (0x561)
- `0` = Open
- `1` = Precharging
- `2` = Closed
- `3` = Precharge_Failed
- `4` = Precharge_Inhibited
- `7` = SNA

### idx 634 - HCP_1000.MIL_OnRq_BPCM (0x561)
- `0` = False
- `1` = True

### idx 635 - HCP_1000.PrplsnSysAtv (0x561)
- `0` = Not_Active
- `1` = Active

### idx 636 - HCP_1000.Service_Battery_Recharge_FailSts (0x561)
- `0` = Recharge_Fail
- `1` = Recharge_Not_In_Fail

### idx 637 - HCP_2.ElecCoolantHtrPwr (0x562)
- `255` = SNA

### idx 638 - HCP_2.FRfShVlvSts (0x562)
- `0` = Open
- `1` = Closed

### idx 639 - HCP_2.HTAuxPmpRPMAct (0x562)
- `255` = SNA

### idx 640 - HCP_2.HVBatCritCondT (0x562)
- `0` = False
- `1` = True

### idx 641 - HCP_3.HVBatCntctrOpn (0x591)
- `0` = False
- `1` = True

### idx 642 - HCP_3.HVBatCntctrReq (0x591)
- `0` = False
- `1` = True

### idx 643 - HCP_3.HVBatFull_Amp_Hr_Capacity (0x591)
- `2047` = SNA

### idx 644 - HCP_3.HVBatFull_Amp_Hr_Capacity_V (0x591)
- `0` = Valid
- `1` = Not_Valid

### idx 645 - HCP_3.HVBatSOH (0x591)
- `255` = SNA

### idx 646 - HCP_3.HVBatSOHLow (0x591)
- `255` = SNA

### idx 647 - HCP_3.HVBatteryVoltage_BEV (0x591)
- `8191` = SNA

### idx 649 - HCP_4.BatPwrUsg_V (0x415)
- `0` = Valid
- `1` = Invalid

### idx 651 - HCP_4.BatPwrUsgDisp_V (0x415)
- `0` = Valid
- `1` = Invalid

### idx 653 - HCP_4.MtrPwrUsgDisp_V (0x415)
- `0` = Valid
- `1` = Invalid

### idx 655 - HCP_C1.HCPCoachDispV (0x28E)
- `0` = Valid
- `1` = Invalid

### idx 657 - HCP_C1.HCPOutputPwrV (0x28E)
- `0` = Valid
- `1` = Invalid

### idx 658 - HCP_C1.HCPPopUpMessage1 (0x28E)
- `0` = False
- `1` = True

### idx 659 - HCP_C1.HCPPopUpMessage10 (0x28E)
- `0` = False
- `1` = True

### idx 660 - HCP_C1.HCPPopUpMessage11 (0x28E)
- `0` = False
- `1` = True

### idx 661 - HCP_C1.HCPPopUpMessage13 (0x28E)
- `0` = False
- `1` = True

### idx 662 - HCP_C1.HCPPopUpMessage14 (0x28E)
- `0` = False
- `1` = True

### idx 663 - HCP_C1.HCPPopUpMessage15 (0x28E)
- `0` = False
- `1` = True

### idx 664 - HCP_C1.HCPPopUpMessage2 (0x28E)
- `0` = False
- `1` = True

### idx 665 - HCP_C1.HCPPopUpMessage3 (0x28E)
- `0` = False
- `1` = True

### idx 666 - HCP_C1.HCPPopUpMessage4 (0x28E)
- `0` = False
- `1` = True

### idx 667 - HCP_C1.HCPPopUpMessage5 (0x28E)
- `0` = False
- `1` = True

### idx 668 - HCP_C1.HCPPopUpMessage6 (0x28E)
- `0` = False
- `1` = True

### idx 669 - HCP_C1.HCPPopUpMessage7 (0x28E)
- `0` = False
- `1` = True

### idx 670 - HCP_C1.HCPPopUpMessage9 (0x28E)
- `0` = False
- `1` = True

### idx 671 - HCP_C1.MIL_OnRq_HCP (0x28E)
- `0` = Not_Active
- `1` = Active

### idx 672 - HCP_C1.ThermalRunaway_LampReq (0x28E)
- `0` = Not_Active
- `1` = Active

### idx 673 - HCP_ClimateSchedule1.AllowClimateSchd1_Sts (0x5EE)
- `0` = Any_Time 
- `1` = Plugged_In_Only
- `2` = Plugged_In_and_In_Charge_Schd
- `3` = SNA

### idx 674 - HCP_ClimateSchedule1.Climate_Cabin_Temp1_Sts (0x5EE)
- `31` = SNA

### idx 675 - HCP_ClimateSchedule1.ClimateSchd1_Day_Sts (0x5EE)
- `0` = No Selection
- `1` = M
- `2` = T
- `3` = TM
- `4` = W
- `5` = WM
- `6` = WT
- `7` = WTM
- `8` = Th
- `9` = ThM
- `10` = ThT
- `11` = ThTM
- `12` = ThW
- `13` = ThWM
- `14` = ThWT
- `15` = ThWTM
- `16` = F
- `17` = FM
- `18` = FT
- `19` = FTM
- `20` = FW
- `21` = FWM
- `22` = FWT
- `23` = FWTM
- `24` = FTh
- `25` = FThM
- `26` = FThT
- `27` = FThTM
- `28` = FThW
- `29` = FThWM
- `30` = FThWT
- `31` = FThWTM
- `32` = S
- `33` = SM
- `34` = ST
- `35` = STM
- `36` = SW
- `37` = SWM
- `38` = SWT
- `39` = SWTM
- `40` = STh
- `41` = SThM
- `42` = SThT
- `43` = SThTM
- `44` = SThW
- `45` = SThWM
- `46` = SThWT
- `47` = SThWTM
- `48` = SF
- `49` = SFM
- `50` = SFT
- `51` = SFTM
- `52` = SFW
- `53` = SFWM
- `54` = SFWT
- `55` = SFWTM
- `56` = SFTh
- `57` = SFThM
- `58` = SFThT
- `59` = SFThTM
- `60` = SFThW
- `61` = SFThWM
- `62` = SFThWT
- `63` = SFThWTM
- `64` = Su
- `65` = SuM
- `66` = SuT
- `67` = SuTM
- `68` = SuW
- `69` = SuWM
- `70` = SuWT
- `71` = SuWTM
- `72` = SuTh
- `73` = SuThM
- `74` = SuThT
- `75` = SuThTM
- `76` = SuThW
- `77` = SuThWM
- `78` = SuThWT
- `79` = SuThWTM
- `80` = SuF
- `81` = SuFM
- `82` = SuFT
- `83` = SuFTM
- `84` = SuFW
- `85` = SuFWM
- `86` = SuFWT
- `87` = SuFWTM
- `88` = SuFTh
- `89` = SuFThM
- `90` = SuFThT
- `91` = SuFThTM
- `92` = SuFThW
- `93` = SuFThWM
- `94` = SuFThWT
- `95` = SuFThWTM
- `96` = SuS
- `97` = SuSM
- `98` = SuST
- `99` = SuSTM
- `100` = SuSW
- `101` = SuSWM
- `102` = SuSWT
- `103` = SuSWTM
- `104` = SuSTh
- `105` = SuSThM
- `106` = SuSThT
- `107` = SuSThTM
- `108` = SuSThW
- `109` = SuSThWM
- `110` = SuSThWT
- `111` = SuSThWTM
- `112` = SuSF
- `113` = SuSFM
- `114` = SuSFT
- `115` = SuSFTM
- `116` = SuSFW
- `117` = SuSFWM
- `118` = SuSFWT
- `119` = SuSFWTM
- `120` = SuSFTh
- `121` = SuSFThM
- `122` = SuSFThT
- `123` = SuSFThTM
- `124` = SuSFThW
- `125` = SuSFThWM
- `126` = SuSFThWT
- `127` = SuSFThWTM
- `255` = SNA

### idx 676 - HCP_ClimateSchedule1.ClimateSchd1_Departure_Hr_Sts (0x5EE)
- `31` = SNA

### idx 677 - HCP_ClimateSchedule1.ClimateSchd1_Departure_Min_Sts (0x5EE)
- `15` = SNA

### idx 678 - HCP_ClimateSchedule1.Enable_ClimateSchd1_Sts (0x5EE)
- `0` = Disable
- `1` = Enable

### idx 679 - HCP_ClimateSchedule2.AllowClimateSchd2_Sts (0x5EF)
- `0` = Any_Time 
- `1` = Plugged_In_Only
- `2` = Plugged_In_and_In_Charge_Schd
- `3` = SNA

### idx 680 - HCP_ClimateSchedule2.Climate_Cabin_Temp2_Sts (0x5EF)
- `31` = SNA

### idx 681 - HCP_ClimateSchedule2.ClimateSchd2_Day_Sts (0x5EF)
- `0` = No Selection
- `1` = M
- `2` = T
- `3` = TM
- `4` = W
- `5` = WM
- `6` = WT
- `7` = WTM
- `8` = Th
- `9` = ThM
- `10` = ThT
- `11` = ThTM
- `12` = ThW
- `13` = ThWM
- `14` = ThWT
- `15` = ThWTM
- `16` = F
- `17` = FM
- `18` = FT
- `19` = FTM
- `20` = FW
- `21` = FWM
- `22` = FWT
- `23` = FWTM
- `24` = FTh
- `25` = FThM
- `26` = FThT
- `27` = FThTM
- `28` = FThW
- `29` = FThWM
- `30` = FThWT
- `31` = FThWTM
- `32` = S
- `33` = SM
- `34` = ST
- `35` = STM
- `36` = SW
- `37` = SWM
- `38` = SWT
- `39` = SWTM
- `40` = STh
- `41` = SThM
- `42` = SThT
- `43` = SThTM
- `44` = SThW
- `45` = SThWM
- `46` = SThWT
- `47` = SThWTM
- `48` = SF
- `49` = SFM
- `50` = SFT
- `51` = SFTM
- `52` = SFW
- `53` = SFWM
- `54` = SFWT
- `55` = SFWTM
- `56` = SFTh
- `57` = SFThM
- `58` = SFThT
- `59` = SFThTM
- `60` = SFThW
- `61` = SFThWM
- `62` = SFThWT
- `63` = SFThWTM
- `64` = Su
- `65` = SuM
- `66` = SuT
- `67` = SuTM
- `68` = SuW
- `69` = SuWM
- `70` = SuWT
- `71` = SuWTM
- `72` = SuTh
- `73` = SuThM
- `74` = SuThT
- `75` = SuThTM
- `76` = SuThW
- `77` = SuThWM
- `78` = SuThWT
- `79` = SuThWTM
- `80` = SuF
- `81` = SuFM
- `82` = SuFT
- `83` = SuFTM
- `84` = SuFW
- `85` = SuFWM
- `86` = SuFWT
- `87` = SuFWTM
- `88` = SuFTh
- `89` = SuFThM
- `90` = SuFThT
- `91` = SuFThTM
- `92` = SuFThW
- `93` = SuFThWM
- `94` = SuFThWT
- `95` = SuFThWTM
- `96` = SuS
- `97` = SuSM
- `98` = SuST
- `99` = SuSTM
- `100` = SuSW
- `101` = SuSWM
- `102` = SuSWT
- `103` = SuSWTM
- `104` = SuSTh
- `105` = SuSThM
- `106` = SuSThT
- `107` = SuSThTM
- `108` = SuSThW
- `109` = SuSThWM
- `110` = SuSThWT
- `111` = SuSThWTM
- `112` = SuSF
- `113` = SuSFM
- `114` = SuSFT
- `115` = SuSFTM
- `116` = SuSFW
- `117` = SuSFWM
- `118` = SuSFWT
- `119` = SuSFWTM
- `120` = SuSFTh
- `121` = SuSFThM
- `122` = SuSFThT
- `123` = SuSFThTM
- `124` = SuSFThW
- `125` = SuSFThWM
- `126` = SuSFThWT
- `127` = SuSFThWTM
- `255` = SNA

### idx 682 - HCP_ClimateSchedule2.ClimateSchd2_Departure_Hr_Sts (0x5EF)
- `31` = SNA

### idx 683 - HCP_ClimateSchedule2.ClimateSchd2_Departure_Min_Sts (0x5EF)
- `15` = SNA

### idx 684 - HCP_ClimateSchedule2.Enable_ClimateSchd2_Sts (0x5EF)
- `0` = Disable
- `1` = Enable

### idx 686 - HCP_DISP.BatPwrUsageDisp_V (0x36E)
- `0` = Valid
- `1` = Not_Valid

### idx 688 - HCP_DISP.EngPwrUsageDisp_V (0x36E)
- `0` = Valid
- `1` = Not_Valid

### idx 690 - HCP_DISP.HVACPwrUsageDisp_V (0x36E)
- `0` = Valid
- `1` = Not_Valid

### idx 692 - HCP_DISP.HVBatSOCV_HCP (0x36E)
- `0` = Valid
- `1` = Not_Valid

### idx 694 - HCP_DISP.MtrPwrUsageDisp_V (0x36E)
- `0` = Valid
- `1` = Not_Valid

### idx 696 - HCP_DISP2.Est_Range_BEV (0x63E)
- `2047` = SNA

### idx 697 - HCP_DISP2.Est_Range_ChrgStopTime (0x63E)
- `2047` = SNA

### idx 698 - HCP_DISP2.EstTimeofChrg_DC_Fast_100 (0x63E)
- `511` = SNA

### idx 699 - HCP_DISP2.EstTimeofChrg_DC_Fast_80 (0x63E)
- `511` = SNA

### idx 700 - HCP_DISP3.AutonomyFailSts (0x434)
- `0` = FailNotPresent
- `1` = FailPresent

### idx 702 - HCP_DISP3.FCPSPowerUseDisplay (0x434)
- `255` = SNA

### idx 703 - HCP_DISP3.FCPSPowerUseDisplayV (0x434)
- `0` = Valid
- `1` = NotValid

### idx 704 - HCP_DISP3.FCVLowBatteryLowPerf (0x434)
- `0` = NotActive
- `1` = Active

### idx 705 - HCP_DISP3.HydrogenTankLevel (0x434)
- `1023` = SNA

### idx 706 - HCP_DISP3.HydrogenTankLevelFailSts (0x434)
- `0` = FailNotPresent
- `1` = FailPresent

### idx 707 - HCP_Schedule1.ChargeUntilFull1_Sts (0x5B9)
- `0` = Charge Until Full Not selected
- `1` = Charge Until Full

### idx 708 - HCP_Schedule1.End_Time_Hr1_Sts (0x5B9)
- `31` = SNA

### idx 709 - HCP_Schedule1.End_Time_Min1_Sts (0x5B9)
- `15` = SNA

### idx 710 - HCP_Schedule1.SchCond_Time_Till_Dep (0x5B9)
- `127` = SNA

### idx 711 - HCP_Schedule1.Schedule_Confirmed1 (0x5B9)
- `0` = Disable
- `1` = Enable

### idx 712 - HCP_Schedule1.Schedule_Day1_Sts (0x5B9)
- `0` = No Selection
- `1` = M
- `2` = T
- `3` = TM
- `4` = W
- `5` = WM
- `6` = WT
- `7` = WTM
- `8` = Th
- `9` = ThM
- `10` = ThT
- `11` = ThTM
- `12` = ThW
- `13` = ThWM
- `14` = ThWT
- `15` = ThWTM
- `16` = F
- `17` = FM
- `18` = FT
- `19` = FTM
- `20` = FW
- `21` = FWM
- `22` = FWT
- `23` = FWTM
- `24` = FTh
- `25` = FThM
- `26` = FThT
- `27` = FThTM
- `28` = FThW
- `29` = FThWM
- `30` = FThWT
- `31` = FThWTM
- `32` = S
- `33` = SM
- `34` = ST
- `35` = STM
- `36` = SW
- `37` = SWM
- `38` = SWT
- `39` = SWTM
- `40` = STh
- `41` = SThM
- `42` = SThT
- `43` = SThTM
- `44` = SThW
- `45` = SThWM
- `46` = SThWT
- `47` = SThWTM
- `48` = SF
- `49` = SFM
- `50` = SFT
- `51` = SFTM
- `52` = SFW
- `53` = SFWM
- `54` = SFWT
- `55` = SFWTM
- `56` = SFTh
- `57` = SFThM
- `58` = SFThT
- `59` = SFThTM
- `60` = SFThW
- `61` = SFThWM
- `62` = SFThWT
- `63` = SFThWTM
- `64` = Sa
- `65` = SaM
- `66` = SaT
- `67` = SaTM
- `68` = SaW
- `69` = SaWM
- `70` = SaWT
- `71` = SaWTM
- `72` = SaTh
- `73` = SaThM
- `74` = SaThT
- `75` = SaThTM
- `76` = SaThW
- `77` = SaThWM
- `78` = SaThWT
- `79` = SaThWTM
- `80` = SaF
- `81` = SaFM
- `82` = SaFT
- `83` = SaFTM
- `84` = SaFW
- `85` = SaFWM
- `86` = SaFWT
- `87` = SaFWTM
- `88` = SaFTh
- `89` = SaFThM
- `90` = SaFThT
- `91` = SaFThTM
- `92` = SaFThW
- `93` = SaFThWM
- `94` = SaFThWT
- `95` = SaFThWTM
- `96` = SaS
- `97` = SaSM
- `98` = SaST
- `99` = SaSTM
- `100` = SaSW
- `101` = SaSWM
- `102` = SaSWT
- `103` = SaSWTM
- `104` = SaSTh
- `105` = SaSThM
- `106` = SaSThT
- `107` = SaSThTM
- `108` = SaSThW
- `109` = SaSThWM
- `110` = SaSThWT
- `111` = SaSThWTM
- `112` = SaSF
- `113` = SaSFM
- `114` = SaSFT
- `115` = SaSFTM
- `116` = SaSFW
- `117` = SaSFWM
- `118` = SaSFWT
- `119` = SaSFWTM
- `120` = SaSFTh
- `121` = SaSFThM
- `122` = SaSFThT
- `123` = SaSFThTM
- `124` = SaSFThW
- `125` = SaSFThWM
- `126` = SaSFThWT
- `127` = SaSFThWTM
- `255` = SNA

### idx 713 - HCP_Schedule1.Start_Time_Hr1_Sts (0x5B9)
- `31` = SNA

### idx 714 - HCP_Schedule1.Start_Time_Min1_Sts (0x5B9)
- `15` = SNA

### idx 715 - HCP_Schedule2.ChargeUntilFull2_Sts (0x5BA)
- `0` = Charge Until Full Not selected
- `1` = Charge Until Full

### idx 716 - HCP_Schedule2.End_Time_Hr2_Sts (0x5BA)
- `31` = SNA

### idx 717 - HCP_Schedule2.End_Time_Min2_Sts (0x5BA)
- `15` = SNA

### idx 718 - HCP_Schedule2.Schedule_Confirmed2 (0x5BA)
- `0` = Disable
- `1` = Enable

### idx 719 - HCP_Schedule2.Schedule_Day2_Sts (0x5BA)
- `0` = No Selection
- `1` = M
- `2` = T
- `3` = TM
- `4` = W
- `5` = WM
- `6` = WT
- `7` = WTM
- `8` = Th
- `9` = ThM
- `10` = ThT
- `11` = ThTM
- `12` = ThW
- `13` = ThWM
- `14` = ThWT
- `15` = ThWTM
- `16` = F
- `17` = FM
- `18` = FT
- `19` = FTM
- `20` = FW
- `21` = FWM
- `22` = FWT
- `23` = FWTM
- `24` = FTh
- `25` = FThM
- `26` = FThT
- `27` = FThTM
- `28` = FThW
- `29` = FThWM
- `30` = FThWT
- `31` = FThWTM
- `32` = S
- `33` = SM
- `34` = ST
- `35` = STM
- `36` = SW
- `37` = SWM
- `38` = SWT
- `39` = SWTM
- `40` = STh
- `41` = SThM
- `42` = SThT
- `43` = SThTM
- `44` = SThW
- `45` = SThWM
- `46` = SThWT
- `47` = SThWTM
- `48` = SF
- `49` = SFM
- `50` = SFT
- `51` = SFTM
- `52` = SFW
- `53` = SFWM
- `54` = SFWT
- `55` = SFWTM
- `56` = SFTh
- `57` = SFThM
- `58` = SFThT
- `59` = SFThTM
- `60` = SFThW
- `61` = SFThWM
- `62` = SFThWT
- `63` = SFThWTM
- `64` = Sa
- `65` = SaM
- `66` = SaT
- `67` = SaTM
- `68` = SaW
- `69` = SaWM
- `70` = SaWT
- `71` = SaWTM
- `72` = SaTh
- `73` = SaThM
- `74` = SaThT
- `75` = SaThTM
- `76` = SaThW
- `77` = SaThWM
- `78` = SaThWT
- `79` = SaThWTM
- `80` = SaF
- `81` = SaFM
- `82` = SaFT
- `83` = SaFTM
- `84` = SaFW
- `85` = SaFWM
- `86` = SaFWT
- `87` = SaFWTM
- `88` = SaFTh
- `89` = SaFThM
- `90` = SaFThT
- `91` = SaFThTM
- `92` = SaFThW
- `93` = SaFThWM
- `94` = SaFThWT
- `95` = SaFThWTM
- `96` = SaS
- `97` = SaSM
- `98` = SaST
- `99` = SaSTM
- `100` = SaSW
- `101` = SaSWM
- `102` = SaSWT
- `103` = SaSWTM
- `104` = SaSTh
- `105` = SaSThM
- `106` = SaSThT
- `107` = SaSThTM
- `108` = SaSThW
- `109` = SaSThWM
- `110` = SaSThWT
- `111` = SaSThWTM
- `112` = SaSF
- `113` = SaSFM
- `114` = SaSFT
- `115` = SaSFTM
- `116` = SaSFW
- `117` = SaSFWM
- `118` = SaSFWT
- `119` = SaSFWTM
- `120` = SaSFTh
- `121` = SaSFThM
- `122` = SaSFThT
- `123` = SaSFThTM
- `124` = SaSFThW
- `125` = SaSFThWM
- `126` = SaSFThWT
- `127` = SaSFThWTM
- `255` = SNA

### idx 720 - HCP_Schedule2.Start_Time_Hr2_Sts (0x5BA)
- `31` = SNA

### idx 721 - HCP_Schedule2.Start_Time_Min2_Sts (0x5BA)
- `15` = SNA

### idx 722 - HCP_ScheduleNext.Next_Charge_End_Time_Hr (0x730)
- `0` = Hour_0
- `1` = Hour_1
- `2` = Hour_2
- `3` = Hour_3
- `4` = Hour_4
- `5` = Hour_5
- `6` = Hour_6
- `7` = Hour_7
- `8` = Hour_8
- `9` = Hour_9
- `10` = Hour_10
- `11` = Hour_11
- `12` = Hour_12
- `13` = Hour_13
- `14` = Hour_14
- `15` = Hour_15
- `16` = Hour_16
- `17` = Hour_17
- `18` = Hour_18
- `19` = Hour_19
- `20` = Hour_20
- `21` = Hour_21
- `22` = Hour_22
- `23` = Hour_23
- `25` = Charge_Until_Full
- `31` = SNA

### idx 723 - HCP_ScheduleNext.Next_Charge_End_Time_Min (0x730)
- `15` = SNA

### idx 724 - HCP_ScheduleNext.Next_Charge_EndDay (0x730)
- `0` = No_Selection
- `1` = M
- `2` = T
- `3` = W
- `4` = Th
- `5` = F
- `6` = Sa
- `7` = S
- `15` = SNA

### idx 725 - HCP_ScheduleNext.Next_Charge_Start_Time_Hr (0x730)
- `31` = SNA

### idx 726 - HCP_ScheduleNext.Next_Charge_Start_Time_Min (0x730)
- `15` = SNA

### idx 727 - HCP_ScheduleNext.Next_Charge_StartDay (0x730)
- `0` = No_Selection
- `1` = M
- `2` = T
- `3` = W
- `4` = Th
- `5` = F
- `6` = Sa
- `7` = S
- `9` = No_Schedule_Set
- `15` = SNA

### idx 728 - HCP_ScheduleNext.Next_Climate_Day (0x730)
- `0` = No_Selection
- `1` = M
- `2` = T
- `3` = W
- `4` = Th
- `5` = F
- `6` = Sa
- `7` = S
- `9` = No_Schedule_Set
- `15` = SNA

### idx 729 - HCP_ScheduleNext.Next_Climate_Time_Hr (0x730)
- `25` = Charge_Until_Full
- `31` = SNA

### idx 730 - HCP_ScheduleNext.Next_Climate_Time_Min (0x730)
- `15` = SNA

### idx 731 - HCP_TORQ_STATUS.CRC_123h (0x110)
- `255` = SNA

### idx 732 - HCP_TORQ_STATUS.M_MAX_AXLE (0x110)
- `8191` = SNA

### idx 733 - HCP_TORQ_STATUS.M_MIN_AXLE (0x110)
- `8191` = SNA

### idx 752 - HU_ClimateSchedule1.AllowClimateSchd1 (0x5F0)
- `0` = Any_Time 
- `1` = Plugged_In_Only
- `2` = Plugged_In_and_In_Charge_Schd
- `3` = SNA

### idx 753 - HU_ClimateSchedule1.Climate_Cabin_Temp1 (0x5F0)
- `31` = SNA

### idx 754 - HU_ClimateSchedule1.ClimateSchd1_Day (0x5F0)
- `0` = No Selection
- `1` = M
- `2` = T
- `3` = TM
- `4` = W
- `5` = WM
- `6` = WT
- `7` = WTM
- `8` = Th
- `9` = ThM
- `10` = ThT
- `11` = ThTM
- `12` = ThW
- `13` = ThWM
- `14` = ThWT
- `15` = ThWTM
- `16` = F
- `17` = FM
- `18` = FT
- `19` = FTM
- `20` = FW
- `21` = FWM
- `22` = FWT
- `23` = FWTM
- `24` = FTh
- `25` = FThM
- `26` = FThT
- `27` = FThTM
- `28` = FThW
- `29` = FThWM
- `30` = FThWT
- `31` = FThWTM
- `32` = S
- `33` = SM
- `34` = ST
- `35` = STM
- `36` = SW
- `37` = SWM
- `38` = SWT
- `39` = SWTM
- `40` = STh
- `41` = SThM
- `42` = SThT
- `43` = SThTM
- `44` = SThW
- `45` = SThWM
- `46` = SThWT
- `47` = SThWTM
- `48` = SF
- `49` = SFM
- `50` = SFT
- `51` = SFTM
- `52` = SFW
- `53` = SFWM
- `54` = SFWT
- `55` = SFWTM
- `56` = SFTh
- `57` = SFThM
- `58` = SFThT
- `59` = SFThTM
- `60` = SFThW
- `61` = SFThWM
- `62` = SFThWT
- `63` = SFThWTM
- `64` = Su
- `65` = SuM
- `66` = SuT
- `67` = SuTM
- `68` = SuW
- `69` = SuWM
- `70` = SuWT
- `71` = SuWTM
- `72` = SuTh
- `73` = SuThM
- `74` = SuThT
- `75` = SuThTM
- `76` = SuThW
- `77` = SuThWM
- `78` = SuThWT
- `79` = SuThWTM
- `80` = SuF
- `81` = SuFM
- `82` = SuFT
- `83` = SuFTM
- `84` = SuFW
- `85` = SuFWM
- `86` = SuFWT
- `87` = SuFWTM
- `88` = SuFTh
- `89` = SuFThM
- `90` = SuFThT
- `91` = SuFThTM
- `92` = SuFThW
- `93` = SuFThWM
- `94` = SuFThWT
- `95` = SuFThWTM
- `96` = SuS
- `97` = SuSM
- `98` = SuST
- `99` = SuSTM
- `100` = SuSW
- `101` = SuSWM
- `102` = SuSWT
- `103` = SuSWTM
- `104` = SuSTh
- `105` = SuSThM
- `106` = SuSThT
- `107` = SuSThTM
- `108` = SuSThW
- `109` = SuSThWM
- `110` = SuSThWT
- `111` = SuSThWTM
- `112` = SuSF
- `113` = SuSFM
- `114` = SuSFT
- `115` = SuSFTM
- `116` = SuSFW
- `117` = SuSFWM
- `118` = SuSFWT
- `119` = SuSFWTM
- `120` = SuSFTh
- `121` = SuSFThM
- `122` = SuSFThT
- `123` = SuSFThTM
- `124` = SuSFThW
- `125` = SuSFThWM
- `126` = SuSFThWT
- `127` = SuSFThWTM
- `255` = SNA

### idx 755 - HU_ClimateSchedule1.ClimateSchd1_Departure_Hr (0x5F0)
- `31` = SNA

### idx 756 - HU_ClimateSchedule1.ClimateSchd1_Departure_Min (0x5F0)
- `15` = SNA

### idx 757 - HU_ClimateSchedule1.Enable_ClimateSchd1 (0x5F0)
- `0` = Disable_schedule1
- `1` = Enable_schedule1

### idx 758 - HU_ClimateSchedule1.Submit_ClimateSchd1 (0x5F0)
- `0` = No_Change
- `1` = Change_in_schedule1

### idx 759 - HU_ClimateSchedule2.AllowClimateSchd2 (0x5F1)
- `0` = Any_Time 
- `1` = Plugged_In_Only
- `2` = Plugged_In_and_In_Charge_Schd
- `3` = SNA

### idx 760 - HU_ClimateSchedule2.Climate_Cabin_Temp2 (0x5F1)
- `31` = SNA

### idx 761 - HU_ClimateSchedule2.ClimateSchd2_Day (0x5F1)
- `0` = No Selection
- `1` = M
- `2` = T
- `3` = TM
- `4` = W
- `5` = WM
- `6` = WT
- `7` = WTM
- `8` = Th
- `9` = ThM
- `10` = ThT
- `11` = ThTM
- `12` = ThW
- `13` = ThWM
- `14` = ThWT
- `15` = ThWTM
- `16` = F
- `17` = FM
- `18` = FT
- `19` = FTM
- `20` = FW
- `21` = FWM
- `22` = FWT
- `23` = FWTM
- `24` = FTh
- `25` = FThM
- `26` = FThT
- `27` = FThTM
- `28` = FThW
- `29` = FThWM
- `30` = FThWT
- `31` = FThWTM
- `32` = S
- `33` = SM
- `34` = ST
- `35` = STM
- `36` = SW
- `37` = SWM
- `38` = SWT
- `39` = SWTM
- `40` = STh
- `41` = SThM
- `42` = SThT
- `43` = SThTM
- `44` = SThW
- `45` = SThWM
- `46` = SThWT
- `47` = SThWTM
- `48` = SF
- `49` = SFM
- `50` = SFT
- `51` = SFTM
- `52` = SFW
- `53` = SFWM
- `54` = SFWT
- `55` = SFWTM
- `56` = SFTh
- `57` = SFThM
- `58` = SFThT
- `59` = SFThTM
- `60` = SFThW
- `61` = SFThWM
- `62` = SFThWT
- `63` = SFThWTM
- `64` = Su
- `65` = SuM
- `66` = SuT
- `67` = SuTM
- `68` = SuW
- `69` = SuWM
- `70` = SuWT
- `71` = SuWTM
- `72` = SuTh
- `73` = SuThM
- `74` = SuThT
- `75` = SuThTM
- `76` = SuThW
- `77` = SuThWM
- `78` = SuThWT
- `79` = SuThWTM
- `80` = SuF
- `81` = SuFM
- `82` = SuFT
- `83` = SuFTM
- `84` = SuFW
- `85` = SuFWM
- `86` = SuFWT
- `87` = SuFWTM
- `88` = SuFTh
- `89` = SuFThM
- `90` = SuFThT
- `91` = SuFThTM
- `92` = SuFThW
- `93` = SuFThWM
- `94` = SuFThWT
- `95` = SuFThWTM
- `96` = SuS
- `97` = SuSM
- `98` = SuST
- `99` = SuSTM
- `100` = SuSW
- `101` = SuSWM
- `102` = SuSWT
- `103` = SuSWTM
- `104` = SuSTh
- `105` = SuSThM
- `106` = SuSThT
- `107` = SuSThTM
- `108` = SuSThW
- `109` = SuSThWM
- `110` = SuSThWT
- `111` = SuSThWTM
- `112` = SuSF
- `113` = SuSFM
- `114` = SuSFT
- `115` = SuSFTM
- `116` = SuSFW
- `117` = SuSFWM
- `118` = SuSFWT
- `119` = SuSFWTM
- `120` = SuSFTh
- `121` = SuSFThM
- `122` = SuSFThT
- `123` = SuSFThTM
- `124` = SuSFThW
- `125` = SuSFThWM
- `126` = SuSFThWT
- `127` = SuSFThWTM
- `255` = SNA

### idx 762 - HU_ClimateSchedule2.ClimateSchd2_Departure_Hr (0x5F1)
- `31` = SNA

### idx 763 - HU_ClimateSchedule2.ClimateSchd2_Departure_Min (0x5F1)
- `15` = SNA

### idx 764 - HU_ClimateSchedule2.Enable_ClimateSchd2 (0x5F1)
- `0` = Disable_schedule2
- `1` = Enable_schedule2

### idx 765 - HU_ClimateSchedule2.Submit_ClimateSchd2 (0x5F1)
- `0` = No_Change
- `1` = Change_in_schedule2

### idx 766 - HU_Schedule1.ChargeUntilFull1 (0x5B1)
- `0` = Charge Until Full Not selected
- `1` = Charge Until Full

### idx 767 - HU_Schedule1.Enable_Schedule1 (0x5B1)
- `0` = Disable schedule1
- `1` = Enable schedule1

### idx 768 - HU_Schedule1.End_Time_Hr1 (0x5B1)
- `31` = SNA

### idx 769 - HU_Schedule1.End_Time_Min1 (0x5B1)
- `15` = SNA

### idx 770 - HU_Schedule1.Schedule_Day1 (0x5B1)
- `0` = No Selection
- `1` = M
- `2` = T
- `3` = TM
- `4` = W
- `5` = WM
- `6` = WT
- `7` = WTM
- `8` = Th
- `9` = ThM
- `10` = ThT
- `11` = ThTM
- `12` = ThW
- `13` = ThWM
- `14` = ThWT
- `15` = ThWTM
- `16` = F
- `17` = FM
- `18` = FT
- `19` = FTM
- `20` = FW
- `21` = FWM
- `22` = FWT
- `23` = FWTM
- `24` = FTh
- `25` = FThM
- `26` = FThT
- `27` = FThTM
- `28` = FThW
- `29` = FThWM
- `30` = FThWT
- `31` = FThWTM
- `32` = S
- `33` = SM
- `34` = ST
- `35` = STM
- `36` = SW
- `37` = SWM
- `38` = SWT
- `39` = SWTM
- `40` = STh
- `41` = SThM
- `42` = SThT
- `43` = SThTM
- `44` = SThW
- `45` = SThWM
- `46` = SThWT
- `47` = SThWTM
- `48` = SF
- `49` = SFM
- `50` = SFT
- `51` = SFTM
- `52` = SFW
- `53` = SFWM
- `54` = SFWT
- `55` = SFWTM
- `56` = SFTh
- `57` = SFThM
- `58` = SFThT
- `59` = SFThTM
- `60` = SFThW
- `61` = SFThWM
- `62` = SFThWT
- `63` = SFThWTM
- `64` = Sa
- `65` = SaM
- `66` = SaT
- `67` = SaTM
- `68` = SaW
- `69` = SaWM
- `70` = SaWT
- `71` = SaWTM
- `72` = SaTh
- `73` = SaThM
- `74` = SaThT
- `75` = SaThTM
- `76` = SaThW
- `77` = SaThWM
- `78` = SaThWT
- `79` = SaThWTM
- `80` = SaF
- `81` = SaFM
- `82` = SaFT
- `83` = SaFTM
- `84` = SaFW
- `85` = SaFWM
- `86` = SaFWT
- `87` = SaFWTM
- `88` = SaFTh
- `89` = SaFThM
- `90` = SaFThT
- `91` = SaFThTM
- `92` = SaFThW
- `93` = SaFThWM
- `94` = SaFThWT
- `95` = SaFThWTM
- `96` = SaS
- `97` = SaSM
- `98` = SaST
- `99` = SaSTM
- `100` = SaSW
- `101` = SaSWM
- `102` = SaSWT
- `103` = SaSWTM
- `104` = SaSTh
- `105` = SaSThM
- `106` = SaSThT
- `107` = SaSThTM
- `108` = SaSThW
- `109` = SaSThWM
- `110` = SaSThWT
- `111` = SaSThWTM
- `112` = SaSF
- `113` = SaSFM
- `114` = SaSFT
- `115` = SaSFTM
- `116` = SaSFW
- `117` = SaSFWM
- `118` = SaSFWT
- `119` = SaSFWTM
- `120` = SaSFTh
- `121` = SaSFThM
- `122` = SaSFThT
- `123` = SaSFThTM
- `124` = SaSFThW
- `125` = SaSFThWM
- `126` = SaSFThWT
- `127` = SaSFThWTM
- `255` = SNA

### idx 771 - HU_Schedule1.Start_Time_Hr1 (0x5B1)
- `31` = SNA

### idx 772 - HU_Schedule1.Start_Time_Min1 (0x5B1)
- `15` = SNA

### idx 773 - HU_Schedule1.Submit_Schedule1 (0x5B1)
- `0` = No Change
- `1` = Change in schedule 1

### idx 774 - HU_Schedule2.ChargeUntilFull2 (0x5B2)
- `0` = Charge Until Full Not selected
- `1` = Charge Until Full

### idx 775 - HU_Schedule2.Enable_Schedule2 (0x5B2)
- `0` = Disable schedule2
- `1` = Enable schedule2

### idx 776 - HU_Schedule2.End_Time_Hr2 (0x5B2)
- `31` = SNA

### idx 777 - HU_Schedule2.End_Time_Min2 (0x5B2)
- `15` = SNA

### idx 778 - HU_Schedule2.Schedule_Day2 (0x5B2)
- `0` = No Selection
- `1` = M
- `2` = T
- `3` = TM
- `4` = W
- `5` = WM
- `6` = WT
- `7` = WTM
- `8` = Th
- `9` = ThM
- `10` = ThT
- `11` = ThTM
- `12` = ThW
- `13` = ThWM
- `14` = ThWT
- `15` = ThWTM
- `16` = F
- `17` = FM
- `18` = FT
- `19` = FTM
- `20` = FW
- `21` = FWM
- `22` = FWT
- `23` = FWTM
- `24` = FTh
- `25` = FThM
- `26` = FThT
- `27` = FThTM
- `28` = FThW
- `29` = FThWM
- `30` = FThWT
- `31` = FThWTM
- `32` = S
- `33` = SM
- `34` = ST
- `35` = STM
- `36` = SW
- `37` = SWM
- `38` = SWT
- `39` = SWTM
- `40` = STh
- `41` = SThM
- `42` = SThT
- `43` = SThTM
- `44` = SThW
- `45` = SThWM
- `46` = SThWT
- `47` = SThWTM
- `48` = SF
- `49` = SFM
- `50` = SFT
- `51` = SFTM
- `52` = SFW
- `53` = SFWM
- `54` = SFWT
- `55` = SFWTM
- `56` = SFTh
- `57` = SFThM
- `58` = SFThT
- `59` = SFThTM
- `60` = SFThW
- `61` = SFThWM
- `62` = SFThWT
- `63` = SFThWTM
- `64` = Sa
- `65` = SaM
- `66` = SaT
- `67` = SaTM
- `68` = SaW
- `69` = SaWM
- `70` = SaWT
- `71` = SaWTM
- `72` = SaTh
- `73` = SaThM
- `74` = SaThT
- `75` = SaThTM
- `76` = SaThW
- `77` = SaThWM
- `78` = SaThWT
- `79` = SaThWTM
- `80` = SaF
- `81` = SaFM
- `82` = SaFT
- `83` = SaFTM
- `84` = SaFW
- `85` = SaFWM
- `86` = SaFWT
- `87` = SaFWTM
- `88` = SaFTh
- `89` = SaFThM
- `90` = SaFThT
- `91` = SaFThTM
- `92` = SaFThW
- `93` = SaFThWM
- `94` = SaFThWT
- `95` = SaFThWTM
- `96` = SaS
- `97` = SaSM
- `98` = SaST
- `99` = SaSTM
- `100` = SaSW
- `101` = SaSWM
- `102` = SaSWT
- `103` = SaSWTM
- `104` = SaSTh
- `105` = SaSThM
- `106` = SaSThT
- `107` = SaSThTM
- `108` = SaSThW
- `109` = SaSThWM
- `110` = SaSThWT
- `111` = SaSThWTM
- `112` = SaSF
- `113` = SaSFM
- `114` = SaSFT
- `115` = SaSFTM
- `116` = SaSFW
- `117` = SaSFWM
- `118` = SaSFWT
- `119` = SaSFWTM
- `120` = SaSFTh
- `121` = SaSFThM
- `122` = SaSFThT
- `123` = SaSFThTM
- `124` = SaSFThW
- `125` = SaSFThWM
- `126` = SaSFThWT
- `127` = SaSFThWTM
- `255` = SNA

### idx 779 - HU_Schedule2.Start_Time_Hr2 (0x5B2)
- `31` = SNA

### idx 780 - HU_Schedule2.Start_Time_Min2 (0x5B2)
- `15` = SNA

### idx 781 - HU_Schedule2.Submit_Schedule2 (0x5B2)
- `0` = No Change
- `1` = Change in schedule 2

### idx 783 - HV_BATT.HVBatt_NetEnrgy_Consumd_OBM_Trip (0x596)
- `4095` = SNA

### idx 785 - HVAC_STS_HCP.DEFROST_SEL (0x770)
- `0` = Not_Active
- `1` = Active

### idx 786 - HVAC_STS_HCP.DRV_TEMP_DR_POS (0x770)
- `127` = SNA

### idx 787 - HVAC_STS_HCP.EvapTempTar (0x770)
- `255` = SNA

### idx 788 - HVAC_STS_HCP.HtrCorTmp_InTgt (0x770)
- `255` = SNA

### idx 789 - HVAC_STS_HCP.HVAC_Blwr_Perct (0x770)
- `127` = SNA

### idx 790 - HVAC_STS_HCP.VEH_INT_TEMP (0x770)
- `65535` = SNA

### idx 793 - HY_BRAKE.WhlTrq_FrontAxle_Max_Rq_ESC (0xEA)
- `0` = False
- `1` = True

### idx 794 - HY_BRAKE.WhlTrq_FrontAxle_Min_Rq_ESC (0xEA)
- `0` = False
- `1` = True

### idx 795 - HY_BRAKE.WhlTrq_FrontAxle_Rq_ESC (0xEA)
- `8191` = SNA

### idx 797 - HYBRID1.DrvIntndedAxleTorq (0xF2)
- `16383` = SNA

### idx 798 - HYBRID1.FrontAxleTrqEst (0xF2)
- `8191` = SNA

### idx 800 - HybridRMS_Charging.ACSideCurr (0x78E)
- `1023` = SNA

### idx 801 - HybridRMS_Charging.ACSideVolt (0x78E)
- `4095` = SNA

### idx 802 - HybridRMS_Charging.APM_FailureReason (0x78E)
- `0` = No_Failure
- `1` = Fail_high_voltage_at_HV
- `2` = Fail_low_voltage_at_HV
- `3` = Fail_high_voltage_at_LV
- `4` = Fail_low_voltage_at_LV
- `5` = Fail_high_PCB_temperature
- `6` = Fail_high_DBC_temperature
- `7` = Fail_high_curr_at_LV
- `8` = Fail_high_curr_at_HV
- `9` = Fail_short_circ_at_LV
- `10` = Fail_short_circ_at_HV
- `11` = Fail_open_circ_at_LV
- `12` = Fail_open_circ_at_HV
- `13` = Fail_init_failure
- `14` = Fail_wake_up_issue
- `15` = Fail_internal_hardware
- `16` = Fail_bat_fedd_low
- `17` = Fail_bat_feed_high
- `18` = Fail_Aux_OV
- `19` = Fail_Aux_UV
- `20` = Fail_HVIL_fault
- `21` = Fail_LOC_with_HCP
- `22` = Fail_LOC_with_BPCM
- `23` = Fail_cont_not_closed
- `24` = Fail_SBC_fault
- `25` = Memory_Fail
- `26` = Implausible_data_from_HCP
- `27` = Implausible_data_from_BPCM
- `28` = CAN_bus_off
- `29` = Fail_temp_diff_is_high
- `30` = Fail_high_voltage_diff_is_high
- `31` = Fail_for_other_reason
- `32` = LOC_ORC
- `33` = Implausible_data_ORC
- `63` = SNA

### idx 803 - HybridRMS_Charging.APM_OperModeStatus (0x78E)
- `0` = IDLE
- `1` = Buck_CV
- `2` = Buck_CC
- `3` = Buck_CP
- `4` = Buck_Special
- `5` = Boost
- `6` = Precharge
- `7` = Discharge
- `8` = Failure
- `15` = SNA

### idx 804 - HybridRMS_Charging.APM_OutputPower (0x78E)
- `1023` = SNA

### idx 806 - HybridRMS_Warnings.APMPerfWrn (0x793)
- `0` = Normal
- `1` = Warning

### idx 807 - HybridRMS_Warnings.APMTempWrn (0x793)
- `0` = Normal
- `1` = Warning

### idx 808 - IMMO_CODE_REQUEST.ControlEncodingReq (0x64)
- `5` = ControlEncoding_ENQ
- `6` = ControlEncoding_ACK
- `21` = ControlEncoding_NACK
- `132` = ControlEncoding_EOTp
- `133` = ControlEncoding_ENQp
- `134` = ControlEncoding_ACK1p
- `135` = ControlEncoding_ACK2p

### idx 809 - IMMO_CODE_REQUEST.f1_1 (0x64)
- `0` = Val1_f1_1
- `81` = Val5_f1_1
- `119` = Val2_f1_1
- `145` = Val3_f1_1
- `159` = Val4_f1_1

### idx 810 - IMMO_CODE_REQUEST.f1_2 (0x64)
- `0` = Val1_f1_2
- `5` = Val2_f1_2
- `13` = Val4_f1_2
- `14` = Val3_f1_2
- `15` = Val5_f1_2

### idx 811 - IMMO_CODE_REQUEST.rnd_1 (0x64)
- `0` = Val1_rnd_1
- `58` = Val2_rnd_1
- `59` = Val3_rnd_1
- `60` = Val4_rnd_1
- `61` = Val5_rnd_1
- `62` = Val6_rnd_1
- `63` = Val7_rnd_1
- `64` = Val8_rnd_1
- `65` = Val9_rnd_1
- `66` = ValA_rnd_1
- `67` = ValB_rnd_1
- `68` = ValC_rnd_1
- `69` = ValD_rnd_1
- `70` = ValE_rnd_1
- `71` = ValF_rnd_1

### idx 812 - IMMO_CODE_REQUEST.rnd_2 (0x64)
- `0` = Val1_rnd_2
- `26` = Val3_rnd_2
- `43` = Val5_rnd_2
- `79` = Val2_rnd_2
- `168` = Val4_rnd_2

### idx 813 - IMMO_CODE_REQUEST.rnd_3 (0x64)
- `0` = Val1_rnd_3
- `19` = Val3_rnd_3
- `21` = Val5_rnd_3
- `32` = Val4_rnd_3
- `129` = Val2_rnd_3

### idx 814 - IMMO_CODE_REQUEST.rnd_4 (0x64)
- `0` = Val1_rnd_4
- `170` = Val5_rnd_4
- `203` = Val2_rnd_4
- `221` = Val3_rnd_4
- `238` = Val4_rnd_4

### idx 816 - IMMO_CODE_RESPONSE.MKKey_3 (0x68)
- `36` = FIX__MKKey_3

### idx 817 - IMMO_CODE_RESPONSE.MKKey_4 (0x68)
- `214` = FIX__MKKey_4

### idx 818 - IMMO_CODE_RESPONSE.MKKey_5 (0x68)
- `1` = FIX__MKKey_5

### idx 819 - IMMO_CODE_RESPONSE.MKKey_6 (0x68)
- `77` = FIX__MKKey_6

### idx 820 - IMMO_CODE_RESPONSE.MKKey1org21 (0x68)
- `84` = FIX__MKKey_1

### idx 821 - IMMO_CODE_RESPONSE.MKKey2org22 (0x68)
- `85` = FIX__MKKey_2

### idx 823 - IMPACT_INFO.IMPACT_A (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 824 - IMPACT_INFO.IMPACT_B (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 825 - IMPACT_INFO.IMPACT_C (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 826 - IMPACT_INFO.IMPACT_D (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 827 - IMPACT_INFO.IMPACT_E (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 828 - IMPACT_INFO.IMPACT_F (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 829 - IMPACT_INFO.IMPACT_FrontLowSpeed (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 830 - IMPACT_INFO.IMPACT_G (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 831 - IMPACT_INFO.IMPACT_H (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 832 - IMPACT_INFO.IMPACT_I (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 833 - IMPACT_INFO.IMPACT_K (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 834 - IMPACT_INFO.IMPACT_L (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 835 - IMPACT_INFO.IMPACT_M (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 836 - IMPACT_INFO.IMPACT_O (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 837 - IMPACT_INFO.IMPACTCommand (0x15A)
- `0` = Do_Not_Actuate
- `1` = Actuate

### idx 838 - IMPACT_INFO.IMPACTConfirm (0x15A)
- `0` = Actuate
- `1` = Do_Not_Actuate

### idx 839 - IMPACT_INFO.IMPACTFailSts (0x15A)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 840 - IMPACT_INFO.IMPACTThreshold (0x15A)
- `0` = Threshold_Not_Met
- `1` = Threshold_Met

### idx 842 - J1979_03_CARB_1.HVBat_Rsrv_Enrgy_Remain (0xDB)
- `65535` = SNA

### idx 843 - J1979_03_CARB_1.HVBatSOH_Distance_Last_Calc (0xDB)
- `65535` = SNA

### idx 844 - J1979_03_CARB_1.HVBatSOH_reg (0xDB)
- `255` = SNA

### idx 845 - J1979_03_CARB_2.Syst_Actual_Charge_Lim (0xDD)
- `65535` = SNA

### idx 846 - LIN_BCM_IGW6.CurrBattFailStatus (0x422)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 847 - LIN_BCM_IGW6.IBS3_Error_Internal (0x422)
- `0` = No_error
- `1` = Error

### idx 848 - LIN_BCM_IGW6.IBS3_Flag_Disconnect (0x422)
- `0` = No_disconnect_since_last_key_cycle
- `1` = Battery_disconnected_since_last_key_cycle

### idx 849 - LIN_BCM_IGW6.IBS3_Ibatt (0x422)
- `65535` = SNA

### idx 850 - LIN_BCM_IGW6.IBS3_Rbatt (0x422)
- `255` = SNA

### idx 851 - LIN_BCM_IGW6.IBS3_Rbatt_25 (0x422)
- `255` = SNA

### idx 852 - LIN_BCM_IGW6.IBS3_SOF_V_Accuracy (0x422)
- `0` = Inaccurate
- `1` = Accurate

### idx 853 - LIN_BCM_IGW6.IBS3_SOF_VC (0x422)
- `127` = SNA

### idx 854 - LIN_BCM_IGW6.IBS3_Vbatt (0x422)
- `511` = SNA

### idx 855 - LIN_BCM_IGW6.RsErrIBS3 (0x422)
- `0` = No_error
- `1` = Error

### idx 856 - LIN_BCM_IGW6.VoltBattFailStatus (0x422)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 857 - LIN_BCM_IGW7.IBS3_SOC (0x424)
- `127` = SNA

### idx 858 - LIN_BCM_IGW7.IBS3_SOC_Accuracy (0x424)
- `0` = Inaccurate
- `1` = Accurate

### idx 859 - LIN_BCM_IGW7.IBS3_SOF_Q (0x424)
- `255` = SNA

### idx 860 - LIN_BCM_IGW7.IBS3_SOF_Q_Accuracy (0x424)
- `0` = Inaccurate
- `1` = Accurate

### idx 861 - LIN_BCM_IGW7.IBS3_SOH_Q (0x424)
- `127` = SNA

### idx 862 - LIN_BCM_IGW7.IBS3_SOH_Q_Accuracy (0x424)
- `0` = Inaccurate
- `1` = Accurate

### idx 863 - LIN_BCM_IGW7.IBS3_T_BATT (0x424)
- `255` = SNA

### idx 864 - LIN_BCM_IGW7.IBS3_TempFailStatus (0x424)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 865 - LIN_BCM_IGW8.IBS3_Q_Received (0x426)
- `65535` = SNA

### idx 866 - LIN_BCM_IGW8.IBS3_Q_Released (0x426)
- `65535` = SNA

### idx 867 - LIN_BCM_IGW8.IBS3_TmLstResetDays (0x426)
- `4095` = SNA

### idx 868 - LIN_BCM_IGW8.IBS3_TmLstResetSec (0x426)
- `65535` = SNA

### idx 870 - MGRP_21.Multiplex_Index (0x71)
- `0` = Index0
- `1` = Index1
- `2` = Index2
- `3` = Index3
- `4` = Index4
- `5` = Index5
- `6` = Index6
- `7` = Index7
- `8` = Index8

### idx 881 - MGRP_22.Multiplex_Index (0x72)
- `0` = Index0
- `1` = Index1
- `2` = Index2
- `3` = Index3
- `4` = Index4
- `5` = Index5
- `6` = Index6
- `7` = Index7
- `8` = Index8

### idx 892 - MOT_TRANSM1.ECM_LHOM (0x100)
- `0` = Not_In_Limp_Home
- `1` = In_Limp_Home

### idx 893 - MOT_TRANSM1.ECM_LHOM_Trans (0x100)
- `0` = Limp Home not Active
- `1` = No Redundant Torque Req
- `2` = Precise Torque +/-15%
- `3` = Imprecise Torque

### idx 894 - MOT_TRANSM1.EngineNuenRq (0x100)
- `0` = Not_Request
- `1` = Request

### idx 895 - MOT_TRANSM1.EngineSailingRq (0x100)
- `0` = Not_Request
- `1` = Request

### idx 896 - MOT_TRANSM1.EngTrq_Enbl_Rq_TCM (0x100)
- `0` = Not_Active
- `1` = Active

### idx 897 - MOT_TRANSM1.EngTrqSel_D_TTC (0x100)
- `2047` = SNA

### idx 898 - MOT_TRANSM1.EngTrqStatic_SEM (0x100)
- `2047` = SNA

### idx 899 - MOT_TRANSM1.EngTrqTgt_SEM (0x100)
- `2047` = SNA

### idx 901 - MOT_TRANSM1.TRANS_CLU_SLIP_MODE (0x100)
- `0` = NORMAL
- `1` = MDS_RQ
- `2` = IDFSO_RQ
- `3` = AC_EN_DIS_RQ
- `4` = IDFSO_ACTIVE
- `7` = SNA

### idx 902 - MOT_TRANSM1.TxAC_EMCC_rq (0x100)
- `0` = False
- `1` = True

### idx 903 - MOT_TRANSM2.CANErr (0xF4)
- `1` = NoCanMessage
- `2` = UnplausibleMessage
- `4` = UnplausibleCommand
- `8` = NotUsed

### idx 905 - MOT_TRANSM2.EngineIdleRefSpeed (0xF4)
- `4095` = SNA

### idx 907 - MOT_TRANSM2.TrqRq_SlowFast (0xF4)
- `2047` = SNA

### idx 908 - MOT_TRANSM3.BSGSts (0x1F4)
- `0` = Initialization
- `1` = BSG_Not_Working
- `2` = eRegenerator
- `3` = eMotor
- `4` = BSG_to_ICE
- `5` = ICE_to_BSG
- `6` = eAssist
- `7` = eGenerator
- `15` = SNA

### idx 910 - MOT_TRANSM3.EngineReadyForESS (0x1F4)
- `0` = Not_Active
- `1` = Active

### idx 911 - MOT_TRANSM3.EngTrqDrvReqMod (0x1F4)
- `8191` = SNA

### idx 912 - MOT_TRANSM3.EngTrqEnblRq_DAS (0x1F4)
- `0` = FALSE
- `1` = TRUE

### idx 913 - MOT_TRANSM3.ESS_ENG_ST (0x1F4)
- `1` = ENS Stopped / ENS_STOPPED
- `2` = ENS Request Start / ENS_RQ_ST
- `3` = ENS Running / ENS_RUN
- `4` = ENS Stop Pending / ENS_STOP_PEND
- `5` = ENS Start protection / ENS_ST_PRTCT
- `6` = ENS Start inhibit / ENS_ST_INH
- `7` = ENS disabled / ENS_DSBL
- `8` = ENS_IHB_LATCH
- `9` = ENS Starting / ENS_Starting
- `15` = SNA

### idx 914 - MOT_TRANSM3.GrMax_Rq_ECM (0x1F4)
- `0` = Passive
- `1` = G1
- `2` = G2
- `3` = G3
- `4` = G4
- `5` = G5
- `6` = G6
- `7` = G7
- `8` = G8
- `9` = G9

### idx 916 - MOT_TRANSM3.RPMOverRev (0x1F4)
- `0` = FALSE
- `1` = TRUE

### idx 917 - MOT_TRANSM4.AtmosphericPressure (0x417)
- `255` = SNA

### idx 918 - MOT_TRANSM4.AtmosphericPressureFailSts (0x417)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 919 - MOT_TRANSM4.EngMaxRPM (0x417)
- `255` = SNA

### idx 920 - MOT_TRANSM4.ThermalManagementActive (0x417)
- `0` = Not_active
- `1` = Active

### idx 921 - MOT_TRANSM4.VehicleSetSpeed (0x417)
- `255` = SNA

### idx 923 - OBD_CONTENT_FRAME.CARB_PERM (0x412)
- `0` = False
- `1` = True

### idx 924 - OBD_CONTENT_FRAME.CarbWarmUp (0x412)
- `0` = False
- `1` = True

### idx 925 - OBD_CONTENT_FRAME.CldStrtDenominator (0x412)
- `0` = Not_Active
- `1` = Active

### idx 926 - OBD_CONTENT_FRAME.EngineOFFTime (0x412)
- `1023` = SNA

### idx 927 - OBD_CONTENT_FRAME.GenDenominator (0x412)
- `0` = False
- `1` = True

### idx 928 - OBD_CONTENT_FRAME.IgnCntrTrue (0x412)
- `0` = False
- `1` = True

### idx 929 - OBD_CONTENT_FRAME.Inp_CSD_Fail (0x412)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 930 - OBD_CONTENT_FRAME.Inp_ICC_Fail (0x412)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 931 - OBD_CONTENT_FRAME.InputsGDFail (0x412)
- `0` = False
- `1` = True

### idx 934 - OBFCM_BEV_CONTEXT_1.MODE_CHARGE_IN_PROGRESS (0x725)
- `0` = SLOW_AC
- `1` = QUICK_DC
- `2` = No_Charging
- `3` = Reserved_1
- `4` = Reserved_2
- `5` = Reserved_3
- `6` = Reserved_4
- `7` = Reserved_5

### idx 935 - OBFCM_BEV_CONTEXT_1.RECHARGE_HMI_STATE (0x725)
- `0` = Disconnected
- `1` = In_Progress
- `2` = Failure
- `3` = Stopped
- `4` = Reserved_1
- `5` = Reserved_2
- `6` = Reserved_3
- `7` = Reserved_4

### idx 936 - OBFCM_BEV_CONTEXT_1.RECHARGE_HMI_STATE_EVO (0x725)
- `0` = Disconnected
- `1` = In_Progress
- `2` = Failure
- `3` = Stopped
- `4` = Finished
- `5` = Init
- `6` = Off
- `7` = Reserved

### idx 937 - OBFCM_BEV_CONTEXT_2.HV_BATT_REAL_CURR_HD (0x726)
- `63535` = SNA

### idx 938 - OBFCM_BEV_CONTEXT_2.HV_BATT_REAL_VOLT_HD (0x726)
- `16383` = SNA

### idx 939 - OBFCM_BEV_CONTEXT_2.HV_BATT_SOC (0x726)
- `1023` = SNA

### idx 940 - OBFCM_BEV_CONTEXT_2.HV_BATT_SOH_CAPA (0x726)
- `1023` = SNA

### idx 941 - OBFCM_BEV_CONTEXT_2.HV_BATT_SOH_RES (0x726)
- `1023` = SNA

### idx 950 - OBM_1.B3_OBM_NOX_STATE_END_OF_TR1 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 951 - OBM_1.B3_OBM_NOX_STATE_END_OF_TR2 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 952 - OBM_1.B3_OBM_NOX_STATE_END_OF_TR3 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 953 - OBM_1.B3_OBM_NOX_STATE_END_OF_TR4 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 954 - OBM_1.B3_OBM_NOX_STATE_END_OF_TR5 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 955 - OBM_1.B3_OBM_PM_STATE_END_OF_TR1 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 956 - OBM_1.B3_OBM_PM_STATE_END_OF_TR2 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 957 - OBM_1.B3_OBM_PM_STATE_END_OF_TR3 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 958 - OBM_1.B3_OBM_PM_STATE_END_OF_TR4 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 959 - OBM_1.B3_OBM_PM_STATE_END_OF_TR5 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 960 - OBM_1.B3_OTH_FAULT_STATE_END_OF_TR1 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 961 - OBM_1.B3_OTH_FAULT_STATE_END_OF_TR2 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 962 - OBM_1.B3_OTH_FAULT_STATE_END_OF_TR3 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 963 - OBM_1.B3_OTH_FAULT_STATE_END_OF_TR4 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 964 - OBM_1.B3_OTH_FAULT_STATE_END_OF_TR5 (0x586)
- `0` = STATE_0
- `1` = STATE_1
- `2` = STATE_2
- `3` = NOT_USED

### idx 972 - OBM_1.LID_OBM (0x586)
- `0` = LID_0
- `1` = LID_1
- `2` = LID_2
- `3` = LID_3
- `4` = LID_4
- `5` = LID_5
- `6` = LID_6
- `7` = LID_7
- `8` = LID_8
- `9` = LID_9
- `10` = LID_10
- `11` = LID_11
- `12` = LID_12
- `13` = LID_13
- `14` = LID_14
- `15` = LID_15

### idx 1032 - OBM_2.LID_OBM2 (0x585)
- `0` = LID_0
- `1` = LID_1
- `2` = LID_2
- `3` = LID_3
- `4` = LID_4
- `5` = LID_5
- `6` = LID_6
- `7` = LID_7
- `8` = LID_8
- `9` = LID_9
- `10` = LID_10
- `11` = LID_11
- `12` = LID_12
- `13` = LID_13
- `14` = LID_14
- `15` = LID_15
- `16` = LID_16
- `17` = LID_17
- `18` = LID_18
- `19` = LID_19
- `20` = LID_20
- `21` = LID_21
- `22` = LID_22
- `23` = LID_23
- `24` = LID_24
- `25` = LID_25
- `26` = LID_26
- `27` = LID_27
- `28` = LID_28
- `29` = LID_29
- `30` = LID_30
- `31` = LID_31
- `32` = LID_32
- `33` = LID_33
- `34` = LID_34
- `35` = LID_35
- `36` = LID_36
- `37` = LID_37
- `38` = LID_38
- `39` = LID_39
- `40` = LID_40
- `41` = LID_41
- `42` = LID_42
- `43` = LID_43
- `44` = LID_44
- `45` = LID_45
- `46` = LID_46
- `47` = LID_47
- `48` = LID_48
- `49` = LID_49
- `50` = LID_50
- `51` = LID_51
- `52` = LID_52
- `53` = LID_53
- `54` = LID_54
- `55` = LID_55
- `56` = LID_56
- `57` = LID_57
- `58` = LID_58
- `59` = LID_59
- `60` = LID_60
- `61` = Reserved
- `62` = Reserved
- `63` = Reserved
- `64` = Reserved
- `65` = Reserved
- `66` = Reserved
- `67` = Reserved
- `68` = Reserved
- `69` = Reserved
- `70` = Reserved
- `71` = Reserved
- `72` = Reserved
- `73` = Reserved
- `74` = Reserved
- `75` = Reserved
- `76` = Reserved
- `77` = Reserved
- `78` = Reserved
- `79` = Reserved
- `80` = Reserved
- `81` = Reserved
- `82` = Reserved
- `83` = Reserved
- `84` = Reserved
- `85` = Reserved
- `86` = Reserved
- `87` = Reserved
- `88` = Reserved
- `89` = Reserved
- `90` = Reserved
- `91` = Reserved
- `92` = Reserved
- `93` = Reserved
- `94` = Reserved
- `95` = Reserved
- `96` = Reserved
- `97` = Reserved
- `98` = Reserved
- `99` = Reserved
- `100` = Reserved
- `101` = Reserved
- `102` = Reserved
- `103` = Reserved
- `104` = Reserved
- `105` = Reserved
- `106` = Reserved
- `107` = Reserved
- `108` = Reserved
- `109` = Reserved
- `110` = Reserved
- `111` = Reserved
- `112` = Reserved
- `113` = Reserved
- `114` = Reserved
- `115` = Reserved
- `116` = Reserved
- `117` = Reserved
- `118` = Reserved
- `119` = Reserved
- `120` = Reserved
- `121` = Reserved
- `122` = Reserved
- `123` = Reserved
- `124` = Reserved
- `125` = Reserved
- `126` = Reserved
- `127` = Reserved

### idx 1155 - OBM_3.LID_OBM (0x589)
- `0` = LID_0
- `1` = LID_1
- `2` = LID_2
- `3` = LID_3
- `4` = LID_4
- `5` = LID_5
- `6` = LID_6
- `7` = LID_7
- `8` = LID_8
- `9` = LID_9
- `10` = LID_10
- `11` = LID_11
- `12` = LID_12
- `13` = LID_13
- `14` = LID_14
- `15` = LID_15

### idx 1185 - OBM_CYBER_SECURITY.LID_CYBER_SECURITY (0x566)
- `0` = LID_0
- `1` = LID_1
- `2` = LID_2
- `3` = LID_3
- `4` = LID_4
- `5` = LID_5
- `6` = LID_6
- `7` = LID_7
- `8` = LID_8
- `9` = LID_9
- `10` = LID_10
- `11` = LID_11
- `12` = LID_12
- `13` = LID_13
- `14` = LID_14
- `15` = LID_15
- `16` = LID_16
- `17` = LID_17
- `18` = LID_18
- `19` = LID_19
- `20` = LID_20
- `21` = LID_21
- `22` = LID_22
- `23` = LID_23
- `24` = LID_24
- `25` = LID_25
- `26` = LID_26
- `27` = LID_27
- `28` =  LID_28
- `29` = LID_29
- `30` = LID_30
- `31` = LID_31
- `32` = LID_32
- `33` = LID_33
- `34` = LID_34
- `35` = LID_35
- `36` = LID_36
- `37` = LID_37
- `38` = LID_39
- `39` = LID_38
- `40` = LID_40
- `41` = LID_41
- `42` = LID_42
- `43` = LID_43
- `44` = LID_44
- `45` = LID_45
- `46` = LID_46
- `47` = LID_47
- `48` = LID_48
- `49` = LID_49
- `50` = LID_50
- `51` = LID_51
- `52` = LID_52
- `53` = LID_53
- `54` = LID_54
- `55` = LID_55
- `56` = LID_56
- `57` = LID_57
- `58` = LID_58
- `59` = LID_59
- `60` = LID_60
- `61` = LID_61
- `62` = LID_62
- `63` = LID_63
- `65` = LID_64
- `66` = LID_65

### idx 1212 - OBM_DISPLAY_1.OBM_SHORT_TRIP_FLAG (0x722)
- `0` = Long_Trip
- `1` = Short_Trip

### idx 1219 - ODO_ECM_EVCU.OdometerFailSts (0x24D)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1221 - ORC_PITCH_DATA.LatAcceleration (0x2F1)
- `4095` = SNA

### idx 1222 - ORC_PITCH_DATA.LatAccelerationFailSts (0x2F1)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1223 - ORC_PITCH_DATA.LongAcceleration (0x2F1)
- `4095` = SNA

### idx 1224 - ORC_PITCH_DATA.LongAccelerationFailSts (0x2F1)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1225 - ORC_PITCH_DATA.ZAcceleration (0x2F1)
- `0` = Initialization
- `4095` = SNA

### idx 1226 - ORC_PITCH_DATA.ZAccelerationFailSts (0x2F1)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1228 - RFHUB1.CustKeyInIgnSts (0x1EF)
- `0` = CUST_KEY_DEFAULT
- `1` = CUST_KEY_NOT_IN_IGNITION
- `2` = CUST_KEY_IN_IGNITION
- `3` = SNA

### idx 1229 - RFHUB1.DriverEngineOffRequest (0x1EF)
- `0` = Not_Active
- `1` = Active

### idx 1231 - RFHUB1.IgnPosSts (0x1EF)
- `0` = Initialization
- `1` = IGN_LK
- `3` = ACC
- `4` = RUN
- `5` = START
- `7` = SNA

### idx 1233 - RFHUB1.RFFobNum (0x1EF)
- `0` = FOB_DEFAULT
- `1` = FOB_1
- `2` = FOB_2
- `3` = FOB_3
- `4` = FOB_4
- `5` = FOB_5
- `6` = FOB_6
- `7` = FOB_7
- `8` = FOB_8
- `15` = SNA

### idx 1234 - RFHUB1.RFFuncReq2 (0x1EF)
- `0` = NO_BASIC_REQUEST
- `1` = LOCK_REQUEST
- `2` = RELOCK_REQUEST
- `3` = DRIVER_UNLOCK_REQUEST
- `4` = ALL_UNLOCK_REQUEST
- `5` = TRUNK_PLG_TOGGLE_REQUEST
- `6` = LEFT_SLIDER_TOGGLE_REQUEST
- `7` = RIGHT_SLIDER_TOGGLE_REQUEST
- `8` = FLIPPER_GLASS_REQUEST
- `9` = REMOTE_START_ON
- `10` = REMOTE_START_OFF
- `11` = GLOBAL_WINDOW_DOWN_REQUEST
- `12` = OPEN_CONVERTIBLE_TOP
- `13` = CLOSE_CONVERTIBLE_TOP
- `14` = PANIC_TOGGLE_REQUEST
- `15` = DEAD_LOCK_REQUEST
- `16` = GLOBAL_WINDOWS_UP_REQUEST
- `17` = HEADLIGHTS_OFF_DELAY
- `18` = TRUNK_PLG_STOP_REQUEST
- `19` = ABORT_CRANKING_ON_REQUEST
- `20` = ABORT_CRANKING_OFF_REQUEST
- `21` = PRE_COND_ON
- `22` = PRE_COND_OFF
- `23` = CAR_FINDER_REQUEST
- `24` = AUTHENTICATION_REQUEST
- `25` = LIGHTS_ON_REQUEST
- `26` = LIGHTS_OFF_REQUEST
- `27` = LOCK_AND_LIGHTS_OFF_REQUEST
- `28` = WARNING_FOB_INSIDE
- `29` = WARN_FOB_INSIDE_LIGHTS_OFF_REQ
- `30` = FRONT_UNLOCK_REQUEST
- `31` = REAR_UNLOCK_REQUEST
- `255` = SNA

### idx 1235 - RFHUB1.RFReq2 (0x1EF)
- `0` = REQUESTOR_DEFAULT
- `1` = REQUESTOR_RKE
- `2` = REQUESTOR_PE
- `3` = REQUESTOR_REMOTESTART
- `4` = REQUESTOR_UCONNECT
- `5` = REQUESTOR_PE_HANDSFREE
- `6` = REQUESTOR_PRECOND
- `15` = SNA

### idx 1236 - RFHUB2.KeyProgramSts (0x738)
- `0` = RKE_NORM_STAT
- `1` = EN_KEY_PROG
- `2` = PROG_ACT
- `3` = EX_KEY_PROG
- `4` = KEY_PROG
- `5` = DMG_KEY
- `6` = INV_KEY
- `7` = EXCD_KEY
- `8` = RKE_BATT_LO
- `9` = SRV_SKREEM
- `10` = BTN_DLY_ACT
- `11` = BTN_DLY_INACT
- `12` = KEY_NOT_PROG
- `15` = SNA

### idx 1237 - RFHUB2.MsgFOBLeftVeh (0x738)
- `0` = MSG_DEFAULT
- `1` = MSG_ACTIVE
- `3` = SNA

### idx 1238 - RFHUB2.MsgFOBNotFnd (0x738)
- `0` = MSG_DEFAULT
- `1` = MSG_ACTIVE
- `3` = SNA

### idx 1239 - RFHUB2.MsgNotInPark (0x738)
- `0` = MSG_DEFAULT
- `1` = MSG_ACTIVE
- `3` = SNA

### idx 1240 - RFHUB2.MsgPutInPark (0x738)
- `0` = MSG_DEFAULT
- `1` = MSG_ACTIVE
- `3` = SNA

### idx 1241 - RFHUB2.MsgServPEKG (0x738)
- `0` = MSG_DEFAULT
- `1` = MSG_ACTIVE
- `3` = SNA

### idx 1242 - RFHUB2.PowerModeSts_RFHM (0x738)
- `0` = Standard Power
- `1` = Logistic Mode ON
- `2` = Logistic_Mode_PR
- `3` = Not_Used

### idx 1243 - RFHUB2.StartButtonFailSts (0x738)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1244 - RFHUB2_BCM.RemoteControlCommand (0x222)
- `0` = Not_Active 
- `1` = Active

### idx 1245 - RFHUB2_BCM.RFFuncReq2_BCM (0x222)
- `0` = NO_BASIC_REQUEST
- `1` = LOCK_REQUEST
- `2` = RELOCK_REQUEST
- `3` = DRIVER_UNLOCK_REQUEST
- `4` = ALL_UNLOCK_REQUEST
- `5` = TRUNK_PLG_TOGGLE_REQUEST
- `6` = LEFT_SLIDER_TOGGLE_REQUEST
- `7` = RIGHT_SLIDER_TOGGLE_REQUEST
- `8` = FLIPPER_GLASS_REQUEST
- `9` = REMOTE_START_ON
- `10` = REMOTE_START_OFF
- `11` = GLOBAL_WINDOW_DOWN_REQUEST
- `12` = OPEN_CONVERTIBLE_TOP
- `13` = CLOSE_CONVERTIBLE_TOP
- `14` = PANIC_TOGGLE_REQUEST
- `15` = DEAD_LOCK_REQUEST
- `16` = GLOBAL_WINDOWS_UP_REQUEST
- `17` = HEADLIGHTS_OFF_DELAY
- `18` = TRUNK_PLG_STOP_REQUEST
- `19` = ABORT_CRANKING_ON_REQUEST
- `20` = ABORT_CRANKING_OFF_REQUEST
- `21` = PRE_COND_ON
- `22` = PRE_COND_OFF
- `23` = CAR_FINDER_REQUEST
- `24` = AUTHENTICATION_REQUEST
- `25` = LIGHTS_ON_REQUEST
- `26` = LIGHTS_OFF_REQUEST
- `27` = LOCK_AND_LIGHTS_OFF_REQUEST
- `28` = WARNING_FOB_INSIDE
- `29` = WARN_FOB_INSIDE_LIGHTS_OFF_REQ
- `30` = FRONT_UNLOCK_REQUEST
- `31` = REAR_UNLOCK_REQUEST
- `255` = SNA

### idx 1246 - RFHUB2_BCM.RFReq2_BCM (0x222)
- `0` = REQUESTOR_DEFAULT
- `1` = REQUESTOR_RKE
- `2` = REQUESTOR_PE
- `3` = REQUESTOR_REMOTESTART
- `4` = REQUESTOR_UCONNECT
- `5` = REQUESTOR_PE_HANDSFREE
- `6` = REQUESTOR_PRECOND
- `15` = SNA

### idx 1247 - SC.APCM_Stat (0x190)
- `0` = OFF
- `1` = ON
- `2` = PENDING
- `3` = SNA

### idx 1249 - SC.DriveModeReq (0x190)
- `0` = No_program_selected
- `1` = Economy
- `2` = Sport
- `3` = Not_used
- `4` = Ice_winter
- `5` = Tow_Mode_Request
- `6` = Not_used
- `7` = Not_used
- `8` = Not_used
- `9` = Not_used
- `10` = Not_used
- `11` = Not_used
- `12` = Not_used
- `13` = Not_used
- `14` = Not_used
- `15` = SNA

### idx 1250 - SC.GatedPark (0x190)
- `0` = Unlocked
- `1` = Locked
- `2` = Not_Used
- `3` = SNA

### idx 1251 - SC.KeyLockFailSts (0x190)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 1253 - SC.PRNDdisplayFailSts (0x190)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 1254 - SC.PRNDFailSts (0x190)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1255 - SC.ShiftLever_PositionFlt (0x190)
- `0` = Fail_not_Present
- `1` = Fail_Present

### idx 1256 - SC.ShiftLeverFailSts (0x190)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 1257 - SC.ShiftLeverPositionReq (0x190)
- `0` = No_Selection_Active_Or_Available
- `1` = P
- `2` = R
- `3` = N
- `4` = D
- `5` = L
- `6` = TIP_Autostick
- `7` = Plus
- `8` = Minus
- `9` = Sport
- `10` = Both
- `11` = Not_Used
- `12` = Not_Used
- `13` = Not_Used
- `14` = Not_Used
- `15` = SNA

### idx 1258 - SC.ShiftLockFailSts (0x190)
- `0` = Fail_not_Present
- `1` = Fail_Present

### idx 1259 - SC.TipFailSts (0x190)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1260 - SC.WarningMessages (0x190)
- `0` = No_Warning
- `1` = Stop Vehicle to Shift
- `2` = Service Transmission__Stop vehicle_Restart Vehicle in P to Continue Driving
- `3` = Service Transmission_Stop Vehicle to Shift_Restart Vehicle in P to Continue Driving
- `4` = Service Transmission_Stop Vehicle to Shift
- `5` = Service_Shifter
- `6` = Release_Shifter
- `7` = SNA

### idx 1261 - SCCM_CRS_CTRL.ACC_DistSwDec (0x2FA)
- `0` = Not_Active
- `1` = Active

### idx 1262 - SCCM_CRS_CTRL.ACC_DistSwInc (0x2FA)
- `0` = Not_Active
- `1` = Active

### idx 1263 - SCCM_CRS_CTRL.ACC_On (0x2FA)
- `0` = Not_Active
- `1` = Active

### idx 1264 - SCCM_CRS_CTRL.AcceleratorSts (0x2FA)
- `0` = Not_Active
- `1` = Active

### idx 1266 - SCCM_CRS_CTRL.CruiseControlFailSts (0x2FA)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1267 - SCCM_CRS_CTRL.CruiseControlOnOffSts (0x2FA)
- `0` = Not_Active
- `1` = Active

### idx 1268 - SCCM_CRS_CTRL.CrusCnclSwitch (0x2FA)
- `0` = Not_Active
- `1` = Active

### idx 1269 - SCCM_CRS_CTRL.DeceleratorSts (0x2FA)
- `0` = Not_Active
- `1` = Active

### idx 1270 - SCCM_CRS_CTRL.LaneCenteringOnOffSts (0x2FA)
- `0` = Not_Pressed
- `1` = Pressed

### idx 1272 - SCCM_CRS_CTRL.ResumeSwitch (0x2FA)
- `0` = Not_Active
- `1` = Active

### idx 1274 - SCCM_CRS_CTRL.SpeedLimiterOnOffSts (0x2FA)
- `0` = Not_Active
- `1` = Active

### idx 1275 - SPEED_INFO.STSL_SpeedInfoActivation (0x3EB)
- `0` = NotActive
- `1` = Active

### idx 1278 - STATUS_BSIS.BSISBlindnessSts (0x59C)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1279 - STATUS_BSIS.BSISSystemSts (0x59C)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1280 - STATUS_BSIS.CyclistWarning (0x59C)
- `0` = Not_Active
- `1` = Active

### idx 1282 - STATUS_C_DASM.DES_DASM (0x1E360039)
- `0` = Error_Active_state
- `1` = Error_passive_warning_state
- `2` = Bus_off_state
- `3` = Not_used

### idx 1283 - STATUS_C_DASM.EOL_DASM (0x1E360039)
- `0` = No_EOL_prog_at_FIAT
- `1` = EOL_prog_at_FIAT

### idx 1286 - STATUS_C_DTM.DES_DTM (0x1E36003E)
- `0` = Error_Active_state
- `1` = Error_passive_warning_state
- `2` = Bus_off_state
- `3` = Not_used

### idx 1287 - STATUS_C_DTM.EOL_DTM (0x1E36003E)
- `0` = No_EOL_prog_at_FIAT
- `1` = EOL_prog_at_FIAT

### idx 1290 - STATUS_C_ECM.DES_ECM (0x1E360001)
- `0` = Error_Active_state
- `1` = Error_passive_warning_state
- `2` = Bus_off_state
- `3` = Not_used

### idx 1291 - STATUS_C_ECM.EOL_ECM (0x1E360001)
- `0` = No_EOL_prog_at_FIAT
- `1` = EOL_prog_at_FIAT

### idx 1294 - STATUS_C_EVCU.DES_EVCU (0x1E360040)
- `0` = Error_Active_state
- `1` = Error_passive_warning_state
- `2` = Bus_off_state
- `3` = Not_used

### idx 1295 - STATUS_C_EVCU.EOL_EVCU (0x1E360040)
- `0` = No_EOL_prog_at_FIAT
- `1` = EOL_prog_at_FIAT

### idx 1298 - STATUS_C_IPC.DES_IPC (0x1E360003)
- `0` = Error_Active_state
- `1` = Error_passive_warning_state
- `2` = Bus_off_state
- `3` = Not_used

### idx 1299 - STATUS_C_IPC.EOL_IPC (0x1E360003)
- `0` = No_EOL_prog_at_FIAT
- `1` = EOL_prog_at_FIAT

### idx 1302 - STATUS_C_RFHM.DES_RFHM (0x1E360041)
- `0` = Error_Active_state
- `1` = Error_passive_warning_state
- `2` = Bus_off_state
- `3` = Not_used

### idx 1303 - STATUS_C_RFHM.EOL_RFHM (0x1E360041)
- `0` = No_EOL_prog_at_FIAT
- `1` = EOL_prog_at_FIAT

### idx 1306 - STATUS_C_SHIFTER.DES_Shifter (0x1E360016)
- `0` = Error_Active_state
- `1` = Error_passive_warning_state
- `2` = Bus_off_state
- `3` = Not_used

### idx 1307 - STATUS_C_SHIFTER.EOL_Shifter (0x1E360016)
- `0` = No_EOL_prog_at_FIAT
- `1` = EOL_prog_at_FIAT

### idx 1310 - STATUS_C_TBM.DES_TBM (0x1E360023)
- `0` = Error_Active_state
- `1` = Error_passive_warning_state
- `2` = Bus_off_state
- `3` = Not_used

### idx 1311 - STATUS_C_TBM.EOL_TBM (0x1E360023)
- `0` = No_EOL_prog_at_FIAT
- `1` = EOL_prog_at_FIAT

### idx 1314 - STATUS_C_TPM.DES_TPM (0x1E360020)
- `0` = Error_Active_state
- `1` = Error_passive_warning_state
- `2` = Bus_off_state
- `3` = Not_used

### idx 1315 - STATUS_C_TPM.EOL_TPM (0x1E360020)
- `0` = No_EOL_prog_at_FIAT
- `1` = EOL_prog_at_FIAT

### idx 1318 - STATUS_C_TRANSMISSION.DES_Transmission (0x1E36000B)
- `0` = Error_Active_state
- `1` = Error_passive_warning_state
- `2` = Bus_off_state
- `3` = Not_used

### idx 1319 - STATUS_C_TRANSMISSION.EOL_Transmission (0x1E36000B)
- `0` = No_EOL_prog_at_FIAT
- `1` = EOL_prog_at_FIAT

### idx 1321 - STATUS_ECM.AGSStatus (0x5AE)
- `0` = Open
- `1` = Position_1
- `2` = Position_2
- `3` = Position_3
- `4` = Close
- `5` = Fault
- `7` = SNA

### idx 1322 - STATUS_ECM.CompressorSts (0x5AE)
- `0` = Not_Used
- `1` = Not_inserted_by_NCM
- `2` = Not_insrtd_by_driver_or_security
- `3` = Inserted

### idx 1323 - STATUS_ECM.DistanceToOilChange (0x5AE)
- `65535` = SNA

### idx 1324 - STATUS_ECM.DPFSts (0x5AE)
- `0` = Clean
- `1` = Dirty

### idx 1325 - STATUS_ECM.EEDWSFailSts (0x5AE)
- `0` = Not_present
- `1` = Present

### idx 1326 - STATUS_ECM.EMSFailSts (0x5AE)
- `0` = Fail_Not_Present
- `1` = Fail_Flash_Light_Indication
- `2` = Fail_Fix_Light_Indication
- `3` = Flash_For_Service

### idx 1327 - STATUS_ECM.EngineOperatingMode (0x5AE)
- `0` = Normal
- `1` = DPF Regeneration LO
- `2` = DPF Regeneration HI
- `3` = NSC DeNOx Regeneration
- `4` = NSC DeSOx Regeneration
- `5` = SCR Heat-up strategy

### idx 1328 - STATUS_ECM.EngineWaterTempWarningLightSts (0x5AE)
- `0` = OFF
- `1` = ON

### idx 1329 - STATUS_ECM.ETCFailSts (0x5AE)
- `0` = Fail_Not_Present
- `1` = Fail_Flash_Light_Indication
- `2` = Fail_Fix_Light_Indication
- `3` = Flash_For_Service

### idx 1330 - STATUS_ECM.ExhaustTemperature (0x5AE)
- `255` = SNA

### idx 1331 - STATUS_ECM.FuelFilterHeaterReq (0x5AE)
- `0` = Not_Active
- `1` = Active

### idx 1332 - STATUS_ECM.FuelWaterPresentSts (0x5AE)
- `0` = Water_Not_Present
- `1` = Water_Present

### idx 1333 - STATUS_ECM.GlowPlugFailSts (0x5AE)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1334 - STATUS_ECM.GlowPlugLampSts (0x5AE)
- `0` = OFF
- `1` = ON

### idx 1335 - STATUS_ECM.OilLifeSts (0x5AE)
- `0` = Normal_Oil_Properties
- `1` = Oil_Life_Reset
- `2` = Change_Oil_Required
- `3` = Not_used

### idx 1336 - STATUS_ECM.OilPressureFailSts (0x5AE)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1337 - STATUS_ECM.OilPressureSts (0x5AE)
- `0` = Normal_Pressure
- `1` = Low_Pressure

### idx 1338 - STATUS_ECM.RgnOnDemandSts (0x5AE)
- `0` = Not_Active
- `1` = Active

### idx 1340 - STATUS_EPB.EPB_HMI_Management (0x5E0)
- `0` = No_Ind
- `1` = Ind1
- `2` = Ind2
- `3` = Ind3
- `4` = Ind4
- `5` = Ind5
- `6` = Ind6
- `7` = Ind7
- `8` = Ind8
- `9` = Ind9
- `10` = Ind10
- `11` = Ind11
- `12` = Ind12
- `13` = Ind13
- `14` = Ind14
- `15` = Ind15
- `16` = Ind16
- `17` = Ind17
- `18` = Ind18
- `19` = Ind19
- `20` = Ind20
- `21` = Ind21
- `22` = Ind22
- `23` = Ind23
- `24` = Ind24
- `25` = Ind25
- `26` = Ind26
- `27` = Ind27
- `28` = Ind28
- `29` = Ind29
- `30` = Ind30
- `31` = Ind31

### idx 1341 - STATUS_EPB.EPBAutoAppSts (0x5E0)
- `0` = AutoApply_Disable
- `1` = AutoApply_Enable

### idx 1342 - STATUS_EPB.EPBFailureLampReq (0x5E0)
- `0` = lamp off
- `1` = lamp on

### idx 1343 - STATUS_EPB.EPBMaintenanceSts (0x5E0)
- `0` = Maintenance_Disabled
- `1` = Maintenance_Enabled

### idx 1344 - STATUS_EPB.EPBSts (0x5E0)
- `0` = Released
- `1` = Applied
- `2` = DynamicBrkESC
- `3` = DynamicBrkEPB
- `4` = Emergency_Braking
- `5` = Applying
- `6` = Maintenance_Mode
- `7` = Assembly_Check
- `8` = Inspection_Mode
- `9` = Re_Clamping
- `10` = Adjuste_Mode
- `11` = Releasing
- `12` = Fault_EPB_Released
- `13` = Fault_EPB_Applied
- `14` = Fault_Present
- `15` = SNA

### idx 1345 - STATUS_EPB.EPBSwitchPosition (0x5E0)
- `0` = No request
- `1` = Release request
- `2` = Apply request
- `3` = Error

### idx 1346 - STATUS_EPB.FastTransmission_SE (0x5E0)
- `0` = Slow
- `1` = Fast

### idx 1348 - STATUS_EVCU.PowerModeSts_EVCU (0x795)
- `0` = Standard_Power
- `1` = Logistic_Mode_ON
- `2` = Logistic_Mode_PR

### idx 1349 - STATUS_MOIS.MOISBlindnessSts (0x5AA)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1350 - STATUS_MOIS.MOISSystemSts (0x5AA)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1351 - STATUS_MOIS.RadarObjectInformation_HALF (0x5AA)
- `0` = None
- `1` = Pedestrian_Left
- `2` = Child_Left
- `3` = Cyclist_Left
- `4` = Pedestrian_Center
- `5` = Child_Center
- `6` = Cyclist_Center
- `7` = Pedestrian_Right
- `8` = Child_Right
- `9` = Cyclist_Right

### idx 1352 - STATUS_MOIS.RadarObjectWarning_HALF (0x5AA)
- `0` = None
- `1` = Pedestrian_Left
- `2` = Child_Left
- `3` = Cyclist_Left
- `4` = Pedestrian_Center
- `5` = Child_Center
- `6` = Cyclist_Center
- `7` = Pedestrian_Right
- `8` = Child_Right
- `9` = Cyclist_Right

### idx 1353 - STATUS_TBM_CCAN.CallType_C (0x59B)
- `0` = No_Call
- `1` = E_Call
- `2` = ACN_Call
- `3` = B_Call
- `4` = B1_Call
- `5` = B2_Call
- `6` = B3_Call
- `7` = SNA

### idx 1354 - STATUS_TBM_CCAN.Provisioning_C (0x59B)
- `0` = Call_Not_Enabled
- `1` = Call_Enabled
- `7` = SNA

### idx 1355 - STATUS_TBM_CCAN.SOSCallStatus_C (0x59B)
- `0` = No_Indication
- `1` = Sos_Battery_Fail
- `2` = Sos_Fail
- `3` = Sos_Call_Ended
- `4` = Sos_Call_Establish
- `5` = Starting_SOS_Fail
- `6` = Incoming_SOS_Call
- `7` = Starting_SOS_1_Phase
- `8` = Starting_SOS_2_Phase
- `9` = Starting_SOS_Auto
- `10` = SOS_Low_Battery

### idx 1356 - STATUS_TBM_CCAN.SOSCallType_C (0x59B)
- `0` = Initialization
- `1` = No_active_SOS_call
- `2` = Manual_SOS_call
- `3` = Automatic_SOS_call
- `4` = Callback_SOS_call
- `5` = Callback_wait
- `7` = SNA

### idx 1357 - STATUS_TBM_CCAN.SOSFailSts_C (0x59B)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1358 - STATUS_TPM1.InflationState_LHF_Tyre (0x4AC)
- `0` = Normal_Tyre_Pressure
- `1` = Under_Inflated_Tyre
- `2` = SignificantlyUnderInflatedTyre
- `3` = Over_Inflated_Tyre
- `4` = Sensor_Missing

### idx 1359 - STATUS_TPM1.InflationState_LHR_Tyre (0x4AC)
- `0` = Normal_Tyre_Pressure
- `1` = Under_Inflated_Tyre
- `2` = SignificantlyUnderInflatedTyre
- `3` = Over_Inflated_Tyre
- `4` = Sensor_Missing

### idx 1360 - STATUS_TPM1.InflationState_RHF_Tyre (0x4AC)
- `0` = Normal_Tyre_Pressure
- `1` = Under_Inflated_Tyre
- `2` = SignificantlyUnderInflatedTyre
- `3` = Over_Inflated_Tyre
- `4` = Sensor_Missing

### idx 1361 - STATUS_TPM1.InflationState_RHR_Tyre (0x4AC)
- `0` = Normal_Tyre_Pressure
- `1` = Under_Inflated_Tyre
- `2` = SignificantlyUnderInflatedTyre
- `3` = Over_Inflated_Tyre
- `4` = Sensor_Missing

### idx 1362 - STATUS_TPM1.PowerModeSts_TPM (0x4AC)
- `0` = Standard_Power
- `1` = Logistic_Mode_On
- `2` = Logistic_Mode_PR

### idx 1363 - STATUS_TPM1.PressureValue_LHF_Tyre (0x4AC)
- `63` = SNA

### idx 1364 - STATUS_TPM1.PressureValue_LHR_Tyre (0x4AC)
- `63` = SNA

### idx 1365 - STATUS_TPM1.PressureValue_RHF_Tyre (0x4AC)
- `63` = SNA

### idx 1366 - STATUS_TPM1.PressureValue_RHR_Tyre (0x4AC)
- `63` = SNA

### idx 1367 - STATUS_TPM1.TPMActivitySts (0x4AC)
- `0` = TPM_Enabled
- `1` = TPM_Disabled

### idx 1368 - STATUS_TPM1.TyrePressureSysProgrammedSts (0x4AC)
- `0` = System_Programmed
- `1` = System_Not_Programmed

### idx 1369 - STATUS_TPM1.TyrePressureSystemFailSts (0x4AC)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1370 - STATUS_TPM2.InflationState_LHR_Tyre_2 (0x4AE)
- `0` = Normal_Tyre_Pressure
- `1` = Under_Inflated_Tyre
- `2` = SignificantlyUnderInflatedTyre
- `3` = Over_Inflated_Tyre
- `4` = Sensor_Missing

### idx 1371 - STATUS_TPM2.InflationState_RHR_Tyre_2 (0x4AE)
- `0` = Normal_Tyre_Pressure
- `1` = Under_Inflated_Tyre
- `2` = SignificantlyUnderInflatedTyre
- `3` = Over_Inflated_Tyre
- `4` = Sensor_Missing

### idx 1372 - STATUS_TPM2.PressureValue_LHR_Tyre_2 (0x4AE)
- `63` = SNA

### idx 1373 - STATUS_TPM2.PressureValue_RHR_Tyre_2 (0x4AE)
- `63` = SNA

### idx 1374 - STATUS_TSR.ReliableOvertaking (0x380)
- `0` = New
- `1` = Old

### idx 1375 - STATUS_TSR.ReliableTSISign (0x380)
- `0` = Not_Active
- `1` = Active

### idx 1376 - STATUS_TSR.ReliableVehicleSpdLimit (0x380)
- `0` = New
- `1` = Old

### idx 1377 - STATUS_TSR.ReliableVehicleSpdLimitCond (0x380)
- `0` = New
- `1` = Old

### idx 1378 - STATUS_TSR.SignOvertaking (0x380)
- `0` = Sign_Not_Detected
- `1` = Overtaking
- `2` = No_Overtaking

### idx 1379 - STATUS_TSR.SignSupplemOvertaking (0x380)
- `0` = Sign_Not_Detected
- `1` = Generic_Sign
- `2` = Fog
- `3` = Rain
- `4` = Snow
- `5` = Trailer
- `6` = Time
- `7` = Right_Arrow
- `8` = Left_Arrow
- `9` = Night
- `10` = School
- `15` = End_Limit

### idx 1380 - STATUS_TSR.SignSupplemVehicleSpeedLimit (0x380)
- `0` = Sign_Not_Detected
- `1` = Generic_Sign
- `2` = Fog
- `3` = Rain
- `4` = Snow
- `5` = Trailer
- `6` = Time
- `7` = Right_Arrow
- `8` = Left_Arrow
- `9` = Night
- `10` = School
- `11` = School_Zone
- `12` = Work_Zone
- `13` = Truck
- `14` = Weight
- `15` = End_Limit

### idx 1381 - STATUS_TSR.SignVehicleSpeedLimit (0x380)
- `0` = Sign_Not_Detected
- `1` = Speed_Limit_5
- `2` = Speed_Limit_10
- `3` = Speed_Limit_15
- `4` = Speed_Limit_20
- `5` = Speed_Limit_25
- `6` = Speed_Limit_30
- `7` = Speed_Limit_35
- `8` = Speed_Limit_40
- `9` = Speed_Limit_45
- `10` = Speed_Limit_50
- `11` = Speed_Limit_55
- `12` = Speed_Limit_60
- `13` = Speed_Limit_65
- `14` = Speed_Limit_70
- `15` = Speed_Limit_75
- `16` = Speed_Limit_80
- `17` = Speed_Limit_85
- `18` = Speed_Limit_90
- `19` = Speed_Limit_95
- `20` = Speed_Limit_100
- `21` = Speed_Limit_105
- `22` = Speed_Limit_110
- `23` = Speed_Limit_115
- `24` = Speed_Limit_120
- `25` = Speed_Limit_125
- `26` = Speed_Limit_130
- `27` = Speed_Limit_135
- `28` = Speed_Limit_140
- `29` = Speed_Limit_145
- `30` = Speed_Limit_82
- `62` = Speed_Limit_Unlimited
- `63` = End_Speed_Limit

### idx 1382 - STATUS_TSR.SignVehicleSpeedLimitConditional (0x380)
- `0` = Sign_Not_Detected
- `1` = Speed_Limit_5
- `2` = Speed_Limit_10
- `3` = Speed_Limit_15
- `4` = Speed_Limit_20
- `5` = Speed_Limit_25
- `6` = Speed_Limit_30
- `7` = Speed_Limit_35
- `8` = Speed_Limit_40
- `9` = Speed_Limit_45
- `10` = Speed_Limit_50
- `11` = Speed_Limit_55
- `12` = Speed_Limit_60
- `13` = Speed_Limit_65
- `14` = Speed_Limit_70
- `15` = Speed_Limit_75
- `16` = Speed_Limit_80
- `17` = Speed_Limit_85
- `18` = Speed_Limit_90
- `19` = Speed_Limit_95
- `20` = Speed_Limit_100
- `21` = Speed_Limit_105
- `22` = Speed_Limit_110
- `23` = Speed_Limit_115
- `24` = Speed_Limit_120
- `25` = Speed_Limit_125
- `26` = Speed_Limit_130
- `27` = Speed_Limit_135
- `28` = Speed_Limit_140
- `29` = Speed_Limit_145
- `62` = Speed_Limit_Unlimited
- `63` = End_Speed_Limit

### idx 1383 - STATUS_TSR.SpdUnits_CAM (0x380)
- `0` = km_h
- `1` = mph

### idx 1384 - STATUS_TSR.SpeedLimitFilter (0x380)
- `0` = Inconditional
- `1` = Conditional

### idx 1385 - STATUS_TSR.TSRSts (0x380)
- `0` = Not_Active
- `1` = Active
- `2` = Blinded
- `3` = Fault

### idx 1386 - STATUS_TSR.Warning_Type (0x380)
- `0` = No_Warning
- `1` = Blinking
- `2` = Blinking_Chime

### idx 1387 - STATUS_TTM.TrailerConnectionSts (0x7C8)
- `0` = Not_Connected
- `1` = Connected
- `2` = Not_Used
- `3` = SNA

### idx 1388 - STATUS_TTM.TrailerGenericFailSts (0x7C8)
- `0` = No_fault_present
- `1` = Fault_present

### idx 1389 - TBM_FEEDBACK.OBM_DATA_OFFBOARD_ACK (0x7B)
- `0` = NO_ACTION
- `1` = RECEIVED

### idx 1390 - TBM_FEEDBACK.OBM_DATA_ONBOARD_ACK (0x7B)
- `0` = NO_ACTION
- `1` = RECEIVED

### idx 1391 - TBM_Schedule1.TBM_ChargeUntilFull1 (0x5C3)
- `0` = Charge Until Full Not selected
- `1` = Charge Until Full

### idx 1392 - TBM_Schedule1.TBM_Enable_Schedule1 (0x5C3)
- `0` = Disable schedule1
- `1` = Enable schedule1

### idx 1393 - TBM_Schedule1.TBM_End_Time_Hr1 (0x5C3)
- `31` = SNA

### idx 1394 - TBM_Schedule1.TBM_End_Time_Min1 (0x5C3)
- `15` = SNA

### idx 1395 - TBM_Schedule1.TBM_Schedule_Day1 (0x5C3)
- `0` = No Selection
- `1` = M
- `2` = T
- `3` = TM
- `4` = W
- `5` = WM
- `6` = WT
- `7` = WTM
- `8` = Th
- `9` = ThM
- `10` = ThT
- `11` = ThTM
- `12` = ThW
- `13` = ThWM
- `14` = ThWT
- `15` = ThWTM
- `16` = F
- `17` = FM
- `18` = FT
- `19` = FTM
- `20` = FW
- `21` = FWM
- `22` = FWT
- `23` = FWTM
- `24` = FTh
- `25` = FThM
- `26` = FThT
- `27` = FThTM
- `28` = FThW
- `29` = FThWM
- `30` = FThWT
- `31` = FThWTM
- `32` = S
- `33` = SM
- `34` = ST
- `35` = STM
- `36` = SW
- `37` = SWM
- `38` = SWT
- `39` = SWTM
- `40` = STh
- `41` = SThM
- `42` = SThT
- `43` = SThTM
- `44` = SThW
- `45` = SThWM
- `46` = SThWT
- `47` = SThWTM
- `48` = SF
- `49` = SFM
- `50` = SFT
- `51` = SFTM
- `52` = SFW
- `53` = SFWM
- `54` = SFWT
- `55` = SFWTM
- `56` = SFTh
- `57` = SFThM
- `58` = SFThT
- `59` = SFThTM
- `60` = SFThW
- `61` = SFThWM
- `62` = SFThWT
- `63` = SFThWTM
- `64` = Sa
- `65` = SaM
- `66` = SaT
- `67` = SaTM
- `68` = SaW
- `69` = SaWM
- `70` = SaWT
- `71` = SaWTM
- `72` = SaTh
- `73` = SaThM
- `74` = SaThT
- `75` = SaThTM
- `76` = SaThW
- `77` = SaThWM
- `78` = SaThWT
- `79` = SaThWTM
- `80` = SaF
- `81` = SaFM
- `82` = SaFT
- `83` = SaFTM
- `84` = SaFW
- `85` = SaFWM
- `86` = SaFWT
- `87` = SaFWTM
- `88` = SaFTh
- `89` = SaFThM
- `90` = SaFThT
- `91` = SaFThTM
- `92` = SaFThW
- `93` = SaFThWM
- `94` = SaFThWT
- `95` = SaFThWTM
- `96` = SaS
- `97` = SaSM
- `98` = SaST
- `99` = SaSTM
- `100` = SaSW
- `101` = SaSWM
- `102` = SaSWT
- `103` = SaSWTM
- `104` = SaSTh
- `105` = SaSThM
- `106` = SaSThT
- `107` = SaSThTM
- `108` = SaSThW
- `109` = SaSThWM
- `110` = SaSThWT
- `111` = SaSThWTM
- `112` = SaSF
- `113` = SaSFM
- `114` = SaSFT
- `115` = SaSFTM
- `116` = SaSFW
- `117` = SaSFWM
- `118` = SaSFWT
- `119` = SaSFWTM
- `120` = SaSFTh
- `121` = SaSFThM
- `122` = SaSFThT
- `123` = SaSFThTM
- `124` = SaSFThW
- `125` = SaSFThWM
- `126` = SaSFThWT
- `127` = SaSFThWTM
- `255` = SNA

### idx 1396 - TBM_Schedule1.TBM_Start_Time_Hr1 (0x5C3)
- `31` = SNA

### idx 1397 - TBM_Schedule1.TBM_Start_Time_Min1 (0x5C3)
- `15` = SNA

### idx 1398 - TBM_Schedule1.TBM_Submit_Schedule1 (0x5C3)
- `0` = No Change
- `1` = Change in schedule 1

### idx 1399 - TBM_Schedule2.TBM_ChargeUntilFull2 (0x5C1)
- `0` = Charge Until Full Not selected
- `1` = Charge Until Full

### idx 1400 - TBM_Schedule2.TBM_Enable_Schedule2 (0x5C1)
- `0` = Disable schedule1
- `1` = Enable schedule1

### idx 1401 - TBM_Schedule2.TBM_End_Time_Hr2 (0x5C1)
- `31` = SNA

### idx 1402 - TBM_Schedule2.TBM_End_Time_Min2 (0x5C1)
- `15` = SNA

### idx 1403 - TBM_Schedule2.TBM_Schedule_Day2 (0x5C1)
- `0` = No Selection
- `1` = M
- `2` = T
- `3` = TM
- `4` = W
- `5` = WM
- `6` = WT
- `7` = WTM
- `8` = Th
- `9` = ThM
- `10` = ThT
- `11` = ThTM
- `12` = ThW
- `13` = ThWM
- `14` = ThWT
- `15` = ThWTM
- `16` = F
- `17` = FM
- `18` = FT
- `19` = FTM
- `20` = FW
- `21` = FWM
- `22` = FWT
- `23` = FWTM
- `24` = FTh
- `25` = FThM
- `26` = FThT
- `27` = FThTM
- `28` = FThW
- `29` = FThWM
- `30` = FThWT
- `31` = FThWTM
- `32` = S
- `33` = SM
- `34` = ST
- `35` = STM
- `36` = SW
- `37` = SWM
- `38` = SWT
- `39` = SWTM
- `40` = STh
- `41` = SThM
- `42` = SThT
- `43` = SThTM
- `44` = SThW
- `45` = SThWM
- `46` = SThWT
- `47` = SThWTM
- `48` = SF
- `49` = SFM
- `50` = SFT
- `51` = SFTM
- `52` = SFW
- `53` = SFWM
- `54` = SFWT
- `55` = SFWTM
- `56` = SFTh
- `57` = SFThM
- `58` = SFThT
- `59` = SFThTM
- `60` = SFThW
- `61` = SFThWM
- `62` = SFThWT
- `63` = SFThWTM
- `64` = Sa
- `65` = SaM
- `66` = SaT
- `67` = SaTM
- `68` = SaW
- `69` = SaWM
- `70` = SaWT
- `71` = SaWTM
- `72` = SaTh
- `73` = SaThM
- `74` = SaThT
- `75` = SaThTM
- `76` = SaThW
- `77` = SaThWM
- `78` = SaThWT
- `79` = SaThWTM
- `80` = SaF
- `81` = SaFM
- `82` = SaFT
- `83` = SaFTM
- `84` = SaFW
- `85` = SaFWM
- `86` = SaFWT
- `87` = SaFWTM
- `88` = SaFTh
- `89` = SaFThM
- `90` = SaFThT
- `91` = SaFThTM
- `92` = SaFThW
- `93` = SaFThWM
- `94` = SaFThWT
- `95` = SaFThWTM
- `96` = SaS
- `97` = SaSM
- `98` = SaST
- `99` = SaSTM
- `100` = SaSW
- `101` = SaSWM
- `102` = SaSWT
- `103` = SaSWTM
- `104` = SaSTh
- `105` = SaSThM
- `106` = SaSThT
- `107` = SaSThTM
- `108` = SaSThW
- `109` = SaSThWM
- `110` = SaSThWT
- `111` = SaSThWTM
- `112` = SaSF
- `113` = SaSFM
- `114` = SaSFT
- `115` = SaSFTM
- `116` = SaSFW
- `117` = SaSFWM
- `118` = SaSFWT
- `119` = SaSFWTM
- `120` = SaSFTh
- `121` = SaSFThM
- `122` = SaSFThT
- `123` = SaSFThTM
- `124` = SaSFThW
- `125` = SaSFThWM
- `126` = SaSFThWT
- `127` = SaSFThWTM
- `255` = SNA

### idx 1404 - TBM_Schedule2.TBM_Start_Time_Hr2 (0x5C1)
- `31` = SNA

### idx 1405 - TBM_Schedule2.TBM_Start_Time_Min2 (0x5C1)
- `15` = SNA

### idx 1406 - TBM_Schedule2.TBM_Submit_Schedule2 (0x5C1)
- `0` = No Change
- `1` = Change in schedule 1

### idx 1419 - TOTAL_BRAKE_TORQUE_HCP.CmndTotBrkFrictTorq (0x10F)
- `16383` = SNA

### idx 1420 - TOTAL_BRAKE_TORQUE_HCP.DrvrIntdTotalBrkTorq (0x10F)
- `16383` = SNA

### idx 1421 - TPM_CAL.CalibrationAck (0x3E8)
- `0` = Idle
- `1` = Accepted 
- `2` = Rejected
- `3` = Not_Used

### idx 1422 - TPM_CAL.CalibrationSts (0x3E8)
- `0` = Calibrated
- `1` = Under calibration
- `2` = Not Calibrated
- `3` = Not_Used

### idx 1424 - TRANSM_MOT1.EngTrq_Rq_TCM (0xF0)
- `2047` = SNA

### idx 1425 - TRANSM_MOT1.EngTrq_Rq_TCM_Slow (0xF0)
- `2047` = SNA

### idx 1426 - TRANSM_MOT1.MaxTrqDes (0xF0)
- `2047` = SNA

### idx 1428 - TRANSM_MOT1.TorqueConverterSTO (0xF0)
- `0` = Not_Active
- `1` = Active

### idx 1429 - TRANSM_MOT1.TorqueConverterSts (0xF0)
- `0` = Lock_up_clutch_opened
- `1` = Lock_up_clutch_is_slipping
- `2` = Lock_up_clutch_closed
- `3` = SNA

### idx 1430 - TRANSM_MOT1.TransRequestFuelOn (0xF0)
- `0` = Not_Active
- `1` = Active

### idx 1431 - TRANSM_MOT1.TrqCtrlModeReq (0xF0)
- `0` = None
- `1` = TRQ_INC
- `2` = TRQ_DEC
- `3` = SNA

### idx 1432 - TRANSM_MOT1.TrqCtrlModeReq_Slow (0xF0)
- `0` = NONE
- `1` = TRQ_INC
- `2` = TRQ_DEC
- `3` = SNA

### idx 1434 - TRANSM_MOT2.FANRequestNCA (0x1F7)
- `0` = Off
- `1` = LowSpeed
- `2` = highSpeed
- `3` = SNA

### idx 1436 - TRANSM_MOT2.OUTPUT_SPEED (0x1F7)
- `65535` = SNA

### idx 1437 - TRANSM_MOT2.TransmissionTemperature (0x1F7)
- `63` = SNA

### idx 1438 - TRANSM_MOT2.TransmissionTemperatureFailSts (0x1F7)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 1439 - TRANSM_MOT2.TransReadyForESS (0x1F7)
- `0` = Not_Ready
- `1` = Ready

### idx 1440 - TRANSM_MOT2.Trns_EMCC_Achvd (0x1F7)
- `0` = False
- `1` = True

### idx 1441 - TRANSM_MOT2.TRNS_StpSt_FLT (0x1F7)
- `0` = Not_Present
- `1` = Present

### idx 1442 - TRANSM_MOT2.TurbineSpeed (0x1F7)
- `65535` = SNA

### idx 1446 - TRANSM_MOT4.TransLosses (0x160)
- `1023` = SNA

### idx 1448 - TRANSM1.EngTrgtSpdCtrl (0x104)
- `4095` = SNA

### idx 1449 - TRANSM1.EngTrgtSpdCtrl_Active (0x104)
- `0` = Not_Active
- `1` = Active

### idx 1450 - TRANSM1.Garage_SIP (0x104)
- `0` = Not_Active
- `1` = Active

### idx 1453 - TRANSM1.TransmissionNuenSts (0x104)
- `0` = Nuen_Passive
- `1` = Nuen_Entry
- `2` = Nuen_Active
- `3` = Nuen_Exit

### idx 1454 - TRANSM1.TransmissionSailingSts (0x104)
- `0` = Sailing_Not Possible
- `1` = Sailing_Possible_Passive
- `2` = Transition_To_Sailing
- `3` = Sailing_Active
- `4` = Transition_Out_Of_Sailing
- `5` = Sailing_Not_Available
- `15` = SNA

### idx 1455 - TRANSM1.TxIdleRq (0x104)
- `255` = SNA

### idx 1456 - TRANSM2.AGSRequest (0x5A8)
- `0` = No request
- `1` = Open
- `2` = Position_1
- `3` = Position_2
- `4` = Position_3
- `5` = Close
- `7` = SNA

### idx 1457 - TRANSM2.BuzzerReqSts_T2 (0x5A8)
- `0` = OFF
- `1` = Reverse_Gear_Sound_ON
- `2` = Others_case_Sound_ON
- `3` = Not_used

### idx 1458 - TRANSM2.CrankEnable (0x5A8)
- `0` = Disabled
- `1` = Enabled

### idx 1460 - TRANSM2.GearEngaged (0x5A8)
- `0` = Neutral
- `1` = ForwardGear_1
- `2` = ForwardGear_2
- `3` = ForwardGear_3
- `4` = ForwardGear_4
- `5` = ForwardGear_5
- `6` = ForwardGear_6
- `7` = ForwardGear_7
- `8` = ForwardGear_8
- `9` = ForwardGear_9
- `13` = Parking
- `14` = ReverseGear
- `15` = SNA

### idx 1461 - TRANSM2.GearIndicationSts (0x5A8)
- `0` = Normal
- `1` = Blinking

### idx 1462 - TRANSM2.LeverPosition (0x5A8)
- `0` = No_Selection_Active_Or_Available
- `1` = P
- `2` = R
- `3` = N
- `4` = D
- `5` = L
- `6` = TIP_Autostick
- `7` = Plus
- `8` = Minus
- `9` = Sport
- `10` = Not_Used
- `11` = Not_Used
- `12` = Not_Used
- `13` = Not_Used
- `14` = Not_Used
- `15` = SNA

### idx 1463 - TRANSM2.LimpHomeSts (0x5A8)
- `0` = NotActive
- `1` = Active

### idx 1465 - TRANSM2.MIReq (0x5A8)
- `0` = No_EOBD_error
- `1` = EOBD_error

### idx 1466 - TRANSM2.OilTemperatureSts (0x5A8)
- `0` = Normal
- `1` = High

### idx 1467 - TRANSM2.ParkingFailSts (0x5A8)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 1468 - TRANSM2.ParkingSts (0x5A8)
- `0` = Not_Parking
- `1` = Parking

### idx 1469 - TRANSM2.ShiftInProgress (0x5A8)
- `0` = No Shift in progress
- `1` = Shift in progress

### idx 1470 - TRANSM2.ShiftLeverLockReq (0x5A8)
- `0` = Not_Active
- `1` = Active

### idx 1471 - TRANSM2.ShiftLeverPosition (0x5A8)
- `0` = No_Selection_Active_Or_Available
- `1` = P
- `2` = R
- `3` = N
- `4` = D
- `5` = L
- `6` = TIP_Autostick
- `7` = Plus
- `8` = Minus
- `9` = Sport
- `10` = P/R_or_N/R_intermediate
- `11` = N/D_intermediate
- `12` = Not_Used
- `13` = Not_Used
- `14` = Not_Used
- `15` = SNA

### idx 1472 - TRANSM2.ShiftLeverUnLockReq (0x5A8)
- `0` = Not_Active
- `1` = Active

### idx 1473 - TRANSM2.ShiftMapNotAchieved (0x5A8)
- `0` = Achieved
- `1` = Not_Achieved

### idx 1474 - TRANSM2.ShiftModeSts (0x5A8)
- `0` = Manual
- `1` = Automatic

### idx 1475 - TRANSM2.TargetGear (0x5A8)
- `0` = Neutral
- `1` = ForwardGear_1
- `2` = ForwardGear_2
- `3` = ForwardGear_3
- `4` = ForwardGear_4
- `5` = ForwardGear_5
- `6` = ForwardGear_6
- `7` = ForwardGear_7
- `8` = ForwardGear_8
- `9` = ForwardGear_9
- `13` = Parking
- `14` = ReverseGear
- `15` = SNA

### idx 1476 - TRANSM2.TransmissionFailSts (0x5A8)
- `0` = Fail_not_present
- `1` = Fail_present

### idx 1477 - TRANSM2.TransmissionWarnings (0x5A8)
- `0` = No_Warning
- `1` = Press_Brake_Pedal
- `2` = Tip_Not_Available
- `3` = Lower_Gear_Shifts
- `4` = Manual_Mode_Not_Available
- `5` = Insert_N
- `6` = Automatic_Mode_Not_Available
- `7` = Press_Brake_Delayed_Startup_Warning
- `8` = Clutch_Overtemperature
- `9` = Manoeuvre_Not_Allowed
- `10` = Press_Brake_Pedal_Repeat
- `11` = Gear_Not_Available
- `12` = Shift_Not_Allowed
- `13` = Shift_to_Neutral_Then_DR
- `14` = Reduce_Gear_Changes
- `15` = Clutch_Overheater_Must_Cool
- `16` = Service_Transmission
- `17` = Service_Shifter
- `18` = Engage_Park_Brake
- `19` = Trans_Too_Cold_Pls_Wait
- `20` = Push_Button_to_Shift
- `21` = Return_Shifter_To_Home
- `22` = Press_Brake_Push_Button_Shift
- `23` = Service_Trans_Shut_Off
- `24` = Already_in_Des_Gear
- `25` = Start_Engine_to_Shift
- `26` = Service_Trans_Use_Pk_Brk
- `27` = Vehicle_Speed_Too_High
- `28` = Tow_Haul_Not_available
- `29` = Tow_Haul_Disengaged
- `30` = Trans_Cool_Ready_to_Drive
- `31` = Vehicle_Speed_Too_High_to_Shift_P
- `32` = Vehicle_Speed_Too_High_to_Shift_R
- `33` = Vehicle_Speed_Too_High_to_Shift_D
- `34` = Manual_Shift_Temp_Not_Available
- `35` = Vehicle_Speed_Too_High_to_Shift_L/S
- `36` = Shift_to_Park_to_ obtain_drivability
- `37` = Shift_to_Park_to_Start
- `38` = APCM_in_Progress
- `39` = Stop Vehicle to Shift
- `40` = Service Transmission_Stop Vehicle to Shift
- `41` = Service Transmission__Stop Vehicle_Restart Vehicle in P to Continue Driving
- `42` = Service Transmission_Stop Vehicle to Shift _Restart Vehicle in P to Continue Driving
- `43` = Press Brake To Prevent Vehicle From Rolling
- `45` = Trans_Recover_Mode_Warning
- `46` = Press_Brake_To_Start
- `47` = Shift_to_Park
- `51` = Manual_Mode_Active_Hold_Plus_to_Exit

### idx 1478 - TRANSM2.TxDisengaged (0x5A8)
- `0` = Engaged
- `1` = Disengaged

### idx 1479 - TRANSM3.APCM_Rq (0x158)
- `0` = APCM_OFF / OFF
- `1` = APCM_ON / ON
- `2` = APCM_Pending / PENDING
- `3` = SNA

### idx 1481 - TRANSM3.DogClutch_Engagement (0x158)
- `0` = Not_Active
- `1` = Active

### idx 1482 - TRANSM3.DogClutch_SIP (0x158)
- `0` = Not_Active
- `1` = Active

### idx 1484 - TRANSM3.Vehicle_Hold_Rq (0x158)
- `0` = Not_Active
- `1` = Active

### idx 1485 - TRANSM3.Vehicle_Hold_Rq_ValidData (0x158)
- `0` = Valid
- `1` = Not_Valid

### idx 1486 - TRM_CODE_RESPONSE.CodeCheckSts_TRM (0xFD)
- `0` = No_Code
- `1` = CodeCheck_OK
- `2` = CodeCheck_Fault
- `3` = Not_Used

### idx 1489 - TRM_CODE_RESPONSE.ProgrammedSts_TRM (0xFD)
- `0` = Not_Programmed
- `1` = Programmed

### idx 1490 - TRM_CODE_RESPONSE.TxpFound (0xFD)
- `0` = Transponder_Read
- `1` = Transponder_Absent

### idx 1491 - TRM_CODE_RESPONSE.TxpID (0xFD)
- `0` = Transponder_Not_Authenticated
- `1` = Transponder_1_Authenticated
- `2` = Transponder_2_Authenticated
- `3` = Transponder_3_Authenticated
- `4` = Transponder_4_Authenticated
- `5` = Transponder_5_Authenticated
- `6` = Transponder_6_Authenticated
- `7` = Transponder_7_Authenticated
- `8` = Transponder_8_Authenticated
- `9` = Transponder_9_Authenticated
- `10` = Transponder_10_Authenticated
- `11` = Transponder_11_Authenticated
- `12` = Transponder_12_Authenticated
- `13` = Transponder_13_Authenticated
- `14` = Transponder_14_Authenticated
- `15` = Transponder_15_Authenticated

### idx 1499 - TRM_MKP_KEY.FrameNumber (0xF3)
- `0` = Frame_1
- `1` = Frame_2
- `2` = Frame_3
- `3` = Frame_4
- `4` = Frame_5
- `5` = Frame_6
- `6` = Frame_7
- `7` = Frame_8
- `8` = Frame_9
- `9` = Frame_10
- `10` = Frame_11
- `11` = Frame_12
- `12` = Frame_13
- `13` = Frame_14
- `14` = Frame_15
- `15` = Frame_16

### idx 1500 - TRM_MKP_KEY.TotalFrameNumber (0xF3)
- `0` = One_Frame
- `1` = Two_Frames
- `2` = Three_Frames
- `3` = Four_Frames
- `4` = Five_Frames
- `5` = Six_Frames
- `6` = Seven_Frames
- `7` = Eight_Frame
- `8` = Nine_Frames
- `9` = Ten_Frames
- `10` = Eleven_Frames
- `11` = Twelve_Frames
- `12` = Thirteen_Frames
- `13` = Fourteen_Frames
- `14` = Fifteen_Frames
- `15` = Sixteen_Frames

### idx 1504 - VIN.VIN_MSG (0x416)
- `0` = VIN_LO
- `1` = VIN_MID
- `2` = VIN_HI
- `3` = SNA

### idx 1505 - WAKE_C_BCM.MainWakeSts_BCM (0x1E340000)
- `0` = Not_Active
- `1` = Active

### idx 1506 - WAKE_C_BCM.Node0 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1507 - WAKE_C_BCM.Node1 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1508 - WAKE_C_BCM.Node10 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1509 - WAKE_C_BCM.Node11 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1510 - WAKE_C_BCM.Node12 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1511 - WAKE_C_BCM.Node13 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1512 - WAKE_C_BCM.Node14 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1513 - WAKE_C_BCM.Node15 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1514 - WAKE_C_BCM.Node16 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1515 - WAKE_C_BCM.Node17 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1516 - WAKE_C_BCM.Node18 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1517 - WAKE_C_BCM.Node19 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1518 - WAKE_C_BCM.Node2 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1519 - WAKE_C_BCM.Node20 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1520 - WAKE_C_BCM.Node21 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1521 - WAKE_C_BCM.Node22 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1522 - WAKE_C_BCM.Node23 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1523 - WAKE_C_BCM.Node24 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1524 - WAKE_C_BCM.Node25 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1525 - WAKE_C_BCM.Node26 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1526 - WAKE_C_BCM.Node27 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1527 - WAKE_C_BCM.Node28 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1528 - WAKE_C_BCM.Node29 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1529 - WAKE_C_BCM.Node3 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1530 - WAKE_C_BCM.Node30 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1531 - WAKE_C_BCM.Node31 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1532 - WAKE_C_BCM.Node4 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1533 - WAKE_C_BCM.Node5 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1534 - WAKE_C_BCM.Node6 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1535 - WAKE_C_BCM.Node7 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1536 - WAKE_C_BCM.Node8 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1537 - WAKE_C_BCM.Node9 (0x1E340000)
- `0` = Not_active
- `1` = Active

### idx 1539 - WAKE_C_BCM.WakeRsn_BCM (0x1E340000)
- `0` = Diag
- `1` = Network
- `2` = WakeRsn2
- `3` = WakeRsn3
- `4` = WakeRsn4
- `5` = WakeRsn5
- `6` = WakeRsn6
- `7` = WakeRsn7
- `8` = WakeRsn8
- `9` = WakeRsn9
- `10` = WakeRsn10
- `11` = WakeRsn11
- `12` = WakeRsn12
- `13` = WakeRsn13
- `14` = WakeRsn14
- `15` = WakeRsn15
- `16` = WakeRsn16
- `17` = WakeRsn17
- `18` = WakeRsn18
- `19` = WakeRsn19
- `20` = WakeRsn20
- `21` = WakeRsn21
- `22` = WakeRsn22
- `23` = WakeRsn23
- `24` = WakeRsn24
- `25` = WakeRsn25
- `26` = WakeRsn26
- `27` = WakeRsn27
- `28` = WakeRsn28
- `29` = WakeRsn29
- `30` = WakeRsn30
- `31` = WakeRsn31
- `32` = WakeRsn32
- `33` = WakeRsn33
- `34` = WakeRsn34
- `35` = WakeRsn35
- `36` = WakeRsn36
- `37` = WakeRsn37
- `38` = WakeRsn38
- `39` = WakeRsn39
- `40` = WakeRsn40
- `41` = WakeRsn41
- `42` = WakeRsn42
- `43` = WakeRsn43
- `44` = WakeRsn44
- `45` = WakeRsn45
- `46` = WakeRsn46
- `47` = WakeRsn47
- `48` = WakeRsn48
- `49` = WakeRsn49
- `50` = WakeRsn50
- `51` = WakeRsn51
- `52` = WakeRsn52
- `53` = WakeRsn53
- `54` = WakeRsn54
- `55` = WakeRsn55
- `56` = WakeRsn56
- `57` = WakeRsn57
- `58` = WakeRsn58
- `59` = WakeRsn59
- `60` = WakeRsn60
- `61` = WakeRsn61
- `62` = WakeRsn62
- `63` = WakeRsn63
- `64` = WakeRsn64
- `65` = WakeRsn65
- `66` = WakeRsn66
- `67` = WakeRsn67
- `68` = WakeRsn68
- `69` = WakeRsn69
- `70` = WakeRsn70
- `71` = WakeRsn71
- `72` = WakeRsn72
- `73` = WakeRsn73
- `74` = WakeRsn74
- `75` = WakeRsn75
- `76` = WakeRsn76
- `77` = WakeRsn77
- `78` = WakeRsn78
- `79` = WakeRsn79
- `80` = WakeRsn80
- `81` = WakeRsn81
- `82` = WakeRsn82
- `83` = WakeRsn83
- `84` = WakeRsn84
- `85` = WakeRsn85
- `86` = WakeRsn86
- `87` = WakeRsn87
- `88` = WakeRsn88
- `89` = WakeRsn89
- `90` = WakeRsn90
- `91` = WakeRsn91
- `92` = WakeRsn92
- `93` = WakeRsn93
- `94` = WakeRsn94
- `95` = WakeRsn95
- `96` = WakeRsn96
- `97` = WakeRsn97
- `98` = WakeRsn98
- `99` = WakeRsn99
- `100` = WakeRsn100
- `101` = WakeRsn101
- `102` = WakeRsn102
- `103` = WakeRsn103
- `104` = WakeRsn104
- `105` = WakeRsn105
- `106` = WakeRsn106
- `107` = WakeRsn107
- `108` = WakeRsn108
- `109` = WakeRsn109
- `110` = WakeRsn110
- `111` = WakeRsn111
- `112` = WakeRsn112
- `113` = WakeRsn113
- `114` = WakeRsn114
- `115` = WakeRsn115
- `116` = WakeRsn116
- `117` = WakeRsn117
- `118` = WakeRsn118
- `119` = WakeRsn119
- `120` = WakeRsn120
- `121` = WakeRsn121
- `122` = WakeRsn122
- `123` = WakeRsn123
- `124` = WakeRsn124
- `125` = WakeRsn125
- `126` = WakeRsn126
- `127` = WakeRsn127

### idx 1541 - WAKE_C_BSM.WakeReq_BSM (0x1E340006)
- `0` = NotActive
- `1` = Active

### idx 1542 - WAKE_C_BSM.WakeRsn_BSM (0x1E340006)
- `0` = Diag
- `1` = Network
- `2` = WakeRsn2
- `3` = WakeRsn3
- `4` = WakeRsn4
- `5` = WakeRsn5
- `6` = WakeRsn6
- `7` = WakeRsn7
- `8` = WakeRsn8
- `9` = WakeRsn9
- `10` = WakeRsn10
- `11` = WakeRsn11
- `12` = WakeRsn12
- `13` = WakeRsn13
- `14` = WakeRsn14
- `15` = WakeRsn15
- `16` = WakeRsn16
- `17` = WakeRsn17
- `18` = WakeRsn18
- `19` = WakeRsn19
- `20` = WakeRsn20
- `21` = WakeRsn21
- `22` = WakeRsn22
- `23` = WakeRsn23
- `24` = WakeRsn24
- `25` = WakeRsn25
- `26` = WakeRsn26
- `27` = WakeRsn27
- `28` = WakeRsn28
- `29` = WakeRsn29
- `30` = WakeRsn30
- `31` = WakeRsn31
- `32` = WakeRsn32
- `33` = WakeRsn33
- `34` = WakeRsn34
- `35` = WakeRsn35
- `36` = WakeRsn36
- `37` = WakeRsn37
- `38` = WakeRsn38
- `39` = WakeRsn39
- `40` = WakeRsn40
- `41` = WakeRsn41
- `42` = WakeRsn42
- `43` = WakeRsn43
- `44` = WakeRsn44
- `45` = WakeRsn45
- `46` = WakeRsn46
- `47` = WakeRsn47
- `48` = WakeRsn48
- `49` = WakeRsn49
- `50` = WakeRsn50
- `51` = WakeRsn51
- `52` = WakeRsn52
- `53` = WakeRsn53
- `54` = WakeRsn54
- `55` = WakeRsn55
- `56` = WakeRsn56
- `57` = WakeRsn57
- `58` = WakeRsn58
- `59` = WakeRsn59
- `60` = WakeRsn60
- `61` = WakeRsn61
- `62` = WakeRsn62
- `63` = WakeRsn63
- `64` = WakeRsn64
- `65` = WakeRsn65
- `66` = WakeRsn66
- `67` = WakeRsn67
- `68` = WakeRsn68
- `69` = WakeRsn69
- `70` = WakeRsn70
- `71` = WakeRsn71
- `72` = WakeRsn72
- `73` = WakeRsn73
- `74` = WakeRsn74
- `75` = WakeRsn75
- `76` = WakeRsn76
- `77` = WakeRsn77
- `78` = WakeRsn78
- `79` = WakeRsn79
- `80` = WakeRsn80
- `81` = WakeRsn81
- `82` = WakeRsn82
- `83` = WakeRsn83
- `84` = WakeRsn84
- `85` = WakeRsn85
- `86` = WakeRsn86
- `87` = WakeRsn87
- `88` = WakeRsn88
- `89` = WakeRsn89
- `90` = WakeRsn90
- `91` = WakeRsn91
- `92` = WakeRsn92
- `93` = WakeRsn93
- `94` = WakeRsn94
- `95` = WakeRsn95
- `96` = WakeRsn96
- `97` = WakeRsn97
- `98` = WakeRsn98
- `99` = WakeRsn99
- `100` = WakeRsn100
- `101` = WakeRsn101
- `102` = WakeRsn102
- `103` = WakeRsn103
- `104` = WakeRsn104
- `105` = WakeRsn105
- `106` = WakeRsn106
- `107` = WakeRsn107
- `108` = WakeRsn108
- `109` = WakeRsn109
- `110` = WakeRsn110
- `111` = WakeRsn111
- `112` = WakeRsn112
- `113` = WakeRsn113
- `114` = WakeRsn114
- `115` = WakeRsn115
- `116` = WakeRsn116
- `117` = WakeRsn117
- `118` = WakeRsn118
- `119` = WakeRsn119
- `120` = WakeRsn120
- `121` = WakeRsn121
- `122` = WakeRsn122
- `123` = WakeRsn123
- `124` = WakeRsn124
- `125` = WakeRsn125
- `126` = WakeRsn126
- `127` = WakeRsn127

### idx 1545 - WAKE_C_EVCU.WakeReq_EVCU (0x1E340040)
- `0` = NotActive
- `1` = Active

### idx 1546 - WAKE_C_EVCU.WakeRsn_EVCU (0x1E340040)
- `0` = Diag
- `1` = Network
- `2` = WakeRsn2
- `3` = WakeRsn3
- `4` = WakeRsn4
- `5` = WakeRsn5
- `6` = WakeRsn6
- `7` = WakeRsn7
- `8` = WakeRsn8
- `9` = WakeRsn9
- `10` = WakeRsn10
- `11` = WakeRsn11
- `12` = WakeRsn12
- `13` = WakeRsn13
- `14` = WakeRsn14
- `15` = WakeRsn15
- `16` = WakeRsn16
- `17` = WakeRsn17
- `18` = WakeRsn18
- `19` = WakeRsn19
- `20` = WakeRsn20
- `21` = WakeRsn21
- `22` = WakeRsn22
- `23` = WakeRsn23
- `24` = WakeRsn24
- `25` = WakeRsn25
- `26` = WakeRsn26
- `27` = WakeRsn27
- `28` = WakeRsn28
- `29` = WakeRsn29
- `30` = WakeRsn30
- `31` = WakeRsn31
- `32` = WakeRsn32
- `33` = WakeRsn33
- `34` = WakeRsn34
- `35` = WakeRsn35
- `36` = WakeRsn36
- `37` = WakeRsn37
- `38` = WakeRsn38
- `39` = WakeRsn39
- `40` = WakeRsn40
- `41` = WakeRsn41
- `42` = WakeRsn42
- `43` = WakeRsn43
- `44` = WakeRsn44
- `45` = WakeRsn45
- `46` = WakeRsn46
- `47` = WakeRsn47
- `48` = WakeRsn48
- `49` = WakeRsn49
- `50` = WakeRsn50
- `51` = WakeRsn51
- `52` = WakeRsn52
- `53` = WakeRsn53
- `54` = WakeRsn54
- `55` = WakeRsn55
- `56` = WakeRsn56
- `57` = WakeRsn57
- `58` = WakeRsn58
- `59` = WakeRsn59
- `60` = WakeRsn60
- `61` = WakeRsn61
- `62` = WakeRsn62
- `63` = WakeRsn63
- `64` = WakeRsn64
- `65` = WakeRsn65
- `66` = WakeRsn66
- `67` = WakeRsn67
- `68` = WakeRsn68
- `69` = WakeRsn69
- `70` = WakeRsn70
- `71` = WakeRsn71
- `72` = WakeRsn72
- `73` = WakeRsn73
- `74` = WakeRsn74
- `75` = WakeRsn75
- `76` = WakeRsn76
- `77` = WakeRsn77
- `78` = WakeRsn78
- `79` = WakeRsn79
- `80` = WakeRsn80
- `81` = WakeRsn81
- `82` = WakeRsn82
- `83` = WakeRsn83
- `84` = WakeRsn84
- `85` = WakeRsn85
- `86` = WakeRsn86
- `87` = WakeRsn87
- `88` = WakeRsn88
- `89` = WakeRsn89
- `90` = WakeRsn90
- `91` = WakeRsn91
- `92` = WakeRsn92
- `93` = WakeRsn93
- `94` = WakeRsn94
- `95` = WakeRsn95
- `96` = WakeRsn96
- `97` = WakeRsn97
- `98` = WakeRsn98
- `99` = WakeRsn99
- `100` = WakeRsn100
- `101` = WakeRsn101
- `102` = WakeRsn102
- `103` = WakeRsn103
- `104` = WakeRsn104
- `105` = WakeRsn105
- `106` = WakeRsn106
- `107` = WakeRsn107
- `108` = WakeRsn108
- `109` = WakeRsn109
- `110` = WakeRsn110
- `111` = WakeRsn111
- `112` = WakeRsn112
- `113` = WakeRsn113
- `114` = WakeRsn114
- `115` = WakeRsn115
- `116` = WakeRsn116
- `117` = WakeRsn117
- `118` = WakeRsn118
- `119` = WakeRsn119
- `120` = WakeRsn120
- `121` = WakeRsn121
- `122` = WakeRsn122
- `123` = WakeRsn123
- `124` = WakeRsn124
- `125` = WakeRsn125
- `126` = WakeRsn126
- `127` = WakeRsn127

### idx 1549 - WAKE_C_IPC.WakeReq_IPC (0x1E340003)
- `0` = NotActive
- `1` = Active

### idx 1550 - WAKE_C_IPC.WakeRsn_IPC (0x1E340003)
- `0` = Diag
- `1` = Network
- `2` = WakeRsn2
- `3` = WakeRsn3
- `4` = WakeRsn4
- `5` = WakeRsn5
- `6` = WakeRsn6
- `7` = WakeRsn7
- `8` = WakeRsn8
- `9` = WakeRsn9
- `10` = WakeRsn10
- `11` = WakeRsn11
- `12` = WakeRsn12
- `13` = WakeRsn13
- `14` = WakeRsn14
- `15` = WakeRsn15
- `16` = WakeRsn16
- `17` = WakeRsn17
- `18` = WakeRsn18
- `19` = WakeRsn19
- `20` = WakeRsn20
- `21` = WakeRsn21
- `22` = WakeRsn22
- `23` = WakeRsn23
- `24` = WakeRsn24
- `25` = WakeRsn25
- `26` = WakeRsn26
- `27` = WakeRsn27
- `28` = WakeRsn28
- `29` = WakeRsn29
- `30` = WakeRsn30
- `31` = WakeRsn31
- `32` = WakeRsn32
- `33` = WakeRsn33
- `34` = WakeRsn34
- `35` = WakeRsn35
- `36` = WakeRsn36
- `37` = WakeRsn37
- `38` = WakeRsn38
- `39` = WakeRsn39
- `40` = WakeRsn40
- `41` = WakeRsn41
- `42` = WakeRsn42
- `43` = WakeRsn43
- `44` = WakeRsn44
- `45` = WakeRsn45
- `46` = WakeRsn46
- `47` = WakeRsn47
- `48` = WakeRsn48
- `49` = WakeRsn49
- `50` = WakeRsn50
- `51` = WakeRsn51
- `52` = WakeRsn52
- `53` = WakeRsn53
- `54` = WakeRsn54
- `55` = WakeRsn55
- `56` = WakeRsn56
- `57` = WakeRsn57
- `58` = WakeRsn58
- `59` = WakeRsn59
- `60` = WakeRsn60
- `61` = WakeRsn61
- `62` = WakeRsn62
- `63` = WakeRsn63
- `64` = WakeRsn64
- `65` = WakeRsn65
- `66` = WakeRsn66
- `67` = WakeRsn67
- `68` = WakeRsn68
- `69` = WakeRsn69
- `70` = WakeRsn70
- `71` = WakeRsn71
- `72` = WakeRsn72
- `73` = WakeRsn73
- `74` = WakeRsn74
- `75` = WakeRsn75
- `76` = WakeRsn76
- `77` = WakeRsn77
- `78` = WakeRsn78
- `79` = WakeRsn79
- `80` = WakeRsn80
- `81` = WakeRsn81
- `82` = WakeRsn82
- `83` = WakeRsn83
- `84` = WakeRsn84
- `85` = WakeRsn85
- `86` = WakeRsn86
- `87` = WakeRsn87
- `88` = WakeRsn88
- `89` = WakeRsn89
- `90` = WakeRsn90
- `91` = WakeRsn91
- `92` = WakeRsn92
- `93` = WakeRsn93
- `94` = WakeRsn94
- `95` = WakeRsn95
- `96` = WakeRsn96
- `97` = WakeRsn97
- `98` = WakeRsn98
- `99` = WakeRsn99
- `100` = WakeRsn100
- `101` = WakeRsn101
- `102` = WakeRsn102
- `103` = WakeRsn103
- `104` = WakeRsn104
- `105` = WakeRsn105
- `106` = WakeRsn106
- `107` = WakeRsn107
- `108` = WakeRsn108
- `109` = WakeRsn109
- `110` = WakeRsn110
- `111` = WakeRsn111
- `112` = WakeRsn112
- `113` = WakeRsn113
- `114` = WakeRsn114
- `115` = WakeRsn115
- `116` = WakeRsn116
- `117` = WakeRsn117
- `118` = WakeRsn118
- `119` = WakeRsn119
- `120` = WakeRsn120
- `121` = WakeRsn121
- `122` = WakeRsn122
- `123` = WakeRsn123
- `124` = WakeRsn124
- `125` = WakeRsn125
- `126` = WakeRsn126
- `127` = WakeRsn127

### idx 1553 - WAKE_C_RFHM.WakeReq_RFHM (0x1E340041)
- `0` = NotActive
- `1` = Active

### idx 1554 - WAKE_C_RFHM.WakeRsn_RFHM (0x1E340041)
- `0` = Diag
- `1` = Network
- `2` = WakeRsn2
- `3` = WakeRsn3
- `4` = WakeRsn4
- `5` = WakeRsn5
- `6` = WakeRsn6
- `7` = WakeRsn7
- `8` = WakeRsn8
- `9` = WakeRsn9
- `10` = WakeRsn10
- `11` = WakeRsn11
- `12` = WakeRsn12
- `13` = WakeRsn13
- `14` = WakeRsn14
- `15` = WakeRsn15
- `16` = WakeRsn16
- `17` = WakeRsn17
- `18` = WakeRsn18
- `19` = WakeRsn19
- `20` = WakeRsn20
- `21` = WakeRsn21
- `22` = WakeRsn22
- `23` = WakeRsn23
- `24` = WakeRsn24
- `25` = WakeRsn25
- `26` = WakeRsn26
- `27` = WakeRsn27
- `28` = WakeRsn28
- `29` = WakeRsn29
- `30` = WakeRsn30
- `31` = WakeRsn31
- `32` = WakeRsn32
- `33` = WakeRsn33
- `34` = WakeRsn34
- `35` = WakeRsn35
- `36` = WakeRsn36
- `37` = WakeRsn37
- `38` = WakeRsn38
- `39` = WakeRsn39
- `40` = WakeRsn40
- `41` = WakeRsn41
- `42` = WakeRsn42
- `43` = WakeRsn43
- `44` = WakeRsn44
- `45` = WakeRsn45
- `46` = WakeRsn46
- `47` = WakeRsn47
- `48` = WakeRsn48
- `49` = WakeRsn49
- `50` = WakeRsn50
- `51` = WakeRsn51
- `52` = WakeRsn52
- `53` = WakeRsn53
- `54` = WakeRsn54
- `55` = WakeRsn55
- `56` = WakeRsn56
- `57` = WakeRsn57
- `58` = WakeRsn58
- `59` = WakeRsn59
- `60` = WakeRsn60
- `61` = WakeRsn61
- `62` = WakeRsn62
- `63` = WakeRsn63
- `64` = WakeRsn64
- `65` = WakeRsn65
- `66` = WakeRsn66
- `67` = WakeRsn67
- `68` = WakeRsn68
- `69` = WakeRsn69
- `70` = WakeRsn70
- `71` = WakeRsn71
- `72` = WakeRsn72
- `73` = WakeRsn73
- `74` = WakeRsn74
- `75` = WakeRsn75
- `76` = WakeRsn76
- `77` = WakeRsn77
- `78` = WakeRsn78
- `79` = WakeRsn79
- `80` = WakeRsn80
- `81` = WakeRsn81
- `82` = WakeRsn82
- `83` = WakeRsn83
- `84` = WakeRsn84
- `85` = WakeRsn85
- `86` = WakeRsn86
- `87` = WakeRsn87
- `88` = WakeRsn88
- `89` = WakeRsn89
- `90` = WakeRsn90
- `91` = WakeRsn91
- `92` = WakeRsn92
- `93` = WakeRsn93
- `94` = WakeRsn94
- `95` = WakeRsn95
- `96` = WakeRsn96
- `97` = WakeRsn97
- `98` = WakeRsn98
- `99` = WakeRsn99
- `100` = WakeRsn100
- `101` = WakeRsn101
- `102` = WakeRsn102
- `103` = WakeRsn103
- `104` = WakeRsn104
- `105` = WakeRsn105
- `106` = WakeRsn106
- `107` = WakeRsn107
- `108` = WakeRsn108
- `109` = WakeRsn109
- `110` = WakeRsn110
- `111` = WakeRsn111
- `112` = WakeRsn112
- `113` = WakeRsn113
- `114` = WakeRsn114
- `115` = WakeRsn115
- `116` = WakeRsn116
- `117` = WakeRsn117
- `118` = WakeRsn118
- `119` = WakeRsn119
- `120` = WakeRsn120
- `121` = WakeRsn121
- `122` = WakeRsn122
- `123` = WakeRsn123
- `124` = WakeRsn124
- `125` = WakeRsn125
- `126` = WakeRsn126
- `127` = WakeRsn127

### idx 1557 - WAKE_C_SHIFTER.WakeReq_SHIFTER (0x1E340016)
- `0` = NotActive
- `1` = Active

### idx 1558 - WAKE_C_SHIFTER.WakeRsn_SHIFTER (0x1E340016)
- `0` = Diag
- `1` = Network
- `2` = WakeRsn2
- `3` = WakeRsn3
- `4` = WakeRsn4
- `5` = WakeRsn5
- `6` = WakeRsn6
- `7` = WakeRsn7
- `8` = WakeRsn8
- `9` = WakeRsn9
- `10` = WakeRsn10
- `11` = WakeRsn11
- `12` = WakeRsn12
- `13` = WakeRsn13
- `14` = WakeRsn14
- `15` = WakeRsn15
- `16` = WakeRsn16
- `17` = WakeRsn17
- `18` = WakeRsn18
- `19` = WakeRsn19
- `20` = WakeRsn20
- `21` = WakeRsn21
- `22` = WakeRsn22
- `23` = WakeRsn23
- `24` = WakeRsn24
- `25` = WakeRsn25
- `26` = WakeRsn26
- `27` = WakeRsn27
- `28` = WakeRsn28
- `29` = WakeRsn29
- `30` = WakeRsn30
- `31` = WakeRsn31
- `32` = WakeRsn32
- `33` = WakeRsn33
- `34` = WakeRsn34
- `35` = WakeRsn35
- `36` = WakeRsn36
- `37` = WakeRsn37
- `38` = WakeRsn38
- `39` = WakeRsn39
- `40` = WakeRsn40
- `41` = WakeRsn41
- `42` = WakeRsn42
- `43` = WakeRsn43
- `44` = WakeRsn44
- `45` = WakeRsn45
- `46` = WakeRsn46
- `47` = WakeRsn47
- `48` = WakeRsn48
- `49` = WakeRsn49
- `50` = WakeRsn50
- `51` = WakeRsn51
- `52` = WakeRsn52
- `53` = WakeRsn53
- `54` = WakeRsn54
- `55` = WakeRsn55
- `56` = WakeRsn56
- `57` = WakeRsn57
- `58` = WakeRsn58
- `59` = WakeRsn59
- `60` = WakeRsn60
- `61` = WakeRsn61
- `62` = WakeRsn62
- `63` = WakeRsn63
- `64` = WakeRsn64
- `65` = WakeRsn65
- `66` = WakeRsn66
- `67` = WakeRsn67
- `68` = WakeRsn68
- `69` = WakeRsn69
- `70` = WakeRsn70
- `71` = WakeRsn71
- `72` = WakeRsn72
- `73` = WakeRsn73
- `74` = WakeRsn74
- `75` = WakeRsn75
- `76` = WakeRsn76
- `77` = WakeRsn77
- `78` = WakeRsn78
- `79` = WakeRsn79
- `80` = WakeRsn80
- `81` = WakeRsn81
- `82` = WakeRsn82
- `83` = WakeRsn83
- `84` = WakeRsn84
- `85` = WakeRsn85
- `86` = WakeRsn86
- `87` = WakeRsn87
- `88` = WakeRsn88
- `89` = WakeRsn89
- `90` = WakeRsn90
- `91` = WakeRsn91
- `92` = WakeRsn92
- `93` = WakeRsn93
- `94` = WakeRsn94
- `95` = WakeRsn95
- `96` = WakeRsn96
- `97` = WakeRsn97
- `98` = WakeRsn98
- `99` = WakeRsn99
- `100` = WakeRsn100
- `101` = WakeRsn101
- `102` = WakeRsn102
- `103` = WakeRsn103
- `104` = WakeRsn104
- `105` = WakeRsn105
- `106` = WakeRsn106
- `107` = WakeRsn107
- `108` = WakeRsn108
- `109` = WakeRsn109
- `110` = WakeRsn110
- `111` = WakeRsn111
- `112` = WakeRsn112
- `113` = WakeRsn113
- `114` = WakeRsn114
- `115` = WakeRsn115
- `116` = WakeRsn116
- `117` = WakeRsn117
- `118` = WakeRsn118
- `119` = WakeRsn119
- `120` = WakeRsn120
- `121` = WakeRsn121
- `122` = WakeRsn122
- `123` = WakeRsn123
- `124` = WakeRsn124
- `125` = WakeRsn125
- `126` = WakeRsn126
- `127` = WakeRsn127

### idx 1561 - WHEEL_INFO.LHF_FastPulseCounter (0x116)
- `255` = SNA

### idx 1562 - WHEEL_INFO.LHF_Spin (0x116)
- `0` = Stand_Still
- `1` = Forward
- `2` = Backward
- `3` = SNA

### idx 1563 - WHEEL_INFO.LHF_WheelSensorFailSts (0x116)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1564 - WHEEL_INFO.LHR_FastPulseCounter (0x116)
- `255` = SNA

### idx 1565 - WHEEL_INFO.LHR_Spin (0x116)
- `0` = Stand_Still
- `1` = Forward
- `2` = Backward
- `3` = SNA

### idx 1566 - WHEEL_INFO.LHR_WheelSensorFailSts (0x116)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1568 - WHEEL_INFO.RHF_FastPulseCounter (0x116)
- `255` = SNA

### idx 1569 - WHEEL_INFO.RHF_Spin (0x116)
- `0` = Stand_Still
- `1` = Forward
- `2` = Backward
- `3` = SNA

### idx 1570 - WHEEL_INFO.RHF_WheelSensorFailSts (0x116)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1571 - WHEEL_INFO.RHR_FastPulseCounter (0x116)
- `255` = SNA

### idx 1572 - WHEEL_INFO.RHR_Spin (0x116)
- `0` = Stand_Still
- `1` = Forward
- `2` = Backward
- `3` = SNA

### idx 1573 - WHEEL_INFO.RHR_WheelSensorFailSts (0x116)
- `0` = Fail_Not_Present
- `1` = Fail_Present

### idx 1575 - WHEEL_SPEED.LHFWheelSpeed (0xEE)
- `8191` = SNA

### idx 1576 - WHEEL_SPEED.LHRWheelSpeed (0xEE)
- `8191` = SNA

### idx 1578 - WHEEL_SPEED.RHFWheelSpeed (0xEE)
- `8191` = SNA

### idx 1579 - WHEEL_SPEED.RHRWheelSpeed (0xEE)
- `8191` = SNA
