function LanguageControllerZH() {
	this.language = {
		buttons : {
			"queryDataStoresBtn" : "查询数据存储",
			"queryPortGroupsBtn" : "查询端口组",
			"getPortGroupsBtn" : "获取端口组标识",
			"getDatastoreUrnBtn" : "获取存储URN标识",
			"addUserDiskBtn" : "添加磁盘信息",
			"addNicsBtn" : "添加网卡",
			"createVMBtn" : "创建虚拟机"
		},

		titles : {
			"descriptionFC" : "此Demo包含了eSDK Cloud FC子系统3个接口的使用示例：queryPortGroups(查询端口组)，queryDataStores(查询数据存储)，createVM(创建虚拟机)",
			"copyright" : "版权所有 © 华为技术有限公司 1998-2016。 保留一切权利。粤A2-20044005号",
			"description" : "描述",
			"exection" : "执行",
			"sourceCode" : "源码",
			"inputParam" : "输入:",
			"outputParam" : "输出:",
			"resultCode" : "结果码:",
			"inputParameterDesc" : "输入参数描述:",
			"outputParameterDesc" : "返回参数描述:",
			"inputParameterTd" : "参数",
			"inputTypeTd" : "类型",
			"inputRestrictionTd" : "约束",
			"inputDescriptionTd" : "描述",
			"outputParameterTd" : "参数",
			"outputTypeTd" : "类型",
			"outputRestrictionTd" : "约束",
			"outputDescriptionTd" : "描述",
			"optional" : "可选",
			"required" : "必选",
			"alternative" : "二者选一",
			"codeTd" : "成功返回“0000000000”，失败返回错误码。",
			"messageTd" : "错误信息。",
			"operationSuccess" : "操作成功",
			"operationFailed" : "操作失败",

			"FMTree_1_span" : "典型功能",
			"FMTree_2_span" : "查询端口组",
			"FMTree_3_span" : "queryPortGroups",
			"FMTree_4_span" : "查询数据存储",
			"FMTree_5_span" : "queryDataStores",
			"FMTree_6_span" : "创建虚拟机",
			"FMTree_7_span" : "createVM",

			"FMTree_3_span_tag" : "查询端口组",
			"FMTree_5_span_tag" : "查询数据存储",
			"FMTree_7_span_tag" : "创建虚拟机",

			"querySiteReqEx_uriLabel" : "站点",
			"queryDVSwitchEx_uriLabel" : "虚拟交换机",
			"queryDVSwitchEx_uriNullTip" : "该站点Uri没有对应的DVSwitchUri",
			"queryDVSwitchEx_uriTip" : "虚拟交换机Uri为必选项",
			"queryDVSwitchEx_uriFirstSiteTip" : "请先选择一个站点Uri",
			
			"querySiteUriEx_uriNotNullTip" : "站点Uri为必选项",
			
			"createVMReq_VM_diskNotNull" : "磁盘大小必填",
			
			"queryDataStores_limit_numRangeNull" : "请输入整数，范围 1-100",
			"queryDataStores_offset_numRangeNull" : "请输入正整数",
			"createVMReq_vmParameters_dataStoreNotNull" : "存储URN为必填项",
			"createVMReq_VM_sequenceNumNotNull" : "总线槽位编号为必填项",
			"createVMReq_vmParameters_portGroupNotNull" : "端口组标识为必填项",
			"createVMReq_MemorySet_limit_illegalNull" : "内存上限大小为虚拟机内存大小",
			/** ***********************queryDataStores*************************** */
			"queryDataStoresInterface" : "接口名称：",
			"queryDataStoresInterfaceName" : "分页查询站点/主机/集群下所有数据存储",
			"queryDataStoresDesc" : "该接口用于分页查询站点/主机/集群下所有数据存储信息。",

			"queryDataStoresReqEx_siteUriTd" : "站点URI。",
			"queryDataStoresReqEx_datastoreQueryParamsTd" : "数据存储查询消息。",
			"queryDataStoresReqEx_datastoreQueryParams_limitTd" : "此次查询返回数量，1~100。如果limit和offset都没设置，则查询站点下所有数据存储。",
			"queryDataStoresReqEx_datastoreQueryParams_offsetTd" : "偏移量，必须是数字。如果limit和offset都没设置，则查询站点下所有数据存储。",
			"queryDataStoresReqEx_datastoreQueryParams_scopeTd" : "scope为clusterUrn 、 hostUrn 或storageUnitUrn。",
			"queryDataStoresReqEx_datastoreQueryParams_statusTd" : "scope为clusterUrn(集群) 或者storageUnitUrn(存储设备)时，标识数据存储状态，枚举值：NORMAL可用；ABNORMAL不可用，CREATING创建中，DELETING删除中;<br>scope为hostUrn (主机) 时，标识主机和数据存储的关联状态，枚举值：CONNECTING关联中；CONNECTED已关联；DISCONNECTING解关联；ABNORMAL异常。",
			"queryDataStoresReqEx_datastoreQueryParams_nameTd" : "数据存储名称，支持模糊过滤。<br>[1,256]",
			"queryDataStoresReqEx_datastoreQueryParams_exceptDatastoreTypeTd" : "需要过滤的存储类型，当前只能过滤LUN（裸设备映射）。",

			"queryDataStoresResp_totalTd" : "返回总数。",
			"queryDataStoresResp_listTd" : "数据存储列表。",

			"queryDataStoresResp_Datastore_urn" : "唯一标识数据存储的urn。",
			"queryDataStoresResp_Datastore_uri" : "唯一标识数据存储的uri。",
			"queryDataStoresResp_Datastore_suUrn" : "datastore所关联的存储设备Urn。",
			"queryDataStoresResp_Datastore_suName" : "datastore所关联的存储设备名称。",
			"queryDataStoresResp_Datastore_storageType" : "存储类型:数据存储类型分成4组，组内的虚拟机可以互相部署，组间不支持部署。[advanceSan] /[DSWARE] /[local,san,LUN]/[LOCALPOME, LUNPOME,NAS]<br> local，表示本地存储；<br> san，基本共享存储(大lun)；<br> advanceSan，共享存储(小lun)；<br> DSWARE，华为分布式存储系统；<br> NAS，表示NAS存储 ；<br> LOCALPOME，表示虚拟化的本地存储；<br> LUNPOME，表示虚拟化的共享存储(大LUN)；<br> LUN，只能用于裸设备映射的共享存储。",
			"queryDataStoresResp_Datastore_clusterSize" : "簇大小，虚拟化文件系统的簇大小，以KB为单位。",
			"queryDataStoresResp_Datastore_name" : "可读的数据存储的名字。",
			"queryDataStoresResp_Datastore_status" : "1.数据存储状态（NORMAL,ABNORMAL(预留),CREATING,DELETING）(NORMAL:表示存储设备已经添加为数据存储,不反映数据存储的真实物理状态)。<br>2.主机和数据存储的关联状态(关联中CONNECTING，已关联CONNECTED，解关联DISCONNECTING，异常ABNORMAL)。",
			"queryDataStoresResp_Datastore_capacityGB" : "数据存储的最大可用容量，以G为单位。",
			"queryDataStoresResp_Datastore_usedSizeGB" : "数据存储的已经使用空间，以G为单位。",
			"queryDataStoresResp_Datastore_freeSizeGB" : "数据存储的空闲空间，以G为单位。",
			"queryDataStoresResp_Datastore_hosts" : "数据存储挂接的主机。",
			"queryDataStoresResp_Datastore_isThin" : "是否支持精简配置。",
			"queryDataStoresResp_Datastore_description" : "描述。",
			"queryDataStoresResp_Datastore_thinRate" : "超分配比率，在100到300之间；如果不支持精简配置，则为100；只有支持精简配置，才能设置。",
			"queryDataStoresResp_Datastore_actualCapacityGB" : "实际总空间；针对精简配置；非精简配置情况下和capacityGB相同。",
			"queryDataStoresResp_Datastore_actualFreeSizeGB" : "实际剩余空间；针对精简配置；非精简配置情况下和freeSizeGB相同。",
			"queryDataStoresResp_Datastore_refreshTime" : "上次刷新时间，UTC时间， 格式如：\"2012-08-27 20:29:19\"。",

			"queryDataStoresReqEx_nameLabel" : "数据存储名称：",
			"queryDataStoresReqEx_limitLabel" : "单页查询量：",
			"queryDataStoresReqEx_offsetLabel" : "偏移量：",
			"queryDataStoresLabel" : "数据存储信息:",
			"createVMReq_dataStoreErrTip" : "请先查询数据存储",


			/** ***********************queryPortGroups*************************** */
			"PortGroupResourceInterface" : "接口名称：",
			"PortGroupResourceInterfaceName" : "查询DVSwitch下所有的PortGroup",
			"PortGroupDesc" : "该接口可用于分页查询DVSwitch下所有的PortGroup信息。",
			"queryPortGroupsReqEx_dvswitchUriTd" : "DVSwitchURI。",
			"queryPortGroupsReqEx_offsetTd" : "偏移量。",
			"queryPortGroupsReqEx_limitTd" : "单页查询量，最大为100。",
			"queryPortGroupsReqEx_portGroupNameTd" : "支持模糊查询，不区分大小写，值不能为null或\"\"。",
			"queryPortGroupsResp_totalTd" : "返回总数。",
			"queryPortGroupsResp_listTd" : "端口组列表。",

			"queryPortGroupsResp_PortGroup_urn" : "Portgroup 标识。",
			"queryPortGroupsResp_PortGroup_uri" : "Portgroup uri地址。",
			"queryPortGroupsResp_PortGroup_name" : "用户输入的portgroupName，长度[1,256], 名称不能重复(区分大小写)。",
			"queryPortGroupsResp_PortGroup_subnetUrn" : "关联的Subnet，portType为Access时，此字段可选，与vlanId、vlanRange、vxlanId必选其一。",
			"queryPortGroupsResp_PortGroup_portType" : "端口类型，默认值为Access。<br>0：Access；<br>1：Trunk。",
			"queryPortGroupsResp_PortGroup_dvsType" : "0: vSwitch 普通模式；<br>1: eSwitch-VMDQ，直通模式；<br> 2: SR-IOV直通模式 （保留取值）。",
			"queryPortGroupsResp_PortGroup_vlanId" : "关联的VlanId，范围0-4094，portType为Access时，此字段可选。<br> 0：表示不带vlan标签。",
			"queryPortGroupsResp_PortGroup_vxlanId" : "关联的VxlanId，范围4096 - 16777215。",
			"queryPortGroupsResp_PortGroup_vlanRange" : "表示关联的Vlan范围，最多可以包含20个vlan范围，vlan范围也可以是单个vlanid。<br>vlan范围用A–B表示，不同的范围用\",\"分割，A的vlanid要小于B的vlanid。<br> vlan范围内的vlanid取值范围是1-4094。",
			"queryPortGroupsResp_PortGroup_adminStatus" : "端口组内所有端口的UP/DOWN状态，缺省为UP；<br>R3C10版本仅作用于trunk类型端口组，可选。<br> 0:UP；<br>1:DOWN。",
			"queryPortGroupsResp_PortGroup_description" : "描述信息，长度：[0,1024]。",
			"queryPortGroupsResp_PortGroup_txLimit" : "发送平均带宽；(Mbps,) ，范围：1 – 网卡最大速率（10 * 1000）。",
			"queryPortGroupsResp_PortGroup_txPeakLimit" : "发送峰值带宽（Mbps），范围：txLimit– 网卡最大速率（10 * 1000）。<br>1）只有选择了txLimit，才能选择txPeakLimit字段。<br>2）txPeakLimit的默认值是txLimit。",
			"queryPortGroupsResp_PortGroup_txBurstSize" : "发送突发大小（Mbits），范围：1-10000Mbits。<br>1）只有选择了txLimit，才能选择txBurstSize字段。<br>2）txBurstSize默认值大小等于txPeakLimit。<br>",
			"queryPortGroupsResp_PortGroup_priority" : "发送优先级（2~7），优先级越小表示调度越快。<br>1）priority默认值为7。<br>2）只有选择txLimit时，priority默认值才生效。<br>",
			"queryPortGroupsResp_PortGroup_rxLimit" : "接收平均带宽(Mbps) ， 范围：1 – 网卡最大速率（10 * 1000）。",
			"queryPortGroupsResp_PortGroup_rxPeakLimit" : "接收峰值带宽（Mbps），范围：rxLimit– 网卡最大速率（10 * 1000）。<br> 1）只有选择了rxLimit，才能选择rxPeakLimit字段。<br> 2）rxPeakLimit的默认值是rxLimit。",
			"queryPortGroupsResp_PortGroup_rxBurstSize" : "接收突发大小（Mbits），范围：1-10000Mbits。<br>1）只有选择了rxLimit，才能选择rxBurstSize字段。<br>2）rxBurstSize默认值大小等于rxPeakLimit。<br>",
			"queryPortGroupsResp_PortGroup_isDhcpIsolation" : "Dhcp隔离开关，<br>true：打开隔离开关；<br>false：关闭开关（默认）。",
			"queryPortGroupsResp_PortGroup_isIpMacBind" : "IP和MAC绑定开关，<br>true：开启IP和MAC绑定开关；<br>false：关闭开关（默认）。",
			"queryPortGroupsResp_PortGroup_isEnablePG" : "端口组开关：<br>true: 开启端口组；<br>false：关闭端口组，默认为true。",
			"queryPortGroupsResp_PortGroup_vspNum" : "portGroup中的Vsp总数。",
			"queryPortGroupsResp_PortGroup_multicastIp" : "组播地址。",
			"queryPortGroupsResp_PortGroup_arpBcstSuppress" : "ARP广播报文抑制带宽；(Kbps) ，范围：1Kbps~1024Kbps；<br>ARP广播抑制带宽值为0表示关闭。（默认）<br>ARP广播抑制带宽值在1Kbps~1024Kbps范围内表示开启。<br>开启时，默认值约是2Kbps。",
			"queryPortGroupsResp_PortGroup_ipBcstSuppress" : "IP广播报文抑制带宽；(Kbps,)，范围：5Kbps~1024Kbps ；<br>IP广播报文抑制带宽值为0表示关闭。（默认）<br>IP广播抑制带宽值在5Kbps~1024Kbps范围内表示开启。<br>开启时，默认值约是10Kbps。",

			"queryPortGroupsReqEx_nameLabel" : "端口组名称：",
			"queryPortGroupsReqEx_limitLabel" : "单页查询量：",
			"queryPortGroupsReqEx_offsetLabel" : "偏移量：",
			"PortGroupsLabel" : "端口组列表信息：",
			"createVMReq_portGroupErrTip" : "请先查询端口组",

			/** ***********************queryPortGroups*************************** */
			"createVMInterface" : "接口名称：",
			"createVMInterfaceName" : "创建虚拟机",
			"CreateVmDesc" : "该接口用于创建虚拟机",
			"CreateVmReq_siteUriTd" : "站点URI。",
			"CreateVmReq_volumeCreateParamsTd" : "创建虚拟机所需参数信息。",

			"CreateVmReq_VolumeCreateParams_name" : "虚拟机名称，长度为[0,256]。",
			"CreateVmReq_VolumeCreateParams_description" : "虚拟机描述信息，长度[0,1024]。",
			"CreateVmReq_VolumeCreateParams_group" : "虚拟机组名称，长度为[0,1024]。<br>当客户端为FM或者VDI时，按如下规则使用：<br>\"FC_\" – FC；\"FM_\" – FM；\"VDI\" – VDI。<br>前三个字符保留以后扩展，其余字段供各部件自行定义使用规则。<br>此字段对旧版本兼容说明：<br>\"VRMGroup\"--R3C0 FM/VRM用来表示管理集群。<br>FM页面创建虚拟机模板时，使用group字段保存虚拟机模板的类型：<br>应用虚拟机模板(\"vapp_template\")；<br>桌面模板(\"desktop_template\")。<br>VDI支持将桌面模板(\"desktop_template\")类型模板修改为如下四种类型：<br>桌面完整复制模板(\"fullcopy_template\")；<br>桌面链接克隆模板(\"linkclone_template\")；<br>桌面快速封装模板(\"quickprep_template\")；<br>桌面PVD链接克隆模板(\"pvd_template\")。<br>后续扩展一律参照以上执行，不允许再进行此类扩展。",
			"CreateVmReq_VolumeCreateParams_location" : "虚拟机所属，可以是集群或主机，clusterUrn或hostUrn；若为hostUrn则本次创建若需要启动的话将在该主机上启动。",
			"CreateVmReq_VolumeCreateParams_isBindingHost" : "是否与主机绑定。<br>true：与主机绑定；<br>false:不绑定主机。<br>当location为hostUrn时有效；若指定主机不位于集群下时系统自动将此属性处理为true，若主机位于集群下时默认为false。",
			"CreateVmReq_VolumeCreateParams_vmConfig" : "虚拟机配置。",
			"CreateVmReq_VolumeCreateParams_autoBoot" : "是否自动启动，默认启动。",
			"CreateVmReq_VolumeCreateParams_osOptions" : "虚拟机操作系统信息。",
			"CreateVmReq_VolumeCreateParams_vncAccessInfo" : "VNC设置，目前仅支持设置vncPassword。",
			
			
			"CreateVmReq_VolumeCreateParams_VmConfig_cpu" : "CPU规格。",
			"CreateVmReq_VolumeCreateParams_VmConfig_memory" : "内存规格。",
			"CreateVmReq_VolumeCreateParams_VmConfig_disks" : "磁盘规格，最多为11个。",
			"CreateVmReq_VolumeCreateParams_VmConfig_nics" : "网卡配置，最大数量为8。（默认与原虚拟机/模板各网卡一致，若非null则覆盖原有网卡设置，注：集合非null但长度为0时表示新虚拟机无网卡）。",
			"CreateVmReq_VolumeCreateParams_VmConfig_usb" : "USB配置，包括控制器和设备。<br>若是null，与原虚拟机/模板一致，若非null则覆盖原有USB配置，集合非null但长度为0时表示新虚拟机无USB配置。",
			"CreateVmReq_VolumeCreateParams_VmConfig_gpu" : "目前只支持一个，即gpu与虚拟机一对一关系。<br>创建vm或模板克隆部署虚拟机时可选，若数组非空且长度不为0，必须携带有效的gpu;若数组为空或长度为0,新虚拟机无gpu设备。",
			"CreateVmReq_VolumeCreateParams_VmConfig_properties" : "虚拟机其他配置信息。",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_CPU_quantity" : "虚拟机的总核数，范围[1,64]。",
			"CreateVmReq_VolumeCreateParams_VmConfig_CPU_reservation" : "虚拟机CPU的预留值，单位为MHz。<br>默认0，0代表不预留。<br>大小不能超过虚拟机quantity*站点下主机的最大CPU主频。",
			"CreateVmReq_VolumeCreateParams_VmConfig_CPU_weight" : "虚拟机cpu的份额，个数，无单位。范围[1, 64*2000]；默认quantity*1000。",
			"CreateVmReq_VolumeCreateParams_VmConfig_CPU_limit" : "虚拟机cpu上限，单位是MHz。<br>默认0，0代表不预留。<br>大小不能超过虚拟机quantity*站点下主机的最大CPU主频。",
			"CreateVmReq_VolumeCreateParams_VmConfig_CPU_cpuHotPlug" : "CPU热插拔开关（预留），作用是通过开关判断虚拟机是否支持CPU热插拔，包括：<br>0：禁用CPU热插拔；<br>1： 启用CPU热插；<br>2：启用CPU热插拔。<br>默认为0，表示禁用CPU热插拔。<br>注：虚拟机设置禁用CPU热插拔后，不支持CPU热插拔，但是支持虚拟机CPU热插拔重启生效；虚拟机不支持启用CPU热插拔，预留CPU热插拔选项。",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_Memory_quantityMB" : "虚拟机内存总大小(单位M)，128~1024*1024。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Memory_reservation" : "虚拟机内存的预留值，单位为M。默认0，0代表不预留。大小不能超过虚拟机内存大小。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Memory_weight" : "虚拟机内存的份额，个数，无单位，范围[1, 1024*1024*20]，默认quantity*10。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Memory_limit" : "虚拟机内存上限，单位是M，大小为虚拟机内存大小，均为内存规格，其他不合法。预留，内部自动处理为quantityMB。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Memory_memHotPlug" : "mem热插开关（预留），作用是通过开关判断虚拟机是否支持内存热插，包括禁用内存热插(0)、启用内存热插(1)，默认禁用内存热插拔(0)。<br>注：禁用内存热插，支持虚拟机内存热插重启生效。",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_pciType" : "磁盘挂载的总线类型，当前版本为：“IDE”，“SCSI”。<br>只有在裸设备映射上创建的磁盘才可以挂载到SCSI总线上，其它的都是IDE总线上。<br>如果是以前版本，都是默认IDE。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_sequenceNum" : "磁盘对应的总线槽位编号，每种总线类型的编号分别为1-23，不可与现有同一总线类型的重复。<br>创建虚拟机时：<br>1、  volumeUrn携带：表明将已有的卷插在此总线上，后面的参数无效；<br>2、  volumeUrn不携带时：quantityGB、datastoreUrn必选，isDataCopy无效。isThin可选。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_volumeUrn" : "硬盘对应卷标识，表示使用已有的卷，此时忽略后面的参数。<br>",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_volumeUuid" : "注册虚拟机时必选。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_quantityGB" : "虚拟机磁盘大小，单位：GB。系统卷大小不超过2T，分以下几种种规格：<br>advanceSan/FusionStorage/local的数据存储，支持1G~2048G；<br>LOCALPOME的数据存储，支持1G~2043G；<br>san类型的数据存储，支持1G~30T；<br>NAS，LUNPOME的数据存储，支持1G~64T。<br>",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_isDataCopy" : "克隆/模板部署时，是否从虚拟机/模板对应的硬盘复制数据。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_datastoreUrn" : "存储URI地址。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_isThin" : "是否精简制备；在volumeUrn不携带时，生效。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_indepDisk" : "是否独立磁盘，不携带时表示否。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_persistentDisk" : "是否持久化磁盘，不携带时表示为是(true)，表示卷为持久化磁盘。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_storageType" : "存储类型（该参数仅用于查询，不支持配置时下发该参数）。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_volType" : "磁盘类型参数，支持创建、查询虚拟机接口，取值为：<br>0：普通卷；<br>1：延迟置零卷。<br>不携带时代表0，普通卷。该字段在isThin参数为false时生效，在isthin参数为true时失效。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_maxReadBytes" : "每秒最大读字节数，单位为KB/s。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_maxWriteBytes" : "每秒最大写字节数，单位为KB/s。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_maxReadRequest" : "每秒最大读请求个数，单位为个/s。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_maxWriteRequest" : " 每秒最大写请求个数，单位为个/s。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_type" : "卷类型，取值为normal（普通卷）、share（共享卷）。",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_name" : "虚拟机网卡名称。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_urn" : "网卡标识，仅查询响应中携带。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_uri" : "访问网卡的URI，仅查询响应中携带。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_portGroupUrn" : "portGroup 标识。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_portGroupName" : "portGroup名称。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_mac" : " Mac地址，系统系统内部分配。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_ip" : "IP地址，系统内部分配或从虚拟机内部获取的IP。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_sequenceNum" : "网卡对应的总线编号，1-12，不可重复，对于创建虚拟机忽略此参数。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_virtIo" : "网卡类型，0: HW_X_NET (默认值)；1: HW_V_NET；可选参数；不携带使用默认值。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_ipList" : "网卡的IP地址，多个IP地址的场景下，使用英文分号分隔。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_nicType" : "网卡类型：1：inic网卡；其他：普通网卡。",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_Usb_controllerType" : "USB控制器类型:EHCI+UHCI，xHCI（当前版本不支持，预留）。<br>说明：EHCI+UHCI支持USB2.0和USB1.1设备，xHCI支USB3.0、USB2.0和USB1.1设备。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Usb_device" : "USB设备，最大数量为4。<br>。若数组为空或长度为0,新虚拟机无USB设备。",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_Usb_UsbDevice_usbUrn" : "USB设备标识。",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_GPU_gpuUrn" : "图形处理器标识。",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_bootOption" : "虚拟机第一启动选项，包括网络(pxe)，硬盘(disk)和光驱(cdrom)启动方式。默认disk。<br>说明，（1）创建空虚拟机时请选择光驱启动，创建PVS虚拟机时请选择网络启动。（2）若第一启动项为网络、光驱时系统自动设置第二启动项为硬盘。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_isEnableHa" : "虚拟机是否支持HA。默认true。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_vmFaultProcess" : "虚拟机蓝屏处理策略：不处理(notprocess)，HA(ha)或重启(reboot)。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_reoverByHost" : "主机上电后是否随主机同时启动，默认为false，对于可靠性要求高的虚拟机推荐设置为True。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_clockMode" : "虚拟机的时钟模式，包括自由时(freeClock)钟和同步时钟(synchClock)。默认自由时钟。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_isEnableMemVol" : "是否有内存卷，默认为true。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_isEnableFt" : "虚拟机是否支持FT(预留)，默认false，不支持FT。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_isAutoUpgrade" : "PV driver是否自动化升级，true：自动升级，false:手动升级，默认为true。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_attachType" : "块设备的挂卷方式，是否支持基本共享存储向存储虚拟化热迁移，false：不支持，true：支持默认为false，。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_gpuShareType" : "GPU共享类型：server，client，normal；默认normal。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_isReserveResource" : "是否始终保留资源，仅在绑定主机时生效；true 保留，false 不保留；默认false。",
			
			"CreateVmReq_VolumeCreateParams_OsOption_osType" : "虚拟机操作系统类型。值：Windows，Linux，Other。",
			"CreateVmReq_VolumeCreateParams_OsOption_osVersion" : "操作系统版本号。",
			"CreateVmReq_VolumeCreateParams_OsOption_guestOSName" : "guest OS名称，长度[0,64]。",
			"CreateVmReq_VolumeCreateParams_OsOption_hostname" : "虚拟机主机名，目前为系统通过tools查询到客户机主机名；创建时不携带此参数。",
			"CreateVmReq_VolumeCreateParams_OsOption_password" : "虚拟机密码；创建虚拟机时系统自动生成并推送到客户机；创建时不携带此参数。",
			
			"CreateVmReq_VolumeCreateParams_VncAccessInfo_hostIp" : "虚拟机所在主机IP地址，null为非法值，其他未合法值；只在查询时有效。",
			"CreateVmReq_VolumeCreateParams_VncAccessInfo_vncPort" : "虚拟机VNC端口，-1为非法值，其他为合法值；只在查询时有效。",
			"CreateVmReq_VolumeCreateParams_VncAccessInfo_vncPassword" : "虚拟机VNC密码；修改VNC密码时，密码最大长度不超过8个字符，仅支持英文大小写字母和数字。",
			
			"CreateVmResp_urnTd" : "唯一标识资源的urn。",
			"CreateVmResp_uriTd" : "资源uri。",
			"CreateVmResp_taskUrnTd" : "对应的任务标识。",
			"CreateVmResp_taskUriTd" : "对应的任务uri。",
			
			
			"CreateVmReq_templateIdTd" : "用于创建VM的模板ID。",
			"CreateVmReq_vpcIdTd" : "虚拟机所在的VPC编码。",
			"CreateVmReq_countTd" : "创建的VM数量，1-30。",
			"CreateVmReq_namePrefixTd" : "虚拟机名称前缀，后缀由底层资源池决定 ；由英文字母、中文、数字、中划线、下划线及空格组成，长度范围1个~56个字符。",
			"CreateVmReq_hostNamePrefixTd" : "虚拟机计算机名字前缀，1-13位字符，名称包含字母、数字和中划线，同时不能由纯数字组成。 ",
			"CreateVmReq_descriptionTd" : "虚拟机描述，最长1024字符批量创建所有虚拟机的描述保持一致。",
			"CreateVmReq_CreateVmSpecTd" : "虚拟机规格虚拟机规格ID和虚拟机cpu/内存/磁盘规格必须有一个不为空，如果都不为空则以虚拟机规格对象为准。",
			"CreateVmReq_VmUniqueInfoTd" : "每台虚拟机特有的信息，如自定义IP。",
			"CreateVmReq_CreateVmAttributeTd" : "虚拟机的高级属性选项。",
			"CreateVmReq_CreateVmSpec_idTd" : "虚拟机规格编码，规格编码不允许和cpu，内存，磁盘规格同时为空。",
			"CreateVmReq_CreateVmSpec_cpuTd" : "虚拟机CPU信息，规格编码不允许和cpu，内存，磁盘规格同时为空。",
			"CreateVmReq_CreateVmSpec_memoryTd" : "虚拟机内存信息，规格编码不允许和cpu，内存，磁盘规格同时为空。",
			"CreateVmReq_CreateVmSpec_userVolsTd" : "虚拟机新增磁盘信息，如果为空则只是按照模板磁盘信息创建虚拟机，不创建额外磁盘。",
			"CreateVmReq_CreateVmSpec_nicsTd" : "虚拟机网卡信息。",
			"CreateVmReq_VmUniqueInfo_infoTd" : "虚拟机名字信息需要由调用者保证名字不重复，否则可能会导致创建虚拟机失败，当前版本预留使用。",
			"CreateVmReq_VmUniqueInfo_customNicTd" : "虚拟机自定义网卡信息。",
			"CreateVmReq_CreateVmAttribute_isEnableHaTd" : "虚拟机是否支持HA；true：支持HA，false：不支持HA。",
			"CreateVmReq_CreateVmSpec_CreateVmCPUSpec_countTd" : "虚拟机的总核数，范围：1~64。",
			"CreateVmReq_CreateVmSpec_CreateVmMemorySpec_countTd" : "虚拟机内存总大小(单位 M)，128~1024*1024。",
			"CreateVmReq_CreateVmSpec_CreateVmVolumeSpec_sizeTd" : "虚拟机磁盘大小，单位为GB。",
			"CreateVmReq_CreateVmSpec_CreateVmVolumeSpec_mediaTypeTd" : "磁盘存储介质 取值为：SAN-SSD, SAN-SAS&FC,SAN-SATA,SAN-Any。默认为SAN-Any【仅IT资源池支持】。",
			"CreateVmReq_CreateVmSpec_CreateVmNicSpec_networkIDTd" : "虚拟机网卡选择的网络ID。",
			"CreateVmReq_VmUniqueInfo_VmDescriptionInfo_nameTd" : "虚拟机名字；由文字母、中文、数字、中划线、下划线及空格组成，长度范围1个~64个字符。",
			"CreateVmReq_VmUniqueInfo_NicCustomizationSpec_ipTd" : "虚拟机网卡IPv4地址。",
			"CreateVmReq_VmUniqueInfo_NicCustomizationSpec_ips6Td" : "虚拟机网卡IPv6地址。",
			"CreateVmResp_taskIdTd" : "任务id。",
			
			"CreateVMBtnLabel" : "创建虚拟机",
			"vmLocationClusterOption" : "集群",
			"vmLocationHostOption" : "主机",
			"createVMReq_nameLabel" : "虚拟机名称：",
			"createVMReq_SystemStyleLabel" : "操作系统类型：",
			"createVMReq_SystemVersionLabel" : "操作系统版本号：",
			"createVMReq_vmParametersLabel" : "虚拟机参数：",
			"batchCreateVMReq_vmFlavorLabel" : "虚拟机规格：",
			"createVMReq_vmParameters_CPUSetLabel" : "CPU信息：",
			"createVMReq_vmParameters_CPUSet_cpuNumLabel" : "&nbsp;&nbsp;虚拟机核数：",
			"createVMReq_vmParameters_CPUSet_ReservationLabel" : "&nbsp;&nbsp;虚拟机CPU预留值",
			"createVMReq_vmParameters_CPUSet_WeightLabel" : "&nbsp;&nbsp;虚拟机CPU份额",
			"createVMReq_vmParameters_CPUSet_limitLabel" : "&nbsp;&nbsp;虚拟机CPU上限",
			"createVMReq_vmParameters_MemorySetLabel" : "内存信息：",
			"createVMReq_vmParameters_MemorySet_memoryNumLabel" : "&nbsp;&nbsp;虚拟机内存大小：",
			"createVMReq_vmParameters_MemorySet_reservationLabel" : "&nbsp;&nbsp;虚拟机内存预留值",
			"createVMReq_vmParameters_MemorySet_weightLabel" : "&nbsp;&nbsp;虚拟机内存份额",
			"createVMReq_vmParameters_MemorySet_limitLabel" : "&nbsp;&nbsp;虚拟机内存上限",
			"createVMReq_vmParameters_userDisksLabel" : "新增磁盘信息：",
			"createVMReq_vmParameters_userDisks_bsSizeLabel" : "磁盘大小",
			"createVMReq_vmParameters_userDisks_bsQosInfoLabel" : "磁盘类型",
			"createVMReq_vmParameters_userDisks_datastoreUrnLabel" : "存储URN标识",
			"createVMReq_vmParameters_userDisks_sequenceNumLabel" : "磁盘对应的总线槽位编号",
			"createVMReq_vmParameters_userDisks_delUserDiskLabel" : "删除",
			"createVMReq_vmParameters_nicsLabel" : "新增虚拟机网卡信息 ：",
			"createVMReq_vmParameters_nics_nicOrderLabel" : "网卡序号",
			"createVMReq_vmParameters_nics_portGroupUrnLabel" : "端口组标识",
			"createVMReq_vmParameters_nics_nameLabel" : "虚拟机网卡名称",
			"createVMReq_vmParameters_nics_sequenceNumLabel" : "网卡对应的总线编号",
			"createVMReq_vmParameters_nics_ipLabel" : "IP地址",
			"createVMReq_vmParameters_nics_delNicLabel" : "删除",
			
			
			"VMInfoLabel" : "虚拟机信息：",
			"createVMReq_clusterAndHostTip" : "请选择一个集群或主机",
			"createVMReq_OsVersionsTip" : "请选择操作系统版本",
			"createVMReq_vmConfig_cpu_quantityTip" : "请输入整数",
			"createVMReq_vmConfig_cpu_quantityoutRangeTip" : "范围：1~64",
			"createVMReq_vmParameters_MemorySet_memoryNumErr_notNumTip" : "请输入整数",
			"createVMReq_vmParameters_MemorySet_memoryNumErr_outRangeTip" : "范围：128~1024*1024"

		}
	};
}