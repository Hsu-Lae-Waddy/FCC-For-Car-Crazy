function ProfileCard ({name, role, description ,color}){
    return (
      <div className="bg-gray-500 w-80 text-center rounded-lg shadow p-6">
        <div className={`w-24 h-24 rounded-full mx-auto mb-4 ${color}`}></div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray text-sm">{role}</p>
        <p className="text-gray text-sm">{description}</p>
        <button className=""> contact me</button>
      </div>
    )
}

export default ProfileCard;