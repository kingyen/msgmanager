'use strict';

function MsgManager()
{
    var gThis = undefined;
    var msgHashmap = [];
    var MSG_WORKING = 1;
    var MSG_LOGGING = true;

    this.init = function()
    {
        gThis = this;
    }

    this.run = function()
    {
        for(var index in msgHashmap)
        {
            var msgVal = msgHashmap[ index ];
            msgProcess( index, msgVal );
        };
    }

    this.pushMsg = function( msg )
    {
        msgHashmap[ msg ] = MSG_WORKING;
        if(MSG_LOGGING) 
        {
            console.log( msg + " has been added to msg list!" );
        };
    }

    function msgProcess(msg, val)
    {
        if ( val == MSG_WORKING )
        {
            if ( msg == "START_LOADING_ANIM" )
            {
                GCommonFuncUtility.DoStartLoadAnim( "container" );
                deleteMsg( msg );
            }
            else if ( msg == "REMOVE_LOADING_ANIM" )
            {
                GCommonFuncUtility.DoRemoveLoadAnim( "container" );
                deleteMsg( msg );
            }
        };
    }

    function deleteMsg( msg ) 
    {
        delete msgHashmap[msg];
        if(MSG_LOGGING) 
        {
            console.log( msg + " has been processed!" );
        };
    }
}