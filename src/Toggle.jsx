function Toggle() {
  let flag = true;

  function disApper() {
    console.log("first");
    {
      flag == true && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          perspiciatis eum non nesciunt illo dolore odit x voluptatum ad
          voluptate dolores inventore earum sequi, odio cum vitae voluptatibus
          placeat dicta.
        </p>
      );
    }
  }

  return (
    <>
      <button onClick={disApper}>Disaper Text</button>
    </>
  );
}

export default Toggle;
