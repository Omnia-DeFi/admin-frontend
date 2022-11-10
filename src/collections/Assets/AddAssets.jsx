import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
import { AddAssetForm } from "../Form";

export const AddAssets = ({
  editMode,
  setEditMode,
  setAssets,
  collection,
  showModal,
  setShowModal,
  asset,
  users,
  setAsset,
}) => {
  const [key, setKey] = useState(0);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [floorArea, setFloorArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [otherRooms, setOtherRooms] = useState("");
  const [floorPrice, setFloorPrice] = useState("");
  const [hasOutdoorSpace, setHasOutdoorSpace] = useState("False");
  const [saleTimeframe, setSaleTimeframe] = useState("");
  const [extraConditionsLabels, setExtraConditionsLabels] = useState("");
  const [extraConditionsDescriptions, setExtraConditionsDescriptions] =
    useState("");
  const [loading, setLoading] = useState(false);
  const [AVMUrl, setAVMUrl] = useState("");
  const [surveyProofUrl, setSurveyProofUrl] = useState("");
  const [landRegistryUrl, setLandRegistryUrl] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    setTitle(asset?.title);
    setDescription(asset?.description);
    setFloorArea(asset?.floorArea);
    setBedrooms(asset?.bedrooms);
    setBathrooms(asset?.bathrooms);
    setOtherRooms(asset?.otherRooms);
    setFloorPrice(asset?.floorPrice);
    setHasOutdoorSpace(asset?.hasOutdoorSpace);
    setSaleTimeframe(asset?.saleTimeframe);
    setExtraConditionsLabels(asset?.extraConditionsLabels);
    setExtraConditionsDescriptions(asset?.extraConditionsDescriptions);
    setAVMUrl(asset?.AVM);
    setSurveyProofUrl(asset?.surveyProof);
    setLandRegistryUrl(asset?.landRegistry);
    setImageUrls(asset?.images);
  }, [asset]);

  async function create(e) {
    setLoading(true);
    e.preventDefault();
    setLoading(true);
    const data = {
      selectedUsers,
      title,
      description,
      floorArea,
      bedrooms,
      bathrooms,
      otherRooms,
      floorPrice,
      saleTimeframe,
      extraConditionsLabels,
      extraConditionsDescriptions,
      hasOutdoorSpace,
      AVM: AVMUrl,
      surveyProof: surveyProofUrl,
      landRegistry: landRegistryUrl,
      images: imageUrls,
      read: true,
    };
    try {
      fetch(`/api/${collection}/create`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Data", data);
          setAssets((prevData) => [...prevData, data.createdAsset]);
          setLoading(false);
          setShowModal(false);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const saveDataUpdate = (e) => {
    setLoading(true);
    e.preventDefault();
    const newData = {
      title,
      description,
      floorArea,
      bedrooms: +bedrooms,
      bathrooms: +bathrooms,
      otherRooms: +otherRooms,
      floorPrice: +floorPrice,
      saleTimeframe: +saleTimeframe,
      extraConditionsLabels,
      extraConditionsDescriptions,
      hasOutdoorSpace,
      AVM: AVMUrl,
      surveyProof: surveyProofUrl,
      landRegistry: landRegistryUrl,
      images: imageUrls,
    };
    try {
      console.log("asset", asset);
      fetch(`/api/${collection}/update/${asset?.id}`, {
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          setAssets((prevAssets) =>
            prevAssets.map((asset) => {
              if (asset.id === data.id) {
                console.log("data", data);
                return data;
              } else {
                console.log("asset is", asset);
                return asset;
              }
            })
          );
          console.log("data", data);
          setShowModal(false);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
    console.log("Save Data Update");
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setShowModal(true);
          setKey(key + 1);
        }}
      >
        Add
      </Button>

      {showModal && (
        <Modal
          key={key}
          confirmLoading={loading}
          open={showModal}
          title={editMode ? "Edit Asset" : "Add Asset"}
          okText={editMode ? "Edit Asset" : "Add Asset"}
          onOk={editMode ? saveDataUpdate : create}
          onCancel={() => {
            setShowModal(false);
            setAsset({});
            setEditMode(false);
          }}
        >
          <AddAssetForm
            users={users}
            setSelectedUsers={setSelectedUsers}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            floorArea={floorArea}
            setFloorArea={setFloorArea}
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            bathrooms={bathrooms}
            setBathrooms={setBathrooms}
            otherRooms={otherRooms}
            setOtherRooms={setOtherRooms}
            floorPrice={floorPrice}
            setFloorPrice={setFloorPrice}
            hasOutdoorSpace={hasOutdoorSpace}
            setHasOutdoorSpace={setHasOutdoorSpace}
            saleTimeframe={saleTimeframe}
            setSaleTimeframe={setSaleTimeframe}
            extraConditionsLabels={extraConditionsLabels}
            setExtraConditionsLabels={setExtraConditionsLabels}
            extraConditionsDescriptions={extraConditionsDescriptions}
            setExtraConditionsDescriptions={setExtraConditionsDescriptions}
            setAVMUrl={setAVMUrl}
            setSurveyProofUrl={setSurveyProofUrl}
            setLandRegistryUrl={setLandRegistryUrl}
            setImageUrls={setImageUrls}
          />
        </Modal>
      )}
    </div>
  );
};
