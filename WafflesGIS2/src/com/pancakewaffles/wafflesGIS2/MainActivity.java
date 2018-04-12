package com.pancakewaffles.wafflesGIS2;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.geom.GeometryFactory;
import com.vividsolutions.jts.geom.LinearRing;
import com.vividsolutions.jts.geom.Point;
import com.vividsolutions.jts.geom.Polygon;
import com.vividsolutions.jts.io.WKTWriter;

import delaunay_triangulation.Delaunay_Triangulation;
import delaunay_triangulation.Point_dt;
import delaunay_triangulation.Triangle_dt;

import android.opengl.GLSurfaceView;
import android.os.Bundle;
import android.os.Environment;
import android.app.Activity;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;




public class MainActivity extends Activity {
	GeometryFactory gf=new GeometryFactory();
	Coordinate[] pgc=new Coordinate[100];
	Point_dt[] collectionofcoords= new Point_dt[100];
	public ArrayList<Point_dt[]> triangles;
	TextView text;
	String sdcard = Environment.getExternalStorageDirectory().toString();
	private GLSurfaceView glView;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
		for(int i=0;i<99;i++){
			if(i%2==0){
	    	 pgc[i]=new Coordinate(i,5*i);
			}else{
				pgc[i]=new Coordinate(i,2*i);
			}
	     }
	    pgc[99]=pgc[0];
		for(int i=0;i<100;i++){
			collectionofcoords[i]= new Point_dt(0 + (int)(Math.random() * ((100 - 0) + 1)),0 + (int)(Math.random() * ((100 - 0) + 1)),0 + (int)(Math.random() * ((50 - 0) + 1))) ; // x, y, z
		}
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

	   
	public void PIPAnalysis(View view) throws IOException{
		
		LinearRing linearring = gf.createLinearRing(pgc);
		final Polygon polygon=gf.createPolygon(linearring,null);
		final Point point=gf.createPoint(new Coordinate(5,5));
		
		long startTime=System.currentTimeMillis();
		boolean within=point.within(polygon);
		long endTime=System.currentTimeMillis();
		long elapsedTime=endTime-startTime;
		
		text=(TextView) findViewById(R.id.textView1);
		text.setText(within+" Time Taken:"+elapsedTime+"ms");
		
		/*File file=new File(sdcard+"/polygon.wkt");
		file.createNewFile();
		FileWriter writer = new FileWriter(file); 
		WKTWriter wktwriter=new WKTWriter();
		wktwriter.write(polygon,writer); 
		writer.flush();
		writer.close(); */

		
	}
	
	public void DTriangulation(View view) throws IOException{
		
		
		long startTime=System.currentTimeMillis();
		Delaunay_Triangulation dt = new Delaunay_Triangulation(collectionofcoords);
		long endTime=System.currentTimeMillis();
		long elapsedTime=endTime-startTime;
		
		
		text=(TextView) findViewById(R.id.textView2);
		text.setText(dt.size()+" Time Taken:"+elapsedTime+"ms");
		
		triangles = DTtoTriListDT(dt);
		dt_triangles dt_triangles=new dt_triangles();
		dt_triangles.triangles=triangles;
		
		
		
		/*File file=new File(sdcard+"/dt.wkt");
		file.createNewFile();
		FileWriter writer = new FileWriter(file); 
		WKTWriter wktwriter=new WKTWriter();
		wktwriter.write(triangles,writer);
		writer.flush();
		writer.close(); */
	}
	
	public static ArrayList<Point_dt[]>  DTtoTriListDT(Delaunay_Triangulation DT){
		ArrayList<Point_dt[]> triangles = new ArrayList<Point_dt[]>();
		Point_dt[] triangle = new Point_dt[3];

		Iterator<Triangle_dt> surface = DT.trianglesIterator();
		while(surface.hasNext()){
		    Triangle_dt tri = surface.next();
		    triangle[0] = tri.p1();
		    triangle[1] = tri.p2();
		    triangle[2] = tri.p3();
		    triangles.add(triangle);
		}

		return triangles;
	}
	
	public void show_triangulation(View view){
	      glView = new GLSurfaceView(this);           // Allocate a GLSurfaceView
	      glView.setRenderer(new MyGLRenderer(this,dt_triangles.triangles)); // Use a custom renderer
	      this.setContentView(glView);                // This activity sets to GLSurfaceView

	}
	
	
	public void small_dataset(View view){ //10000 points
		pgc=new Coordinate[10000];
		collectionofcoords=new Point_dt[100];
		for(int i=0;i<9999;i++){
			if(i%2==0){
		    	 pgc[i]=new Coordinate(i,5*i);
				}else{
					pgc[i]=new Coordinate(i,2*i);
				}
	    	 
	     }
	    pgc[9999]=pgc[0];
		for(int i=0;i<100;i++){
			collectionofcoords[i] = new Point_dt(0 + (int)(Math.random() * ((100 - 0) + 1)),0 + (int)(Math.random() * ((100 - 0) + 1)),0 + (int)(Math.random() * ((50 - 0) + 1))); // x, y, z
		}
	}
	public void med_dataset(View view){ //50000 points
		pgc=new Coordinate[50000];
		collectionofcoords=new Point_dt[200];
		for(int i=0;i<49999;i++){
			if(i%2==0){
		    	 pgc[i]=new Coordinate(i,5*i);
				}else{
					pgc[i]=new Coordinate(i,2*i);
				}
	    	 
	     }
	    pgc[49999]=pgc[0];
		for(int i=0;i<200;i++){
			collectionofcoords[i] = new Point_dt(0 + (int)(Math.random() * ((200 - 0) + 1)),0 + (int)(Math.random() * ((200 - 0) + 1)),0 + (int)(Math.random() * ((75 - 0) + 1))); // x, y, z
		}
	}
	public void large_dataset(View view){ //250000 points
		pgc=new Coordinate[250000];
		collectionofcoords=new Point_dt[500];
		for(int i=0;i<249999;i++){
			if(i%2==0){
		    	 pgc[i]=new Coordinate(i,5*i);
				}else{
					pgc[i]=new Coordinate(i,2*i);
				}
	    	 
	     }
	    pgc[249999]=pgc[0];
		for(int i=0;i<500;i++){
			collectionofcoords[i] = new Point_dt(0 + (int)(Math.random() * ((500 - 0) + 1)),0 + (int)(Math.random() * ((500 - 0) + 1)),0 + (int)(Math.random() * ((200 - 0) + 1))); // x, y, z
		}
	}


}
