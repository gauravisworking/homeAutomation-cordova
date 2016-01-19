package com.test.homeAuto;

import android.os.AsyncTask;


import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;

public class TestPlugin extends CordovaPlugin
	{

	public final static String IP_ADDRESS = "192.168.0.108";
	public final static String PORT = "5511";


	private PrintWriter out;
	private BufferedReader in;

	@Override
	public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException
	{
		System.out.println("Inside execute method");

		if (action.equals("sayHello"))
		{
			System.out.println("Inside if");
			try
			{
				final String responseText = "Hello " + args.getString(0);
				cordova.getThreadPool().execute(new Runnable()
				{
				public void run()
				{
					callbackContext.success(responseText); // Thread-safe.
				}
				});
			}
			catch (JSONException e)
			{
				callbackContext.error("Failed to parse parameters");
			}
			return true;
		}
		else if (action.equals("startPin4"))
		{
			System.out.println("Inside if for start pin 4");
			new HttpRequestAsyncTask(callbackContext, "ON-4").execute();
			return true;
		}
		else if (action.equals("loginSuccess"))
		{
			System.out.println("Login Successfully...!!!");
			//AfterLogin afterLogin = new AfterLogin(args.getString(0));

		}
		return false;
	}

	public String sendRequest(String ipAddress, String portNumber, String parameterName)
	{
		String serverResponse = "ERROR";


		try
		{

			Socket socket = new java.net.Socket(ipAddress, Integer.parseInt(portNumber));

			in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			/***** Creating Object To Send Message To Server *****/
			out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(socket.getOutputStream())), true);
			sendMessage("1+");
			serverResponse = in.readLine();
			System.out.println(serverResponse);
			//serverResponse = "Done";
			out.flush();
			out.close();
			socket.close();

	            /*httpclient.se
	            // create an HTTP client
	            // define the URL e.g. http://myIpaddress:myport/?pin=13 (to toggle pin 13 for example)

	            URI website = new URI("http://"+ipAddress+":"+portNumber+"/?"+parameterName);
	            // create an HTTP GET object

	            HttpGet getRequest = new HttpGet();
	            // set the URL of the GET request

	            getRequest.setURI(website);
	            // execute the request
	            // get the ip address server's reply

	            HttpResponse response = httpclient.execute(getRequest);

	            InputStream content = null;
	            content = response.getEntity().getContent();

	            BufferedReader in = new BufferedReader(new InputStreamReader(content));
	            serverResponse = in.readLine();

	            // Close the connection
	            content.close();*/

		}
		catch (IOException e)
		{
			// IO error
			serverResponse = e.getMessage();
			e.printStackTrace();
		}

		// return the server's reply/response text
		return serverResponse;
	}

	private void sendMessage(String msgToServer)
	{
			/*if (out != null && !out.checkError())
			{	int lenght = msgToServer.length;
			for(int i =0;i<lenght;i++)
			{*/
		out.println(msgToServer);
		//Log.d(TAG , "Message Send To Server : "+ msgToServer[i]);
		//}
		out.flush();
			/*}
			else
			{
				//Log.e(TAG,"Unable to Send Message.");
			}*/
	}

	private class HttpRequestAsyncTask extends AsyncTask<Void, Void, Void>
		{

		// declare variables needed
		private String requestReply, ipAddress, portNumber;
		private String parameter;
		private CallbackContext callbackContext;

		public HttpRequestAsyncTask(CallbackContext callbackContext, String parameter)
		{
			this.callbackContext = callbackContext;
			this.ipAddress = IP_ADDRESS;
			this.portNumber = PORT;
			this.parameter = parameter;
		}

		/**
		 * Name: onPreExecute
		 * Description: This function is executed before the HTTP request is sent to ip address.
		 * The function will set the dialog's message and display the dialog.
		 */
		@Override
		protected void onPreExecute()
		{
		        /*alertDialog.setMessage("Sending data to server, please wait...");
		        if(!alertDialog.isShowing())
	            {
	                alertDialog.show();
	            }*/
		}

		/**
		 * Name: doInBackground
		 * Description: Sends the request to the ip address
		 *
		 * @param voids
		 * @return
		 */
		@Override
		protected Void doInBackground(Void... voids)
		{
		       /* alertDialog.setMessage("Data sent, waiting for reply from server...");
		        if(!alertDialog.isShowing())
	            {
	                alertDialog.show();
	            }*/
			requestReply = sendRequest(ipAddress, portNumber, parameter);
			return null;
		}


		/**
		 * Name: onPostExecute
		 * Description: This function is executed after the HTTP request returns from the ip address.
		 * The function sets the dialog's message with the reply text from the server and display the dialog
		 * if it's not displayed already (in case it was closed by accident);
		 *
		 * @param aVoid void parameter
		 */
		@Override
		protected void onPostExecute(Void aVoid)
		{
			System.out.println("Reply : " + requestReply);
			callbackContext.success(requestReply);

		}


		}
	}
