import React from 'react'


function Grupos() {
    return (
        <div>
            <h4> Grupos / Slots</h4>
            <div>
                <h4>#</h4>
                <h4>Grupos</h4>
                <h4>Slot</h4>
            </div>
            <form>
                <div>
                    <button>-</button>
                    <input type="text" name="group1" />
                    <div>
                        <form>
                            <input type="text" name="g1_slot1" />
                            <button>-</button>
                            <button>+ Add Slot</button>
                        </form>
                    </div>
                    <button>+ Add Group</button>
                </div>

            </form>

        </div>
    )
}

export default Grupos